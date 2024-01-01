import { defineStore } from 'pinia'

export const useNavStore = defineStore('navStore', {
    state: () => ({
        products: [
            {id: 1, title: "Text Reveal"},
            {id: 2, title: "Cards"},
            {id: 3, title: "Text colors"},
            {id: 4, title: "Image animation"}
        ],
    filter: 'all',
}),
getters: {
    filteredProducts() {

      if (this.filter === 'Text Reveal') {
        return this.products.filter(product => product.title === 'Text Reveal');
      } else if (this.filter === 'Cards') {
        return this.products.filter(product => product.title === 'Cards');
      } else if (this.filter === 'Text colors') {
        return this.products.filter(product => product.title === 'Text colors');
      } else if (this.filter === 'Image animation') {
        return this.products.filter(product => product.title === 'Image animation');
      } else {
        return this.products;
      }
    },
  },
});