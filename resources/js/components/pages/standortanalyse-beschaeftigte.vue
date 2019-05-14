<template>

    <div>
        <Tableau
                :url="url"
                height="1200px"
                width="-webkit-fill-available"

                ref="tableau">
        </Tableau>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                url: "https://eu-west-1a.online.tableau.com/t/goldmedia/views/Standortmonitor1/DBLandkreis?iframeSizedToWindow=true&:retry=yes&:embed=y&:showAppBanner=false&:display_count=no&:showVizHome=no&:origin=viz_share_link",
            }
        },
    }
</script>

<style scoped>

</style>