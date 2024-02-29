
import { defineStore } from 'pinia'

export const useBasketStore = defineStore('basket', {
  state: () => ({
    basket: [],
  }),
  actions: {
    getBasket(param,id) {
        try {
        const basketId = this.basket?.find(item => item?.param?.id == id)

          if (basketId?.param?.id !== param?.id) {
            this.basket.push({ param, count: 1 })
            console.log(basketId);
          
          }else {
            basketId.count++
          
          }  
        } catch (error) {
          console.error(error.message);
        }
      },
      getProductCount(sym,id){
        const basketId = this.basket?.find(item => item?.param?.id == id)
        if (sym == '+' && basketId?.param?.id == id ) {
            basketId.count++
            console.log(basketId.count)
        }else if(sym=='-' && basketId.count > 1 ){
         basketId.count--
        }
      },
      delBasketProduct(id) {
        const index = this.basket.findIndex(item => item.param?.id == id)
        this.basket.splice(index, 1)
        // localStorage.removeItem('products')
      },
  },persist:true,
})
