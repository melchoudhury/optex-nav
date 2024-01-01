import { defineStore } from 'pinia'

export const useNavStore = defineStore('navStore', {
    state: () => ({
        products: [
            {id: 1, title: "Text Reveal"},
            {id: 2, title: "Outdoor"},
            {id: 3, title: "Residential"},
            {id: 4, title: "Commercial"},
            {id: 5, title: "Security"}
        ],
    filter: 'all',
}),
getters: {
    filteredProducts() {

      if (this.filter === 'Text Reveal') {
        return this.products.filter(product => product.title === 'Text Reveal');
      } else if (this.filter === 'Outdoor') {
        return this.products.filter(product => product.title === 'Outdoor');
      } else if (this.filter === 'Residential') {
        return this.products.filter(product => product.title === 'Residential');
      } else if (this.filter === 'Commercial') {
        return this.products.filter(product => product.title === 'Commercial');
      } else if (this.filter === 'Security') {
        return this.products.filter(product => product.title === 'Security');
      } else {
        return this.products;
      }
    },
  },
});