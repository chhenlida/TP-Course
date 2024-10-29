<template>
    <div class="c0" :style="{ backgroundColor: bgColor2 }">
        <img :src="imgBg" alt="">
        <h2>{{ caption }}</h2>
        <Button :buttonText="'Show Now'"/>
    </div>
</template>
<script>
import Button from './button.vue';
export default {
    name: "Promotion",
    props: {
        imgBg: String,
        caption: String,
        bgColor2: String
    },
    components:{
        Button
    }

}
</script>
<style scoped>
.c0 {
    width: 30%;
    height: 50%;
    margin-top: 2px;
    border-radius: 20px;
    position: relative;

}

.c0 img {
    width: 80%;
    height: 75%;
    object-fit: contain;
    position: absolute;
    left: 30%;
    bottom: 0;
}

.c0 h2 {
    color: black;
    position: absolute;
    top: 10%;
    left: 10%;
    width: 50%;

}
</style>