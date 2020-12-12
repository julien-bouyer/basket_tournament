<template>
    <v-app-bar app color="primary" light clipped-left>
        <v-app-bar-nav-icon @click.stop="toggleDrawer"></v-app-bar-nav-icon>
        <v-toolbar-title>
            <span>{{title}}</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <!--<v-btn @click="$router.go(-1)" text>-->
            <!--<v-icon>arrow_back</v-icon>-->
        <!--</v-btn>-->
    </v-app-bar>
</template>

<script>
    export default {
        props: ['title'],
        methods: {
            toggleDrawer() {
                this.$emit('toggleDrawer');
            }
        }
    };
</script>

<style scoped>
</style>
