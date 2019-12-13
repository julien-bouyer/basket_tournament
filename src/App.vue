<template>
    <section>
        <toolbar title="Tournoi de basket"/>
        <div class="main-content">
            <router-view/>
        </div>
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
    .main-content {
        background-color: #fff;
        -ms-flex: 1;
        flex: 1;
        overflow: auto;
        padding: 16px;
        transition: all .4s cubic-bezier(.25,.8,.25,1);
        transition-delay: .2s;
    }
</style>