<template>
    <div class="img-container">
        <img :src="igm" :alt="title">
    </div>
    <div>
        <div>
            {{ title }}
        </div>
        <div>
            {{ originalTitle }}
        </div>
        <div>
            {{ rating }}
        </div>
        <div>
            {{ language }}
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

</style>