<template>
  <div v-for="country in navStore.countries" :key="country.id">
    <ProductNav :country="country" />
  </div>
</template>

<script>
import { ref } from 'vue'
import { useNavStore } from './stores/navStore.js';
import ProductNav from './components/ProductNav.vue'

export default {
  name: 'App',
  components: {
    ProductNav
},
setup() {
  const navStore = useNavStore()
  const filter = ref('all')
  return { navStore, filter }
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
