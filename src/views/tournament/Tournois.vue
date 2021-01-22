<template>
    <div>
        <h2>Tournois</h2>
        <!-- <v-data-table :headers="headers" :items="tournois" :items-per-page="10" class="elevation-1">
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
                                            <v-text-field v-model="currItem.name" label="Nom"></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="12">
                                            <v-text-field v-model="currItem.date_tournament" label="Date"></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="12">
                                            <v-text-field v-model="currItem.season" label="Saison"></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="12">
                                            <v-text-field v-model="currItem.place" label="Lieu"></v-text-field>
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
        <confirm-dialog title="Supprimer un tournoi" :content="confirmDialog.content" :confirm-dialog="confirmDialog.display" @confirm="confirmDelete" @close="closeConfirmDialog"/> -->
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import dateFilter from '@/filters/DateFilters';

    export default {
        data() {
            return {
                currItem: {
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
            next(vm => vm.$store.dispatch('tournois/fetch'));
        },
        computed: {
            ...mapGetters('tournois', {
                tournois: 'getTournois'
            }),
        },
        methods: {
            deleteItem(item) {
                this.currItem = Object.assign({}, item);
                this.confirmDialog.content = `Voulez-vous supprimer le tournoi "${item.name}" ?`;
                this.confirmDialog.display = true;
            },
            confirmDelete() {
                this.$store.dispatch('tournois/deleteTournoi', this.currItem);
                this.closeConfirmDialog();
            },
            save() {
                if (this.editedIndex > -1) {
                    this.$store.dispatch('tournois/updateTournoi', this.currItem);
                } else {
                    this.$store.dispatch('tournois/addTournoi', this.currItem);
                }
                this.close();
            },
            start(tournoi) {
                console.log('start : ' + tournoi);
            }
        },
        filters: {
            toDateString(date) {
                return dateFilter.formatDate(date);
            }
        },
    };
</script>

<style scoped>
</style>
