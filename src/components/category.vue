<template>
    <div class="b0" :style="{ backgroundColor: color }">
        <div class="b0-image">
            <img :src="image" alt="name">

        </div>
        <div class="b0-text">
            <h4>{{ name }}</h4>
            <!-- Tp02 -->
            <p>{{ productCount }} items</p>

        </div>
    </div>
</template>
<script>


export default {
    name: "Category",
    //tp02
    props: {
        id: String,
        name: String,
        image: String,
        productCount: String,
        color: String
    }
}
</script>
<style scoped>
.b0 {
    color: black;
    border: 1px solid greenyellow;
    border-radius: 10px;
    width: 20%;
    height: 80%;
    
}

.b0-image {
    width: 100%;
    height: 50%;
    border-radius: 10px;
    display: flex;
    justify-content: center;
}

.b0-image img {
    width: 80%;
    height: 100%;
}

.b0-text {
    width: 100%;
    height: 40%;
    border-radius: 10px;
    padding: 3px;

}
.b0-text h4{
    display: flex;
    justify-content: center;
}

.b0-text p{
    display: flex;
    justify-content: center;
    opacity: 0.8;
    font-size: 12px;

}
</style>