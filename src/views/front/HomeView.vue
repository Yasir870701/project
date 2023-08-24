<template>
  <VRow>
    <VCol cols="12" class="pa-16 ma-2" style="height: 100;background-color: #fff; z-index: 999;">
      <div style=" display: flex; align-items: center;">
        <div style="width: 42%;">
        <VImg class="animate__animated animate__bounceInLeft animate__slower" src="../../assets/transform.gif"></VImg>
        <h1 class="text-center animate__animated animate__fadeInLeft animate__delay-1s ">磨練超越極限，點燃您的身體，<br>
          展開訓練之路，成就自身傳奇！</h1>
        </div>
        <swiper
          style="width: 58%;"
          :scrollbar="{
            hide: true,
          }"
          :modules="modules"
          class="mySwiper"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: false
          }"
          :spaceBetween="30"
          :effect="'fade'"
        >
          <swiper-slide class="right">
            <div>
          <img src="../../assets/重訓.jpg">
          <div class="pa-0" 
          style="position: absolute;
            width: 15%;
            height: 1.5%;
            bottom: 41.5%;
            left: 0;
            background-color: #d32f2f;
            ">
            </div>
          <div class="pa-0"
          style="position: absolute;
            width: 15%;
            height: 1.5%;
            bottom: 41.5%;
            right: 0;
            background-color: #d32f2f;
            ">
            </div>
            <div class="image-overlay">
            <p class="overlay-text text-lg-h1 font-weight-regular">Fitness</p>
            <p class="overlay-text text-lg-h5 font-weight-bold">鍛煉的藝術</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="right">
          <div>
          <img src="../../assets/重訓4.jpg">
          <div class="pa-0" 
          style="position: absolute;
            width: 15%;
            height: 1.5%;
            bottom: 41.5%;
            left: 0;
            background-color: #d32f2f;
            ">
            </div>
          <div class="pa-0"
          style="position: absolute;
            width: 15%;
            height: 1.5%;
            bottom: 41.5%;
            right: 0;
            background-color: #d32f2f;
            ">
            </div>
          <div class="image-overlay">
            <p class="overlay-text text-lg-h1 font-weight-regular">Protein</p>
            <p class="overlay-text text-lg-h5 font-weight-bold">營養力量源</p>
          </div>
        </div>
        </swiper-slide>
          <swiper-slide class="right"><img src="../../assets/重訓5.jpg">
            <div>
              <div class="pa-0" 
          style="position: absolute;
            width: 15%;
            height: 1.5%;
            bottom: 41.5%;
            left: 0;
            background-color: #d32f2f;
            ">
            </div>
          <div class="pa-0"
          style="position: absolute;
            width: 15%;
            height: 1.5%;
            bottom: 41.5%;
            right: 0;
            background-color: #d32f2f;
            ">
            </div>
            <div class="image-overlay">
              <p class="overlay-text text-lg-h1 font-weight-regular">Progress</p>
              <p class="overlay-text text-lg-h5 font-weight-bold">漸進的成就</p>
          </div>
        </div>
        </swiper-slide>
        </swiper>
      </div>
    </VCol>
  </VRow>
    <VCol cols="12" class="pa-0" style="background-color: #d32f2f; height: 891px; display: flex; align-items: center;;">
  <v-card variant="" style="width:50%;height: 100%;">
    <v-card-item>
      <div class="pl-16 ml-7">
        <div  class="pl-8 text-xl-h4 font-weight-bold" style="color: #fff; margin-top: 4%;">
          Look This Way
        </div>
        <div class="pa-7 text-xl-h3 font-weight-black" style="color: #fff; margin-top: 2%;">
        找尋適合您的健身規劃
      </div>
      <pre class="ml-5 text-lg-h5" style="position: relative; margin-top: 2%; right: 5%; color: #fff;">
        開始您的健身旅程，
        找出最適合您的健身計劃！
        無論是獨特的重量訓練、
        充滿活力的有氧運動，
        或是平衡的飲食，
        還有其他多種內容，
        這裡都能幫助您打造專屬自己的訓練方式！
      </pre>
        </div>
    </v-card-item>
  </v-card>
  <VCol class="" cols="6" >
    <div class="ml-3" style="display: flex; width: 100%; height: 100%; background-color:white;">
      <router-link to="/orders">
          <VImg class="image" src="../../assets/b2.gif"></VImg>
      </router-link>
      <router-link to="/orders">
        <VImg class="image" src="../../assets/b3.gif"></VImg>
      </router-link>
      <router-link to="/orders">
        <VImg class="image" src="../../assets/b1.gif"></VImg>
      </router-link>
    </div>
  </VCol>
