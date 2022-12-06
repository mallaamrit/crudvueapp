import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main.vue'
import Admin from '../views/Admin/Admin.vue'
import Products from '../views/Admin/Products.vue'
import CreateProduct from '../views/Admin/CreateProduct.vue'
import EditProduct from '../views/Admin/EditProduct.vue'






const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    
      {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      children : [
          {
            path: 'products',
            name: 'Products',
            component: Products
          },

          {
            path: 'create/product',
            name: 'CreateProduct',
            component: CreateProduct
          },
          
          {
            path: 'edit/:id/product',
            name: 'EditProduct',
            component: EditProduct,
            props: true
          },
      ]
    },

   
  ]
})

export default router
