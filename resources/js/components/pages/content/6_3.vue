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
                url: "https://eu-west-1a.online.tableau.com/t/goldmedia/views/Standortmonitor_15826424386730/6_3_1BpU?:embed=yes&:toolbar=no",
                options: {
                    hideTabs: true,
                    width: "100%",
                    height: "100%",
                }
            }
        },
        methods: {
            initViz() {

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
