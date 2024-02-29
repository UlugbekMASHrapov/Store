import apiProducts from '@/helpers/api'
import { defineStore } from 'pinia'

export const useSingleCategoryStore = defineStore('category',{
state:() =>({
  category:null
}),

actions:{
async getCategory(name){
  try {
    const res = await apiProducts.getSingleCategory(name)
    console.log(res);
    this.category = res.products
  } catch (error) {
    console.error(error);
  }
}
}
})
