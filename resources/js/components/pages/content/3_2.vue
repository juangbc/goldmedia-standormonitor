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
    </div>
</template>

<script>
    export default {
        data() {
            return {
                loading: true,
                url: "https://eu-west-1a.online.tableau.com/t/goldmedia/views/" +
                    "Standortmonitor/3_2Unternehmen?iframeSizedToWindow=true&:embed=y&:showAppBanner=false&:display_count=no&:showVizHome=no&:origin=viz_share_link",
                options: {
                    hideTabs: true,
                    width: "100%",
                    height: "100%",
                    'Bundesland': "",
                    'Teilmärkte' : "",
                }
            }
        },
        methods: {
            initViz() {

                if (this.$store.getters.bundesland.length > 0) {
                    this.options['Bundesland'] = this.$store.getters.bundesland;
                }

                if (this.$store.getters.markt.length > 0) {
                    this.options['Teilmärkte'] = this.$store.getters.markt;
                }

                this.viz = new tableau.Viz(this.$refs.tableau, this.url, this.options)
                this.loading = false;
            },
        },
        mounted: function () {
            this.initViz();
        }
    }
</script>

<style scoped>

</style>
