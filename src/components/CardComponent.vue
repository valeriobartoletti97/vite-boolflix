<template>
    <div class="img-card-container">
        <img :src="img" :alt="title">
    </div>
    <div class="card-description py-4 text-center">
        <h5 class="text-uppercase">{{title}}</h5>
        <div>{{originalTitle}}</div>
        <div>{{rating}}</div>
        <div>
            <img class="flags" :src="`images/flags/${language}.svg`" :alt="language">
            <div class="text-uppercase">{{ language }}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CardComponent',
        props:{
            img:String,
            originalTitle:String,
            title:String,
            rating:Number,
            language:String,
        }
    }
</script>

<style lang="scss" scoped>
    .img-card-container{
        width:100%;
        overflow:hidden;
        img{
            width:100%
        }
     }
     .flags{
        width:20px
     }
</style>