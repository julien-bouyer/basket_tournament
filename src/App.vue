<template>
    <section>
        <toolbar title="Tournoi de basket"/>
        <router-view></router-view>
    </section>
</template>

<script>
    import Toolbar from './components/Toolbar';

    export default {
        components: {
            Toolbar
        }
    };
</script>

<style scoped>
</style>