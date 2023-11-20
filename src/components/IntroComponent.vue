<template>
    <div>
        <video src="/videos/intro.mp4" autoplay muted @ended="$emit('onEnd')"></video>
    </div>
</template>

<script>
    export default {
        name: "IntroComponent"
    }
</script>

<style lang="scss" scoped>
    video{
        z-index:2000;
        position: fixed;
        right: 0;
        bottom: 0;
        min-width: 100%;
        min-height: 100%;
    }
</style>