</VCol>
<VRow>
  <VCol cols="12" class="pa-0" style=" height: 205px; display: flex; align-items: center; z-index: 999;">
    <div
    v-scroll-to="'#section'"
    id="hover-class"
    class="text-xl-h5"
    style="cursor: pointer; color: #333;width: 33.333%;height: 100%; background-color: #333333; border-radius: 0; display: flex; align-items: center;justify-content:center; text-decoration: none;"
    >
    <VIcon class="pr-13" icon="mdi-weight-lifter"></VIcon>
    <span class="font-weight-bold">我為何會創建這個網站</span>
    <VIcon class="pl-13" icon="mdi-arm-flex"></VIcon>
    </div>
        <RouterLink
      id="hover-class2"
      class="pa-0 mx-0"
      to="/orders"
      prepend-icon="mdi-arrow-right-thick"
      style="text-decoration: none;display: flex; align-items: center;justify-content: center; color: #000;width: 66.667%; height: 100%; background-color:#fff ; border-radius: 0;"
    >
    <p class="text-lg-h4 font-weight-bold">探索全部文章123</p>
    <div id="hover-class2-date" class="pl-12 ml-10 font-weight-bold" style="text-align: center;">
    <p>23</p>
    <p>Aug</p>
    </div>
      <p class="pl-8 text-lg-h5 font-weight-bold">持續更新，掌握最新的運動資訊!</p>
      <VIcon class="pl-15 ml-15" icon="mdi-dumbbell"></VIcon>
        </RouterLink>
  </VCol>
</VRow>
<VRow>
  <VCol cols="12" class="pa-0" style="background-color:#fff ; height: 78vh; display: flex; align-items: center; z-index: 998;">
    <div class="pa-0" style="width: 56.667%;height: 100%;object-fit: cover;">
      <swiper
    :pagination="{
      type: '',
    }"
    :navigation="false"
    :modules="modules"
    class="mySwiper"
    :autoplay="{
            delay: 3000,
            disableOnInteraction: false
          }"
    :effect="'fade'"
  >
    <swiper-slide id="swiper2"><VImg src="../../assets/重訓1-1.jpg"></VImg></swiper-slide>
    <swiper-slide id="swiper2"><VImg src="../../assets/重訓1-2.jpg"></VImg></swiper-slide>
    <swiper-slide id="swiper2"><VImg src="../../assets/重訓1-3.jpg"></VImg></swiper-slide>
  </swiper>
    </div>
    <div class="pa-0" style="width: 43.333%;height: 100%; background-color: #fff;"></div>
  </VCol>
</VRow>
<VRow>
  <VCol cols="12" class="pa-0" style="background-color:#d32f2f ; height: 100vh; display: flex; align-items: center; z-index: 999;">
    <VImg src="../../assets/under-construction2.gif"></VImg>
  </VCol>
</VRow>
<VRow>
  <VCol class="pa-0" cols="12" style="position: relative; background-color:#fff ; height: 100vh; display: flex; z-index: 998; align-items: center;justify-content: center;">
    <div style="position: absolute;top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 999;"><VImg src="../../assets/under-construction2.gif"></VImg></div>
    <div id="section" cols="12" class="pa-0 elevation-5" style="width: 90%;height: 75%; display: flex; background-color:#E6E6E6;"> 
      <VImg style="width: 33%;" cover src="../../assets/重訓6.jpg"></VImg>
      <div class="" style=" display: flex; align-items: center; justify-content: center; width: 80%;">
        <div class="py-10" style="border: 1px solid black; width: 80%; height: 100%;">
          <div class="text-lg-h4" style="width: 100%; height: 5%; border: 1px solid black;"></div>
          </div>
        </div>
      </div>
  </VCol>
</VRow>
<VRow>
  <VCol cols="12" class="pa-0" style="background-color:#333 ; height: 100vh; display: flex; align-items: center; z-index: 999;">
    <VImg src="../../assets/under-construction2.gif"></VImg>
  </VCol>
</VRow>
</template>

<script setup>
import { api } from '@/plugins/axios'
import { ref } from 'vue'
import { useSnackbar } from 'vuetify-use-dialog'
import ProductCard from '@/components/ProductCard.vue'
 // Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import 'animate.css';
// import 'animate.min.css';
// import 'animate.compat.css';

// import required modules
import { Autoplay,Scrollbar,EffectFade, Navigation, Pagination } from 'swiper/modules';
// import { Scrollbar } from 'swiper/modules';
// import './style.css';

const createSnackbar = useSnackbar()

const modules = [Scrollbar, Autoplay,EffectFade, Navigation, Pagination]

const products = ref([]);


(async () => {
  try {
    const { data } = await api.get('/products')
    products.value.push(...data.result)
  } catch (error) {
    createSnackbar({
      text: error.response.data.message,
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'red',
        location: 'bottom'
      }
    })
  }
})()

</script>

<style scoped>
.right img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
#hover-class:hover {
  transition: all 0.4s ease !important;
  color: #fff !important;
}
#hover-class span {
  color: #ffffff !important;
}
#hover-class2:hover {
  transition: all 0.4s ease !important;
  background-color: #c4c8cc !important;
  color: #fff !important;
}
#hover-class2:hover #hover-class2-date {
  color: #d32f2f !important;
}
.image-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.overlay-text {
  color: #ffffff;
  text-align: center;
}
.image {
	transition: transform 0.5s ease;
	
	&:hover {
		transform: scale(1.08);
	}
}
</style>

