
<script setup>
import { useProductsStore } from '@/stores/getProducts';
import { ref,watch } from 'vue';
import { RouterLink } from 'vue-router'
import debounce from 'lodash.debounce'


const productsStore = useProductsStore()
const pages = [
    {
     path:'/category',
     name:"Category"
    },
    {
     path:'/basket',
     name:"Basket"
    },
]
const  query = ref("")

// watch(query,debounce(()=>{
//     productsStore.getSearchKeyword(query)
// },500))
</script>


<template>
<nav class="nav">
<div class="container">
<RouterLink to="/" class="nav__logo">NEW<span class="nav__logotip">store</span></RouterLink>
<form class="nav__form" >
  <input type="text" placeholder="Search" v-model="query" class="nav__search" required @input=" productsStore.getSearchKeyword(query)">  
</form>
<div class="nav__menu">
    
    <ul class="nav__menu-list">
        
        <li class="nav__menu-item" v-for="item in pages" :key="item.name">
            <RouterLink :to="item.path" class="nav__menu-link">{{ item.name }}</RouterLink>
        </li>
    </ul>
</div>
</div>
</nav>        
    
</template>