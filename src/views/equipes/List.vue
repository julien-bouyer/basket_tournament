<template>
    <v-data-table :headers="headers" :items="equipes" :items-per-page="10" class="elevation-1">
        <template v-slot:item.action="{item}">
            <v-btn :to="{ name: 'editEquipes', params: { id: item.id }}" text>
                <v-icon>edit</v-icon>
            </v-btn>
            <v-btn @click="deleteEquipe(item)" text>
                <v-icon>delete</v-icon>
            </v-btn>
        </template>
    </v-data-table>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        data() {
            return {
                headers: [{
                    text: 'Nom',
                    value: 'name'
                }, {
                    text: 'Commune',
                    value: 'city'
                }, {
                    text: 'Type',
                    value: 'sex'
                }, {
                    text: 'Département',
                    value: 'county'
                }, {
                    text: 'Actions',
                    value: 'action',
                    sortable: false
                }]
            }
        },
        beforeRouteEnter(route, redirect, next) {
            next(vm => vm.$store.dispatch("equipes/fetch"));
        },
        computed: {
            ...mapGetters('equipes', {
                equipes: 'getEquipes'
            })
        },
        methods: {
            deleteEquipe(equipe) {
                console.log('delete : ' + equipe);
            },
        }
    };
</script>

<style scoped>
</style>
