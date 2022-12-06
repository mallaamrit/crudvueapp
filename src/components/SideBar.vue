<template>
    <div class="sidebar">
       <ul class="side-menu">
        <li> <RouterLink :to="{ name: 'Products'}">Products</RouterLink></li>
        <li>
            <RouterLink :to="{ name: 'CreateProduct'}">Create Product</RouterLink>
        </li>

       </ul>
    </div>
</template>

<script>
    export default {
        name: 'SideBar'
    }
</script>

<style >

</style>