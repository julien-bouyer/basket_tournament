<template>
    <v-data-table :headers="headers" :items="equipes" :items-per-page="10" class="elevation-1">
        <template v-slot:item.action="{item}">
            <v-icon @click="edit(item)">edit</v-icon>
            <v-icon @click="deleteEquipe(item)">delete</v-icon>
        </template>
    </v-data-table>
</template>

<script>
    import { mapGetters } from "vuex";

    export default {
        data() {
            return {
                headers: [
                    { text: 'Nom', value: 'name' },
                    { text: 'Commune', value: 'city' },
                    { text: 'Type', value: 'sex' },
                    { text: 'Département', value: 'county' },
                    { text: 'Actions', value: 'action', sortable: false },
                ]
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
            edit(equipe) {
                console.log('edit : ' + equipe);
            },
            deleteEquipe(equipe) {
                console.log('delete : ' + equipe);
            },
        }
    };
</script>

<style scoped>
</style>
