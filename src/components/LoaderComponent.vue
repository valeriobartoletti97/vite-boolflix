<template>
    <div>
        <span class="loader"></span>
    </div>
</template>

<script>
    export default {
        name: 'LoaderComponent'
    }
</script>

<style lang="scss" >
    .loader {
    width: 48px;
    height: 48px;
    border: 5px solid white;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    margin-top: 120px;
    position: fixed;
    top: 50vh;
    left: 50vw;
    z-index: 10001
    }

    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    } 
   
</style>