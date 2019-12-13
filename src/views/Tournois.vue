<template>
    <section class="container">
        <md-table v-once>
            <md-table-header>
                <md-table-row>
                    <md-table-head>Nom</md-table-head>
                    <md-table-head>Date</md-table-head>
                    <md-table-head>Saison</md-table-head>
                    <md-table-head>Lieu</md-table-head>
                    <md-table-head>Actions</md-table-head>
                </md-table-row>
            </md-table-header>
            <md-table-body>
                <md-table-row v-for="(tournoi, index) in tournois" :key="index">
                    <md-table-cell>{{tournoi.name}}</md-table-cell>
                    <md-table-cell>{{tournoi.date_tournament}}</md-table-cell>
                    <md-table-cell>{{tournoi.season}}</md-table-cell>
                    <md-table-cell>{{tournoi.place}}</md-table-cell>
                    <md-table-cell>
                        <md-button @click="edit(tournoi.id)">
                            <md-icon class="md-size-2x">edit</md-icon>
                        </md-button>
                        <md-button @click="start(tournoi.id)">
                            <md-icon class="md-size-2x">play_arrow</md-icon>
                        </md-button>
                        <md-button @click="stop(tournoi.id)">
                            <md-icon class="md-size-2x">stop</md-icon>
                        </md-button>
                        <md-button @click="remove(tournoi.id)">
                            <md-icon class="md-size-2x">delete</md-icon>
                        </md-button>
                    </md-table-cell>
                </md-table-row>
            </md-table-body>
        </md-table>
    </section>
</template>

<script>
    export default {
        beforeRouteEnter(route, redirect, next) {
            next(vm => vm.$store.dispatch("tournois/fetch"));
        },
        computed: {
            tournois() {
                return this.$store.state.tournois.tournois;
            }
        }
    };
</script>

<style scoped>
</style>
