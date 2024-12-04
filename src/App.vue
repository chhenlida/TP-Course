<template>
  <div class="container">
    <div class="block0">
      <h2 class="menu-title">Featured Categories</h2>
      <Menu :menuItems="store.groups" />
    </div>
    <div class="block1">
      <Category v-for="(category, index) in categories" :key="index" :image="category.image" :name="category.name"
        :product-count="category.productCount" :color="category.color" />
    </div>
    <div class="block2">
      <Promotion v-for="(promotion, index1) in promotions" :key="index1" :image="promotion.image"
        :title="promotion.title" :color="promotion.color" />
    </div>
    <div class="block0 block-1">
      <h2 class="menu-title">Popular Products</h2>
      <Menu :menuItems="store.groups" />
    </div>
    <product class="block-1"/>
  </div>
</template>

<script>

import Category from './components/category.vue';
import Promotion from './components/promotion.vue';
import product from './components/product.vue';
import Menu from './components/Menu.vue';
import { useProductStore } from './stores/product_store';
import { mapState } from 'pinia';


export default {
  name: 'App',
  components: {
    Category,
    Promotion,
    Menu,
    product
  },
  setup() {
    const store = useProductStore();
    return {
      store
    };
  },
  async mounted() {
    await this.store.fetchCategories();
    await this.store.fetchPromotions();
    await this.store.fetchProducts();
    await this.store.fetchGroups();
    },
    computed:{
      ...mapState(useProductStore,{
        categories: 'categories',
        promotions: 'promotions',
        product: 'product',
        groups: 'groups'
      })
    }
};
</script>

<style>
.container {
  width: 200vw;
  height: 110vh;
  padding: 10px;

}

.block1 {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  height: 20%;
  padding: 10px;
}

.block2 {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  height: 59%;
  padding: 10px;
}
.block0{

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px; 
  
}
.block-1{
  position: relative;
  bottom: 250px;
}
.menu-title {
  font-size: 26px;
  font-weight: 600;
  color: #333;
  margin: 0;
}
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 20px;
  padding-top: 20px;
}
</style>