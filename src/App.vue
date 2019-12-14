<template>
    <v-app>
        <nav-menu/>
        <toolbar title="Tournoi de basket"/>
        <v-content fluid fill-height>
            <v-container fluid fill-height>
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
    };
</script>

<style scoped>
</style>