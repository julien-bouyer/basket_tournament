<template>
    <v-navigation-drawer v-model="drawer" app clipped>
        <v-list nav>
            <v-list-item-group mandatory color="primary">
                <v-list-item :to="{name : 'home'}">
                    <v-list-item-icon>
                        <v-icon>mdi-home</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>Home</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item :to="{name : 'tournois'}">
                    <v-list-item-action>
                        <v-icon>mdi-basketball</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Tournois</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item :to="{name : 'equipes'}">
                    <v-list-item-action>
                        <v-icon>mdi-shield-account</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Equipes</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    export default {
        data() {
            return {
                drawer: true
            }
        }
    }
</script>

<style scoped>

</style>
