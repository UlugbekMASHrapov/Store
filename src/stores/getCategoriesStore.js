import apiProducts from '@/helpers/api'
import { defineStore } from 'pinia'

export const useCategoriesStore = defineStore('catigories',{
state:() =>({
  categories:null
}),

actions:{
async getCategories(){
  try {
    const res = await apiProducts.getCategory()
    this.categories = res
    } catch (error) {
    console.error(error);
  }
}
}
})
0