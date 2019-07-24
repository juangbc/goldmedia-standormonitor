<template>
    <div>
    <el-row>
        <el-card class="bottom-card">
            <el-col :sm="24" :xs="24" :md="24" :lg="24">
                <div id="kontakt" class="subtitle">Kontaktieren Sie uns! </div>
            </el-col>
            <el-col :sm="24" :xs="24" :md="24" :lg="24">
                <div class="landing-page-textbox">
                    Ihre Ansprechpartner sind <a href="mailto:mathias.birkel@goldmedia.de">Mathias Birkel</a> und
                    <a href="mailto:klaus.goldhammer@goldmedia.de">Prof. Dr. Klaus Goldhammer</a>
                    oder telefonisch: 030-2462660. Gern präsentieren wir Ihnen die Vorteile und Möglichkeiten des Standortmonitors.
                </div>
            </el-col>
        </el-card>
    </el-row>
    </div>
</template>

<script>
    export default {
        name: "kontakt"
    }
</script>

<style scoped>
    .subtitle {
        margin-bottom: 5px;
        font-weight: 400;
        font-family: Segoe UI, Frutiger, Frutiger Linotype, Dejavu Sans, Helvetica Neue, Arial, sans-serif !important;
        color: #455a64;
        font-size: 2em;
        padding-top: 0.6em;
        padding-left: 1em;
    }

    .landing-page-textbox {
        padding-top: 1em;
        padding-bottom: 2em;
        padding-left: 2em;
    }

</style>