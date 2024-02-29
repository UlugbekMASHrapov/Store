<script  setup>
import { useCategoriesStore } from '@/stores/getCategoriesStore'

const categoriesStore = useCategoriesStore()
categoriesStore.getCategories()
</script>

<template>
<section class="categories">
<div class="container">
<h2 class="categories__title">Categories</h2>
<div class="categories__cards" >
    <router-link :to="'/category/'+ item" v-for="item in categoriesStore.categories" class="categories__card" >{{ item }}</router-link>
</div>
</div>
</section>
</template>