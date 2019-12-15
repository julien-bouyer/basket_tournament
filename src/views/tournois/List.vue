<template>
    <v-data-table :headers="headers" :items="tournois" :items-per-page="10" class="elevation-1">
        <template v-slot:item.date_tournament="{item}">
            {{item.date_tournament | toDateString}}
        </template>
        <template v-slot:item.action="{item}">
            <v-btn :to="{ name: 'editTournois', params: { id: item.id }}" text>
                <v-icon>edit</v-icon>
            </v-btn>
            <v-btn @click="start(item)" text>
                <v-icon>mdi-play</v-icon>
            </v-btn>
            <v-btn @click="deleteTournoi(item)" text>
                <v-icon>delete</v-icon>
            </v-btn>
        </template>
    </v-data-table>
</template>

<script>
    import { mapGetters } from "vuex";
    import dateFilter from '../../filters/DateFilters';

    export default {
        data() {
            return {
                headers: [
                    { text: 'Nom', value: 'name' },
                    { text: 'Date', value: 'date_tournament' },
                    { text: 'Saison', value: 'season' },
                    { text: 'Lieu', value: 'place' },
                    { text: 'Actions', value: 'action', sortable: false },
                ]
            }
        },
        beforeRouteEnter(route, redirect, next) {
            next(vm => vm.$store.dispatch("tournois/fetch"));
        },
        computed: {
            ...mapGetters('tournois', {
                tournois: 'getTournois'
            })
        },
        methods: {
            edit(tournoi) {
                console.log('edit : ' + tournoi);
            },
            start(tournoi) {
                console.log('start : ' + tournoi);
            },
            deleteTournoi(tournoi) {
                console.log('delete : ' + tournoi);
            },
        },
        filters: {
            toDateString(date) {
                return dateFilter.formatDate(date);
            }
        }
    };
</script>

<style scoped>
</style>
