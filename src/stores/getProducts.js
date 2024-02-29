import apiProducts from '@/helpers/api'
import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: null,
    totalProduct: null,
  }),

  actions: {
    async getProducts(skip = 0) {
      try {
        const res = await apiProducts.getProducts(skip)
        this.products = res.products
        this.totalProduct = res.total
      } catch (error) {
        console.error(error);
      }
    },
    async getSearchKeyword(keyword) {
      try {
        const res = await apiProducts.getSearch(keyword)
        this.products = res.products
      } catch (error) {
        console.error(error);
      }
    },
  
  },persist:true
})

