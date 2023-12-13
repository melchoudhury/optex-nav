<template>
  <div class="top-nav">
    <div class="select-nav">
      <div class="select-title">Select from:</div>
      <div class="products" v-for="product in navStore.products" :key="product.id">
        <ProductNav @click="filteredProducts(product.title)" :product="product" />
      </div>
    </div>
    <ProductItems />
  </div>
</template>

<script>
import { ref } from 'vue'
import { useNavStore } from './stores/navStore.js';
import ProductNav from './components/ProductNav.vue'
import ProductItems from './components/ProductItems.vue';

export default {
  name: 'App',
  components: {
    ProductNav,
    ProductItems
},
setup() {
  const navStore = useNavStore();
  const filter = ref('all');
  const filteredProducts = newFilter => {
      filter.value = newFilter;
      navStore.filter = newFilter;
  };
  return { navStore, filter, filteredProducts }
}

}
</script>

<style lang="scss">
    .select-nav {
        display: flex;
    }
    .select-title {
      font-weight: bold;
      margin-right: 1rem
    }
    .products {
      margin-right: 1rem;
      &:hover {
        cursor: pointer;
      }
    }
    #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    }
</style>