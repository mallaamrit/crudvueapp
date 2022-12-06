<template>
    <div>
        <form @submit.prevent="submit()">
            <label>Tilte</label>
            <input name="title" type="text" v-model="title">

            <label>Image</label>
            <input name="image" type="text" v-model="image">

            <button>Add</button>
        </form>
    </div>
</template>

<script>
import {ref} from 'vue'
import { useRouter} from 'vue-router'
    export default {
        name: 'Createproduct',
        setup() {
            const title = ref('');
            const image = ref ('');
            const router = useRouter();

            const submit = async () => {
                await fetch('http://localhost:3000/products', {
                    method: 'POST',
                    headers : {'Content-type': "application/json"},
                    body: JSON.stringify({
                        title: title.value,
                        image: image.value
                    })
                });
                await router.push('/admin/products')

            }

            return { title, image, submit}
        }
    }
</script>
<style>
</style>
