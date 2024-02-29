<script setup>
import BasketCard from "@/components/card/BasketCard/BasketCard.vue";
import {  computed } from 'vue'
import { useBasketStore } from '@/stores/getBasket';
const basketStore = useBasketStore()


const totalPrice = computed(() => {
    return Math.ceil(
      basketStore.basket?.reduce((acc, item) => acc += item.count * (item.param?.price - (item.param?.price / 100) * item.param?.discountPercentage), 0)
    )
})

const Buy = ()=>{
  alert('Purchased✅')
  basketStore.basket.length = 0
}

</script>

<template>
  <section class="basket">
    <div class="container">
      <div class="basket__cards">
        <div v-if="basketStore.basket.length == 0" class="basket__empty">
          <h2 class="basket__empty-title">Empty There ☹</h2>
          <router-link to="/" class="basket__empty-link">Go Shopping</router-link>
        </div>
  
        <BasketCard v-for="item in basketStore.basket" :key="item?.id" :info="item" /> 
      </div>
      <span class="basket__topay" v-show="basketStore.basket.length > 0" @click="Buy()"> to pay:{{ totalPrice }}</span>

    </div>
  </section>
</template>
