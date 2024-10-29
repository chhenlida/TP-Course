<template>
    <div class="container">
        <div class="block1">
            <Category v-for="(category, index) in category" :key="index" :imgSrc="category.img" :title="category.title"
                :items="category.item" :bgColor="category.bgColor" />
        </div>
        <div class="block2">
            <Promotion v-for="(promotion, index1) in promotion" :key="index1" :imgBg="promotion.imgBg" :caption="promotion.caption"
                :bgColor2="promotion.bgColor2" />
        </div>
    </div>
</template>
<script>

// import mybutton from './components/button.vue';

import Category from './components/category.vue';
import Promotion from './components/promotion.vue';
export default {
    name: 'App',
    components: {
        Category,
        Promotion
    },
    data() {
        return {
            category: [
                { img: '../image/Burger.png', title: "Burger", item: 14 + " items", bgColor: '#F2FCE4' },
                { img: '../image/Peach.png', title: "Peach", item: 17 + " items", bgColor: '#FFFCEB' },
                { img: '../image/Organic Kiwi.png', title: "Oganic Kiwi", item: 68 + " items", bgColor: '#ECFFEC' },
                { img: '../image/Red Apple.png', title: "Red Apple", item: 34 + " items", bgColor: '#FEEFEA' },
                { img: '../image/Snack.png', title: "Snack", item: 25 + " items", bgColor: '#FFF3EB' },
                { img: '../image/Black Plum.png', title: "Black plum", item: 10 + " items", bgColor: '#FFF3FF' },
                { img: '../image/Vegetables.png', title: "Vegetable", item: 65 + " items", bgColor: '#F2FCE4' },
                { img: '../image/Headphone.png', title: "Headphone", item: 33 + " items", bgColor: '#FFFCEB' },
                { img: '../image/Cake & Milk.png', title: "Cake & Mile", item: 54 + " items", bgColor: '#F2FCE4' },
                { img: '../image/Orange.png', title: "Orange", item: 63 + " items", bgColor: '#FFF3FF' },
            ],
            promotion:[
            {imgBg:'../image/onion.png',bgColor2:'#F0E8D5',caption:"Everyday Fresh & Clean with Our Products"},
            {imgBg:'../image/strawberry.png',bgColor2:'#F3E8E8',caption:"Make your Breakfast Healthy and Easy"},
            {imgBg:'../image/salad.png',bgColor2:'#E7EAF3',caption:"The best Organic Products Online"},
            ]
        };
    },
};
</script>

<style>
.container {
    width: 100vw;
    height: 100vh;
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
    justify-content: space-between;
    width: 100%;
    height: 59%;
    padding: 10px;

}
</style>
