<template>
    <div>
        <div class="top20">
            <el-button @click="taveChanges" type="primary"><i class="fa fa-save"></i> Apply personal filters</el-button>
        </div>
        <el-table
                v-show="loading"
                v-loading="loading"
                style="width: 100%">
        </el-table>
        <div id="app">
            <div id="tableau" ref="tableau"></div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                viz : {},
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
            initViz() {
                //this.$store.getters.bundesland
                //return Promise.resolve(this.viz = new tableau.Viz(this.$refs.tableau, this.url, this.options));
                this.viz = new tableau.Viz(this.$refs.tableau, this.url, this.options)
                this.loading = false;
                setTimeout(this.taveChanges, 5000);
            },
            taveChanges: function () {
                var sheet = this.viz.getWorkbook().getActiveSheet();
                //console.log(sheet.getWorksheets().get("Blatt 4.1"));
                if (this.bundesland.length > 0) {
                    sheet.getWorksheets().get("Blatt 4.1").applyFilterAsync('Bundesland', this.bundesland, tableau.FilterUpdateType.REPLACE);
                }

                /*this.initViz().then(function () {
                    var sheet = this.viz.getWorkbook().getActiveSheet();
                    if (this.bundesland.length > 0) {
                        sheet.getWorksheets().get("Beschäftigte Bundesland").applyFilterAsync('Bundesland', this.bundesland, tableau.FilterUpdateType.REPLACE);
                    }
                });*/
            }
        },
        mounted: function () {
            this.initViz();
        }
    }
</script>

<style scoped>

</style>
