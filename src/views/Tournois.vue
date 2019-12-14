<template>
    <v-data-table :headers="headers" :items="tournois" :items-per-page="10" class="elevation-1">
        <template v-slot:item.date_tournament="{item}">
            {{item.date_tournament | toDateString}}
        </template>
        <template v-slot:item.action="{item}">
            <v-icon @click="edit(item)">edit</v-icon>
            <v-icon @click="start(item)">mdi-play</v-icon>
            <v-icon @click="deleteTournoi(item)">delete</v-icon>
        </template>
    </v-data-table>
</template>

<script>
    import { mapGetters } from "vuex";
    import dateFilter from '../filters/DateFilters';

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
