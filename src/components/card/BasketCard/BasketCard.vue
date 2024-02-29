<script setup>
import { useBasketStore } from '@/stores/getBasket';
const basketStore = useBasketStore()


import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination } from 'swiper/modules';

const props = defineProps({
    info:{
     type:Object,
     required:true  
    }
})


</script>


<template>
 <div class="basket__card"  >
    <swiper
      :modules="[Pagination]"
      :pagination="true"
      class="basket__card__swiper" 
      >
        <swiper-slide v-for="item in info?.param?.images" class="basket__card__swiper-slide"  >
          <img :src="item" alt="" class="basket__card-img">
        </swiper-slide>
      </swiper>
      <div class="basket__card-txt">
          <h2 class="basket__card-title">{{ info?.param?.title }}</h2>
          <p class="basket__card-subtitle">{{ info?.param?.description }}</p>
          <div class="card__prices">
          <p class="card__realprice">{{ info?.param?.price }}</p>
        <p class="card__price">{{ Math.ceil( info?.param?.price - (info?.param?.price / 100 * info.param?.discountPercentage )) }}$</p>
      </div>
      <div class="basket__card-counts">
        <p class="basket__card-symb" @click="basketStore.getProductCount('-', info?.param?.id)" >-</p>
        <p class="basket__card-count">{{ info?.count }} </p>
        <p class="basket__card-symb" @click="basketStore.getProductCount('+',info?.param?.id)">+</p>
        
      </div>
      <p @click="basketStore.delBasketProduct(info?.param?.id)" class="basket__card-delete">Delete</p>
         <div class="basket__card-price">total price:{{ Math.ceil( info?.param?.price - (info?.param?.price / 100 * info.param?.discountPercentage )) * info?.count }}$</div>
      </div>
 </div>
</template>

