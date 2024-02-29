<script setup>
import {ref} from 'vue'
import { useProductStore } from '@/stores/getProductStore';
import { useBasketStore } from '@/stores/getBasket';

const basketStore = useBasketStore()

const productStore = useProductStore()

const props = defineProps({
    info:{
        type:Object,
        required:true,
    }
})
const  Modal = () =>{
    alert("Added ✓")
}
</script>

<template>
    <div class="card">
      <img :src="info?.thumbnail" alt="" class="card__image">
        <h3 class="card__title">{{ info?.title }}</h3>
       <div class="card__prices">
        <p class="card__realprice">{{ info?.price }}</p>
        <p class="card__price">{{ Math.ceil( info?.price - (info?.price / 100 * info.discountPercentage )) }}$</p>
       </div>
       <div class="card__buttons">
       
        <router-link class="card__btn" :to="'/product/' + info?.id" @click="productStore.getProduct(info?.id)">More</router-link> 
            <button class="card__btn" @click="basketStore.getBasket(info,info?.id), Modal() ">Buy</button> 
       </div>
    </div>
    
</template>