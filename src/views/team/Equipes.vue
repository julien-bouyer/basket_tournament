<template>
    <div>
        <h2>Equipes</h2>
        <!-- <v-data-table :headers="headers" :items="equipes" :items-per-page="10" class="elevation-1">
            <template v-slot:top>
                <v-toolbar flat color="white">
                    <v-toolbar-title>Liste des équipes</v-toolbar-title>
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
                                            <v-text-field v-model="currItem.city" label="Commune"></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="12">
                                            <v-text-field v-model="currItem.sex" label="Type"></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="12">
                                            <v-text-field v-model="currItem.county" label="Département"></v-text-field>
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
            <template v-slot:item.action="{item}">
                <v-btn @click="editItem(item)" text>
                    <v-icon>edit</v-icon>
                </v-btn>
                <v-btn @click="deleteItem(item)" text>
                    <v-icon>delete</v-icon>
                </v-btn>
            </template>
        </v-data-table>
        <confirm-dialog title="Supprimer une équipe" :content="confirmDialog.content" :confirm-dialog="confirmDialog.display" @confirm="confirmDelete" @close="closeConfirmDialog"/> -->
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        data() {
            return {
                confirmDialog: {
                    content: '',
                    display: false
                },
                currItem: {
                    name: '',
                    city: '',
                    sex: '',
                    county: ''
                },
                defaultItem: {
                    name: '',
                    city: '',
                    sex: '',
                    county: ''
                }
            }
        },
        beforeRouteEnter(route, redirect, next) {
            next(vm => vm.$store.dispatch('equipes/fetch'));
        },
        computed: {
            ...mapGetters('equipes', {
                equipes: 'getEquipes'
            }),
        },
        methods: {
            deleteItem(item) {
                this.currItem = Object.assign({}, item);
                this.confirmDialog.content = `Voulez-vous supprimer l'équipe "${item.name}" ?`;
                this.confirmDialog.display = true;
            },
            confirmDelete() {
                this.$store.dispatch('equipes/deleteEquipe', this.currItem);
                this.closeConfirmDialog();
            },
            save() {
                if (this.editedIndex > -1) {
                    this.$store.dispatch('equipes/updateEquipe', this.currItem);
                } else {
                    this.$store.dispatch('equipes/addEquipe', this.currItem);
                }
                this.close();
            }
        },
    };
</script>

<style scoped>
</style>
