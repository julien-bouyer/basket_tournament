<template>
    <v-data-table :headers="headers" :items="tournois" :items-per-page="10" class="elevation-1">
        <template v-slot:top>
            <v-toolbar flat color="white">
                <v-toolbar-title>Liste des tournois</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-dialog v-model="dialog" persistent max-width="40em">
                    <template v-slot:activator="{on}">
                        <v-btn color="primary" dark class="mb-2" v-on="on">Ajouter</v-btn>
                    </template>
                    <v-card>
                        <v-card-title>
                            <span class="headline">{{formTitle}}</span>
                        </v-card-title>
                        <v-card-text>
                            <v-container>
                                <v-row>
                                    <v-col cols="12">
                                        <v-text-field v-model="editedItem.name" label="Nom"></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="12">
                                        <v-text-field v-model="editedItem.date_tournament" label="Date"></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="12">
                                        <v-text-field v-model="editedItem.season" label="Saison"></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="12">
                                        <v-text-field v-model="editedItem.place" label="Lieu"></v-text-field>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                            <v-btn color="blue darken-1" text @click="save">Save</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-toolbar>
        </template>
        <template v-slot:item.date_tournament="{item}">
            {{item.date_tournament | toDateString}}
        </template>
        <template v-slot:item.action="{item}">
            <v-btn @click="editItem(item)" text>
                <v-icon>edit</v-icon>
            </v-btn>
            <v-btn @click="start(item)" text>
                <v-icon>mdi-play</v-icon>
            </v-btn>
            <v-btn @click="deleteItem(item)" text>
                <v-icon>delete</v-icon>
            </v-btn>
        </template>
    </v-data-table>
</template>

<script>
    import {mapGetters} from "vuex";
    import dateFilter from '../filters/DateFilters';
    import tournoiService from '../services/TournoisService';

    export default {
        data() {
            return {
                dialog: false,
                headers: [{
                    text: 'Nom',
                    value: 'name'
                }, {
                    text: 'Date',
                    value: 'date_tournament'
                }, {
                    text: 'Saison',
                    value: 'season'
                }, {
                    text: 'Lieu',
                    value: 'place'
                }, {
                    text: 'Actions',
                    value: 'action',
                    sortable: false
                }],
                editedIndex: -1,
                editedItem: {
                    name: '',
                    date_tournament: '',
                    season: '',
                    place: ''
                },
                defaultItem: {
                    name: '',
                    date_tournament: '',
                    season: '',
                    place: ''
                }
            }
        },
        beforeRouteEnter(route, redirect, next) {
            next(vm => vm.$store.dispatch("tournois/fetch"));
        },
        computed: {
            ...mapGetters('tournois', {
                tournois: 'getTournois'
            }),
            formTitle() {
                return this.editedIndex === -1 ? 'Ajout d\'un tournoi' : 'Edition d\'un tournoi'
            }
        },
        methods: {
            editItem(item) {
                this.editedIndex = this.tournois.indexOf(item);
                this.editedItem = Object.assign({}, item);
                this.dialog = true;
            },
            deleteItem(item) {
                const index = this.tournois.indexOf(item);
                let yes = confirm('Are you sure you want to delete this item?');
                if (yes) {
                    tournoiService.delete(item.id).then(() => {
                        this.tournois.splice(index, 1);
                    });
                }
            },
            close() {
                this.dialog = false;
                setTimeout(() => {
                    this.editedItem = Object.assign({}, this.defaultItem);
                    this.editedIndex = -1;
                }, 300);
            },
            save() {
                if (this.editedIndex > -1) {
                    tournoiService.update(this.editedItem).then(() => {
                        Object.assign(this.tournois[this.editedIndex], this.editedItem);
                    });
                } else {
                    tournoiService.create(this.editedItem).then((tournoi) => {
                        this.tournois.push(tournoi);
                    });
                }
                this.close();
            },
            start(tournoi) {
                console.log('start : ' + tournoi);
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
