<template>
    <div>
        <el-table
                v-show="loading"
                v-loading="loading"
                style="width: 100%">
        </el-table>
        <div id="app">
            <div id="tableau" ref="tableau" style="height: 1050px"></div>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                loading: true,
                url: "https://eu-west-1a.online.tableau.com/t/goldmedia/views/" +
                    "StandortmonitorV_1_2/Dashboard2?iframeSizedToWindow=true&:embed=y&:showAppBanner=false&:display_count=no&:showVizHome=no&:origin=viz_share_link",
                options: {
                    hideTabs: true,
                    width: "100%",
                    height: "100%"
                }
            }
        },
        methods: {
            initViz: function () {
                let viz = new tableau.Viz(this.$refs.tableau, this.url, this.options);

                this.loading = false;
            }
        },
        mounted: function () {
            this.initViz()
        }
    }

</script>

<style scoped>



</style>
