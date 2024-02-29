import axiosClient from "./axiosClient"

const apiProducts = {
    getProducts(skip) {
        const url = `products?skip=${skip}`
        return axiosClient.get(url)
    },
    getSingleProduct(id){
        const url = `products/${id}`;
        return axiosClient.get(url)
    },
    getCategory(){
        const url = `products/categories`
         return axiosClient.get(url)
    },
    getSingleCategory(name){
        const url = `products/category/${name}`
         return axiosClient.get(url)
    },
    getSearch(keyword){
        const url = `products/search?q=${keyword}`
        return axiosClient.get(url)
    }
}


export default apiProducts