import { defineStore } from 'pinia';
import axios from 'axios';

export const useProductStore = defineStore('product', {
  state: () => ({
       groups: [],
       promotions: [],
       categories: [],
       products: []
  }),
  getters: {

  },
  actions: {
    async fetchCategory(){
      axios.get('http://localhost:3000/api/categories')
      .then(response => {
          this.category = response.data;
      })
      .catch(error => {
          console.error("Error fetching categories:", error.response ? error.response.data : error.message);
      });
    },
    async fetchPromotions(){
      axios.get('http://localhost:3000/api/promotions')
            .then(response => {
                this.promotion = response.data;
            })
            .catch(error => {
                console.error("Error fetching promotions:", error.response ? error.response.data : error.message);
            });

    }
  },
});
