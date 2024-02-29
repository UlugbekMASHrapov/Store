<script setup>
import { useRoute } from 'vue-router';
import { useSingleCategoryStore } from '@/stores/getCategoryAboutStore';
import ProductsCard from '@/components/card/ProductsCard/ProductsCard.vue';


const route = useRoute()
const singleCategoryStore = useSingleCategoryStore()
singleCategoryStore.getCategory(route.params.name)



</script>

<template>
<div class="category" >
<div class="container">
    <div class="category__cards">
        <ProductsCard v-for="item  in singleCategoryStore.category" :key="item.id" :info="item"/>
    </div>
</div>
</div>    
    
</template>