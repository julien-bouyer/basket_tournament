<template>
    <v-app>
        <nav-menu v-bind:drawer="drawer"/>
        <toolbar title="Tournoi de basket" v-on:toggleDrawer="toggle"/>
        <v-content>
            <v-container fluid>
                <router-view/>
            </v-container>
        </v-content>
        <v-footer color="primary" dark app>
            <span>&copy; 2019</span>
        </v-footer>
    </v-app>
</template>

<script>
    import Toolbar from './components/Toolbar';
    import NavMenu from './components/NavMenu';

    export default {
        name: 'App',
        components: {
            Toolbar,
            'nav-menu': NavMenu
        },
        data: () => ({
            drawer: null
        }),
        methods: {
            toggle() {
                this.drawer = !this.drawer;
            }
        }

    };
</script>

<style scoped>
</style>