<template>
    <md-toolbar class="md-large md-primary">
        <div class="md-toolbar-row">
            <div class="md-toolbar-section-start">
                <span class="md-title">{{title}}</span>
            </div>
            <div class="md-toolbar-section-end">
                <!--<a class="nav-link active" href="#" @click="back">Retour</a>-->
                <!--<md-button class="md-icon-button">-->
                    <!--<md-icon>more_vert</md-icon>-->
                <!--</md-button>-->
            </div>
        </div>
        <div class="md-toolbar-row">
            <md-tabs class="md-primary">
                <md-tab md-label="Home"></md-tab>
                <md-tab md-label="Tournois"></md-tab>
                <md-tab md-label="Equipes"></md-tab>
                <md-tab md-label="Joueurs" md-disabled="true"></md-tab>
                <md-tab md-label="Matchs" md-disabled="true"></md-tab>
            </md-tabs>
        </div>
    </md-toolbar>
</template>

<script>
    export default {
        methods: {
            back: function () {
                window.history.back();
            }
        },
        props: ['title']
    };
</script>

<style scoped>

</style>
