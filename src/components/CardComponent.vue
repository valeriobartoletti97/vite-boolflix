<template>
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
            originalTitle:String,
            title:String,
            rating:Number,
            language:String,
        }
    }
</script>

<style lang="scss" scoped>

</style>