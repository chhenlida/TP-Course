<template>
    <button type="button" class="btn">{{ buttonText }} &#8594;</button>
</template>
<script>
export default {
    // name: " button",
    props:{
        buttonText: {
                type: String,
                Required: true,
            },
    },
    
}
</script>
<style scoped>
.btn {
    background-color: rgb(18, 201, 140);
    width: 100px;
    height: 40px;
    font-size: 13px;
    color: white;
    margin-top: 35%;
    position: absolute;
    border: none;
    margin-left: 10%;
}
.btn:hover{
        background-color: #FDC040;
    }
</style>