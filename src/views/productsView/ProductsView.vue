<script setup>

import ProductsCard from '@/components/card/ProductsCard/ProductsCard.vue';
import { useProductsStore } from '@/stores/getProducts';
import { ref } from 'vue'

import { useRoute,useRouter } from "vue-router";

const route = useRoute()
const router = useRouter()
const productsStore = useProductsStore()
productsStore.getProducts()

const currentPage = ref(1)

const handleCurrentChange = (page) => {
  if (page === 1) {
    router.push(route.path);
  } else {
    router.push(`${route.path}?page=${page}`);
  }
  productsStore.getProducts(page * 30 - 30);
};
</script>



<template>
    <section class="products">
        <div class="container">
            <h2 class="products__title">Products</h2>
            <div class="products__content">
                <div class="content__cards">
                    <ProductsCard v-for="item in productsStore.products" :key="item.id" :info="item" />
                </div>
            </div>
        </div>
        <el-pagination background :page-size="30" :pager-count="11" layout="prev, pager, next" :total="100 " v-model:current-page="currentPage"
        @current-change="handleCurrentChange"  />
    </section>
</template>