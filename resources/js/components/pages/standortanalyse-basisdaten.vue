<template>
    <div>
        <el-table
                v-show="loading"
                v-loading="loading"
                style="width: 100%">
        </el-table>
        <div id="app">
            <div id="tableau" ref="tableau"></div>
        </div>
        <div class="top20">
            <el-button @click="exportToPDF" type="primary"><i class="fa fa-save"></i> Export to Pdf</el-button>
        </div>
        <div class="top20">
            <el-button @click="gup('Blatt 4.1')" type="primary"><i class="fa fa-save"></i> Export to CSV</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                viz : {},
                current_sheet :{},
                bundesland : this.$store.getters.bundesland,
                loading: true,
                url: "https://eu-west-1a.online.tableau.com/t/goldmedia/views/" +
                    "StandortmonitorV_1_7_TP/2_2Beschftigte1?iframeSizedToWindow=true&:embed=y&:showAppBanner=false&:display_count=no&:showVizHome=no&:origin=viz_share_link",
                options: {
                    hideTabs: true,
                    width: "100%",
                    height: "100%",
                    'Bundesland': ""
                }
            }
        },
        methods: {
            exportToPDF() {
                this.viz.showExportPDFDialog();
            },
            initViz() {
                console.log("1");
                Promise.resolve(this.viz = new tableau.Viz(this.$refs.tableau, this.url, this.options))
                console.log(this.viz)
                //.then(value => {var sheet = value.getWorkbook().getActiveSheet();
                //if (this.bundesland.length > 0) {
                //    sheet.getWorksheets().get("Beschäftigte Bundesland").applyFilterAsync('Bundesland', "Brandenburg", tableau.FilterUpdateType.REPLACE);
                //}}

                /*var sheet = this.viz.getWorkbook().getActiveSheet();
                if (this.bundesland.length > 0) {
                    sheet.getWorksheets().get("Beschäftigte Bundesland").applyFilterAsync('Bundesland', "Brandenburg", tableau.FilterUpdateType.REPLACE);
                }*/;

                /*this.viz = new tableau.Viz(this.$refs.tableau, this.url, this.options)*/
            },
            taveChanges: async function () {
                await this.initViz();
                console.log(this.viz);
                /*setTimeout(function () {

                    sheet.getWorksheets().get("Blatt 4.1").applyFilterAsync('Bundesland', 'Brandenburg', tableau.FilterUpdateType.REPLACE);
                }, 10000);*/
                let sheet = document.getElementById("tableau");
                sheet = sheet.getWorkbook().getActiveSheet();
                switch (sheet.getSheetType()) {
                    case 'worksheet':
                        break;
                    case 'dashboard':
                        worksheets = sheet.getWorksheets();
                        for(i=0;i<worksheets.length;i++){
                            console.log(worksheets[i]) // Do anything you'd like with a given worksheet
                        }
                        break;
                    case 'story':
                        break;
                }
                //var sheet = this.viz.getWorkbook().getActiveSheet();
                //sheet.getWorksheets().get("Blatt 4.1").applyFilterAsync('Bundesland', 'Brandenburg', tableau.FilterUpdateType.REPLACE);

                //var sheet = this.viz.getWorkbook().getActiveSheet();
                //if (this.bundesland.length > 0) {
                //   sheet.getWorksheets().get("Blatt 4.1").applyFilterAsync('Bundesland', 'Brandenburg', tableau.FilterUpdateType.REPLACE);
                //}
                this.loading = false;
                /*this.initViz().then(function () {
                    var sheet = this.viz.getWorkbook().getActiveSheet();
                    if (this.bundesland.length > 0) {
                        sheet.getWorksheets().get("Beschäftigte Bundesland").applyFilterAsync('Bundesland', this.bundesland, tableau.FilterUpdateType.REPLACE);
                    }
                });*/
            },

            getTableau: function() {
                console.log("getTableau");
                return parent.parent.tableau;
            },

            getCurrentViz: function () {
                console.log("getcurrentviz");
                return getTableau().VizManager.getVizs()[0];
            },
            gup: function (name) {
                name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");

                var regexS = "[\\?&]"+name+"=([^&#]*)";
                var regex = new RegExp( regexS );
                var decoded_uri = decodeURIComponent(window.location.href);
                var results = regex.exec( decoded_uri );

                if( results == null ){
                    sheetName = "";
                }  else {
                    sheetName= results[1];
                }
                getUnderlyingData(sheetName);
            },
            getUnderlyingData: function (sheetName) {
                viz = getCurrentViz();
                workbook = viz.getWorkbook();
                sheet=workbook.getActiveSheet().getWorksheets().get(sheetName)
                options = {
                    maxRows: 0,
                    ignoreSelection: true,
                    includeAllColumns: false
                };
                sheet.getSummaryDataAsync(options).then(function(t) {
                    buildMenu(t);
                });
            },
            buildMenu: function(table) {
                console.log("entering build menu");
                var columns = table.getColumns();
                var data = table.getData();

                function reduceToObjects(cols, data) {
                    var fieldNameMap = $.map(cols, function (col) {
                        return col.getFieldName();
                    });
                    var dataToReturn = $.map(data, function (d) {
                        return d.reduce(function (memo, value, idx) {
                            memo[fieldNameMap[idx]] = value.value;
                            return memo;
                        }, {});
                    });
                    return dataToReturn;
                }

                var niceData = reduceToObjects(columns, data);
                alasql("SELECT * INTO CSV('TableauDataExport.csv',{headers:true}) FROM ?", [niceData]);
            },

        },
        mounted: function () {
            //this.initViz();
            this.taveChanges();
        }
    }
</script>

<style scoped>

</style>
