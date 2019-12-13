<template>
    <md-toolbar class="md-large" md-theme="orange">
        <div class="md-toolbar-container">
            <h1 class="md-title">{{title}}</h1>
        </div>
        <div class="md-toolbar-container">
            <div class="router-links">
                <router-link tag="md-button" to="home" class="md-raised">Home</router-link>
                <router-link tag="md-button" to="tournois" class="md-raised">Tournois</router-link>
                <router-link tag="md-button" to="equipes" class="md-raised">Equipes</router-link>
            </div>
            <md-button @click="$router.go(-1)">
                <md-icon>arrow_back</md-icon>
            </md-button>
        </div>
    </md-toolbar>
</template>

<script>
    export default {
        props: ['title']
    };
</script>

<style scoped>
    .router-links {
        flex: 1;
    }
</style>
