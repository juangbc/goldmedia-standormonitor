<template>
    <div>
    <el-row>
        <el-card class="bottom-card">
            <el-col :sm="24" :xs="24" :md="12" :lg="12">
                <div id="kontakt" class="subtitle">Kontaktieren <br>Sie uns! </div>
            </el-col>
            <el-col :sm="24" :xs="24" :md="12" :lg="12">
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
        font-size: 2.5em;
        padding-top: 0.6em;
        padding-left: 1em;
    }

    @media (max-width: 1300px) {

        .subtitle {
            margin-bottom: unset;
            color: #455a64;
            font-size: 2em;
            padding-left: 0em !important;
            padding-top: 0em !important;
        }


        .landing-page-textbox {
            margin-left: unset !important;
            font-size: 1em;
        }
    }


    @media (max-width: 1700px) {
        .subtitle {
            margin-bottom: unset;
            color: #455a64;
            font-size: 2em;
            padding-left: 0em !important;
            padding-top: 1em !important;
        }
    }
</style>