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
            <el-button @click="getVizData1" type="primary"><i class="fa fa-save"></i> Apply personal filters</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                viz: {},
                bundesland: this.$store.getters.bundesland,
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
            /*initViz() {
                //this.$store.getters.bundesland
                //return Promise.resolve(this.viz = new tableau.Viz(this.$refs.tableau, this.url, this.options));
                this.viz = new tableau.Viz(this.$refs.tableau, this.url, this.options)
                this.loading = false;
                //setTimeout(this.taveChanges, 5000);
            },*/
            initViz1() {
                let vizDiv = document.getElementById("tableau"),
                    url = "https://eu-west-1a.online.tableau.com/t/goldmedia/views/StandortmonitorV_1_7_TP/2_2Beschftigte1?iframeSizedToWindow=true&:embed=y&:showAppBanner=false&:display_count=no&:showVizHome=no&:origin=viz_share_link",

                    options = {

                        hideToolbar: true,
                        onFirstInteractive: function () {

                            let workbook = this.viz.getWorkbook();
                            let dash = this.viz.getWorkbook().getActiveSheet();
                            workbook.activateSheetAsync(dash)
                                .then(function (dashboard) {
                                    //this is the secret sauce that stores all of the sheet names on the dashboard in an array named sheetNames
                                    var worksheets = dashboard.getWorksheets();
                                    //here is the aforementioned array
                                    var sheetNames = [];
                                    //here we are looping through all the sheets on the dash, & pushing the sheet name to the sheetNames array
                                    for (var i = 0, len = worksheets.length; i < len; i++) {

                                        var sheet = worksheets[i];
                                        sheetNames.push(sheet.getName());
                                    }

                                    //here is where we are creating our dropdown menu... kind of like a Tableau parameter
                                    //we will inject this value into the getVizData() function a little bit later
                                    var sel = document.getElementById('SheetList');
                                    var fragment = document.createDocumentFragment();
                                    sheetNames.forEach(function (sheetName, index) {

                                        var opt = document.createElement('option');
                                        opt.innerHTML = sheetName;
                                        opt.value = sheetName;
                                        fragment.appendChild(opt);
                                    });

                                    sel.appendChild(fragment);

                                });
                        }
                    };
                this.viz = new tableau.Viz(vizDiv, url, options);
            },

            //if you've made it to this point, know that the magic came from here: https://www.interworks.com/blog/rrouse/2016/06/07/pull-viz-data-new-javascript-api-features-tableau-10
            getVizData1() {
                this.options = {

                    maxRows: 0, // Max rows to return. Use 0 to return all rows
                    ignoreAliases: false,
                    ignoreSelection: true,
                    includeAllColumns: false
                };

                let sheet = this.viz.getWorkbook().getActiveSheet();

                //if active tab is a worksheet, get data from that sheet
                if (sheet.getSheetType() === 'worksheet') {
                    sheet.getUnderlyingDataAsync(options).then(function (t) {
                        buildMenu(t);
                    });

                    //if active sheet is a dashboard get data from a specified sheet
                } else {
                    let worksheetArray = this.viz.getWorkbook().getActiveSheet().getWorksheets();
                    for (var i = 0; i < worksheetArray.length; i++) {
                        let worksheet = worksheetArray[i];
                        let sheetName = worksheet.getName();

                        //get user's selection from dropdown of sheets
                        var selectedVal = document.getElementById("SheetList").value;

                        //get the data from the selected sheet
                        if (sheetName === selectedVal) {
                            worksheetArray[i].getSummaryDataAsync(options).then(function (t) {
                                buildMenu(t);
                            });
                        }
                    }
                }
            },

            //restructure the data and build something with it
            buildMenu(table) {

                //the data returned from the tableau API
                var columns = table.getColumns();
                var data = table.getData();

                //convert to field:values convention
                function reduceToObjects(cols, data) {
                    var fieldNameMap = $.map(cols, function (col) {
                        return col.$impl.$fieldName;
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

                //take the niceData and send it to a csv named TableauDataExport
                alasql("SELECT * INTO CSV('TableauDataExport.csv',{headers:true}) FROM ?", [niceData]);
            }

        },
        mounted: function () {
            this.initViz1();
        }
    }
</script>

<style scoped>

</style>
