<template>
  <VRow>
    <VCol cols="12" class="pa-16 ma-2" style="height: 891px;background-color: #fff; z-index: 999;">
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
      <pre class="mr-1 text-lg-h4" style="position: relative; margin-top: 2%; right: 5%; color: #fff;">
        開始您的健身旅程，找出最適合您的健身計劃！
        無論是獨特的重量訓練、
        充滿活力的有氧運動，
        或是平衡的飲食，
        還有其他多種內容，
        這裡都能幫助您打造專屬自己的訓練方式！
      </pre>
        <v-card-actions>
        <VBtn
      id="hover-class"
      class="px-16 mx-9 text-lg-h5"
      to="/orders"
      prepend-icon="mdi-arrow-right-thick"
      style="color: #fff; margin-top: 30%; left: 50%;"
    >
      前往看全部文章
    </VBtn>
      </v-card-actions>
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
  <VCol class="pa-0" cols="12" style="background-color:#fff ; height: 891px; display: flex; z-index: 999; align-items: center;justify-content: center;">
    <VCard cols="12" class="pa-0 elevation-5" style="width: 90%;height: 75%; display: flex; background-color:#E6E6E6;"> 
      <VImg style="width: 35%;" cover src="../../assets/重訓6.jpg"></VImg>
    <div cols="9" style="width: 80%; border: 1px solid black;">
      <div cols="12" style="height: 80%; width: 80%;background-color:aqua ; display: flex; align-items: center !important;justify-content: center !important;">
        
      </div>
    </div>
    </VCard>
  </VCol>
</VRow>
<VRow>
  <VCol cols="12" class="pa-0" style="background-color:#9da4a8 ; height: 891px; display: flex; align-items: center; z-index: 999;">
    
  </VCol>
</VRow>
<VRow>
  <VCol cols="12" class="pa-0" style="background-color:#d32f2f ; height: 891px; display: flex; align-items: center; z-index: 999;">

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
  color: #ffeb3b !important;
  transition: all 0.25s ease !important;
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

body {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background: #111;
}

.image {
	transition: transform 0.5s ease;
	
	&:hover {
		transform: scale(1.08);
	}
}
</style>

