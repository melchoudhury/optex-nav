<template>
    <div class="country">
       {{ country.title }}
    </div>
</template>
<script>
import { useNavStore } from '../stores/navStore.js';
export default {
    props: ['country'],
    setup() {
        const navStore = useNavStore();
        return { navStore }
    }
}
</script>