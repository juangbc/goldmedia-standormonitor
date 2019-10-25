<template>
    <div class="imprint-frame">
        <imprint-comp></imprint-comp>
    </div>
</template>

<script>

    import imprintComponent from './imprint-component'

    export default {
        components: {
            "imprint-comp": imprintComponent,
        },
    }
</script>

<style scoped>
    .imprint-frame{
        margin: 100px;
    }
</style>
