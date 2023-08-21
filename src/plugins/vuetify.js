/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import 'animate.css'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// Components
import { VDataTableServer } from 'vuetify/labs/VDataTable'

import { zhHant } from 'vuetify/locale'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
// import required modules
import { Parallax, Pagination, Navigation, FreeMode, Scrollbar } from 'swiper/modules'
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
// import 'animate.min.css';
// import 'animate.compat.css';
export default createVuetify({
  components: {
    VDataTableServer,
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      modules: [Scrollbar, Parallax, Pagination, Navigation, FreeMode],
    };
  },
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#1867C0',
          secondary: '#5CBBF6'
        }
      }
    }
  },
  locale: {
    locale: 'zhHant',
    messages: { zhHant }
  }
})
