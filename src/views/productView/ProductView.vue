<script setup>
import { useProductStore } from '@/stores/getProductStore';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Navigation, Pagination } from 'swiper/modules';

const productStore = useProductStore()
productStore.getProduct();

</script>


<template>
  <section class="product">
    <div class="container">
      <swiper
      :modules="[Navigation, Pagination]"
      :navigation="true"
      :pagination="true"
      class="product__swiper" 
      >
        <swiper-slide v-for="item in productStore?.product?.images" class="product__swiper-slide"  >
          <img :src="item" alt="" class="product__image">
        </swiper-slide>
      </swiper>
      <div class="product__info">
      <h3 class="product__title">{{ productStore.product?.title }}</h3>
      <p class="product__subtitle">{{  productStore.product?.description }}</p>
      <div class="product__prices">
        <p class="product__real-price">{{  productStore.product?.price }}$</p>
        <p class="product__price">{{ Math.ceil( productStore.product?.price - (productStore.product?.price / 100 * productStore.product?.discountPercentage )) }}$</p>
      </div>
      <p class="product__brand">Brand:{{ productStore.product?.brand }}</p>
      <router-link :to="'/category/' + productStore.product?.category" class="product__btn"  >More This Product</router-link>
    </div>
</div>
  </section>
</template>