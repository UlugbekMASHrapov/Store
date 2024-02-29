import apiProducts from '../helpers/api'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
  state: () => ({
    product: null
  }),
  actions: {
    async getProduct(id) {
      try {
        const res = await apiProducts.getSingleProduct(id)
        this.product = res
      } catch (error) {
        console.error(error);
      }
    },
  },
  persist:true,
})
