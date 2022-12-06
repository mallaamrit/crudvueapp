<template>
    <div>
       <RouterLink :to="{ name: 'CreateProduct'}"><button>Add Product</button></RouterLink>
        <table>
            <thead>
                <tr>
                    <th>
                        #id
                    </th>
                    <th>
                        Title
                    </th>
                    <th>
                        Image
                    </th>
                    <th>
                        Actions
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product in products" :key="product.id">
                    <td>{{product.id}}</td>
                    <td>{{product.title}}</td>
                    <td><img :src="product.image" alt="product.title" width="90"></td>
                    
                    <td>
                        <RouterLink :to="{name: 'EditProduct', params: {id : product.id}}" class="btn">Edit</RouterLink>
                        <button @click="del(product.id)" class="brn btn-del">Delete</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import EditProduct from './EditProduct.vue';

    export default {
        name: 'Products',

        setup() {
            const products = ref([]);

            //fetching data
            onMounted (async() => {
                const res = await fetch('http://localhost:3000/products');
                products.value = await res.json();
            })

            //deletes inbackend
            const del = async(id) => {
                await fetch(`http://localhost:3000/products/${id}`, {
                    method: 'DELETE'
                })

                products.value = products.value.filter(p => p.id !== id);
            }

            return { products, del }
        }
    }
</script>
<style>
</style>
