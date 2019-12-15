<template>
    <div>
    {{tournoi}}
    </div>
</template>
<script>
    import tournoiService from '../../services/TournoisService';
    // import Form from "../../components/Form.vue";

    export default {
        name: "edit",
        data() {
            return {
                tournoi: {}
            };
        },
        components: {
        },
        beforeRouteEnter(route, redirect, next) {
            tournoiService
                .fetchOne(route.params.id)
                .then(tournoi =>
                    next(vm => {
                        vm.tournoi = tournoi;
                    })
                )
                .catch(console.error);
        },
        methods: {
            updateTournoi: function (p) {
                tournoiService.update(p).then(() => {
                    this.goBack();
                });
            },
            goBack: function () {
                this.$router.go('tournois');
            }
        }
    };
</script>
<style scoped></style>