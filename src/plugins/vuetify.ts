import { createVuetify } from 'vuetify';
import '@mdi/font/css/materialdesignicons.css';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { PurpleTheme } from '@/theme/LightTheme';


export default createVuetify({
    components,
    directives,

    theme: {
        defaultTheme: 'PurpleTheme',
        themes: {
            PurpleTheme,
        }
    },
    defaults: {
        VBtn: {
            // variant: "tonal",
            density: "comfortable",
            size: 'default',
            height: '30px',
            rounded: 'md'
        },
        VCard: {
            rounded: 'sm'
        },
        VTextField: {
            variant:"outlined",
            density: "compact",
            rounded: 'sm',
            clearable: true,
        },
        VSelect: {
            variant: "outlined",
            density: "compact",
            clearable: true,
            transition: "slide-y-transition",
        },
        VTooltip: {
            // set v-tooltip default location to top
            location: 'top',
            transition: "slide-y-transition"
        },
        VRadio: {
            density: 'comfortable',
            ripple: false
        },
        VIcon: {
            size: 18
        },
        VInput: {
            density: 'comfortable',
        },
    }
});
