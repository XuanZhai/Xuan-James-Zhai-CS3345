 import ProductList from './app/productList'
 import MyCart from './app/myCart'
 import ProductDetails from './app/productDetails'


 export const ROUTES = [
     { path: '/products/:productId', component: ProductDetails},
     { path: '/cart', component: MyCart},
     { path: '/', component: ProductList}
 ]


