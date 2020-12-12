import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);
export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: colors.orange.lighten1,
                secondary: colors.orange.darken2,
                accent: '#82b1ff',
                error: '#ff5252',
                info: '#2196f3',
                success: '#4caf50',
                warning: '#ffc107',
            },
        },
    },
});
