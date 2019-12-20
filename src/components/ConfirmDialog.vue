<template>
    <v-dialog v-model="display" max-width="290">
        <v-card>
            <v-card-title class="headline">{{title}}</v-card-title>
            <v-card-text>{{content}}</v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green darken-1" text @click="$emit('close')">Non</v-btn>
                <v-btn color="green darken-1" text @click="$emit('confirm')">Oui</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        data() {
            return {
                display: false,
            }
        },
        props: [
            'confirmDialog',
            'title',
            'content'
        ],
        watch: {
            confirmDialog: function (newVal) {
                this.display = newVal;
            }
        }
    }
</script>

<style scoped>

</style>