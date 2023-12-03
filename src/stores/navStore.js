import { defineStore } from 'pinia'

export const useNavStore = defineStore('navStore', {
    state: () => ({
        countries: [
            {id: 1, title: "United Kingdom"},
            {id: 2, title: "Germany"},
            {id: 3, title: "France"},
            {id: 4, title: "Belgium"},
            {id: 5, title: "Luxumbug"},
            {id: 6, title: "Denmark"}
        ]
    })
})