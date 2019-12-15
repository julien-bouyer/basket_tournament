<template>
    <div>
    {{equipe}}
    </div>
</template>
<script>
    import equipeService from '../../services/EquipesService';
    // import Form from "../../components/Form.vue";

    export default {
        name: "edit",
        data() {
            return {
                equipe: {}
            };
        },
        components: {
        },
        beforeRouteEnter(route, redirect, next) {
            equipeService
                .fetchOne(route.params.id)
                .then(equipe =>
                    next(vm => {
                        vm.equipe = equipe;
                    })
                )
                .catch(console.error);
        },
        methods: {
            updateEquipe: function (p) {
                equipeService.update(p).then(() => {
                    this.goBack();
                });
            },
            goBack: function () {
                this.$router.go('equipes');
            }
        }
    };
</script>
<style scoped></style>