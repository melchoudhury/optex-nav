<template>
    <div class="product">
       {{ product.title }}
    </div>
</template>
<script>
import { useNavStore } from '../stores/navStore.js';
export default {
    props: ['product'],
    setup() {
        const navStore = useNavStore();
        return { navStore }
    }
}
</script>