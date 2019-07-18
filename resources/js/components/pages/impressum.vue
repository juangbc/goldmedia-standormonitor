<template>
    <div>
        <el-row class="margin-bottom">
            <el-card>
                <el-col :sm="24" :xs="24" :md="24" :lg="24">
                    <div class="subtitle">Impressum</div>
                </el-col>
                <el-col :sm="24" :xs="24" :md="24" :lg="24">
                    <div class="landing-page-textbox content-text">
                        Verantwortlich für den Seiteninhalt: Prof. Dr. Klaus Goldhammer, Dr. André Wiegand<br>
                        Goldmedia GmbH Strategy Consulting<br>
                        UmSt.-ID: DE 813765996<br>
                        HRB: 88984 AG Berlin-Charlottenburg<br>
                        Goldmedia-Gruppe<br>
                    </div>
                </el-col>
            </el-card>
        </el-row>


        <el-row>
            <el-card>
                <el-col :sm="24" :xs="24" :md="24" :lg="24">
                    <div class="subtitle">Goldmedia GmbH Strategy Consulting</div>
                </el-col>
                <el-col :sm="24" :xs="24" :md="24" :lg="24">
                    <div class="landing-page-textbox content-text">
                        Oranienburger Str. 27, 10117 Berlin, Tel.: +49-30-246 266-0, Fax: +49-30-246 266-66,
                        <a href="mailto:Info@Goldmedia.de"> Info@Goldmedia.de,</a>
                        <a href="https://www.Goldmedia.com"> www.Goldmedia.com,</a>
                        Geschäftsführung: Prof. Dr. Klaus Goldhammer, Dr. André Wiegand
                    </div>
                </el-col>
            </el-card>
        </el-row>
    </div>

</template>

<script>
    export default {
        name: "impressum"
    }
</script>

<style scoped>

    .margin-bottom {
        margin-bottom: 1em;
    }

    .subtitle {
        margin-top: 10px;
        font-size: 30px;
        text-align: left;
        margin-left: 5px;
    }


    .landing-page-textbox {
        font-size: 1.2em;;
        line-height: 2.6;
        font-family: Segoe UI, Frutiger, Frutiger Linotype, Dejavu Sans, Helvetica Neue, Arial, sans-serif !important;
        color: #4c4c4c;
        margin-left: 5%;
        padding-right: 2em;
        padding-top: 2em;
        padding-bottom: 2em;
    }

</style>