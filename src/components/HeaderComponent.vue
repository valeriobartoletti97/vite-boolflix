<template>
  <header>
    <div class="d-flex justify-content-between flex-nowrap">
        <h1>Boolflix</h1>
        <SearchBarComponent/>
    </div>
  </header>
</template>

<script>
import SearchBarComponent from './SearchBarComponent.vue';

    export default {
        name: 'HeaderComponent',
        components:{
    SearchBarComponent
},
        data(){
            return{
               
            }
        }
    }
</script>

<style lang="scss" scoped>
    header{
        position: absolute;
        top:0;
        left:0;
        width: 100%;
        height: 120px;
        background-color: black;
        z-index: 1000;
        padding: 40px;
        h1{
            color:red;
            margin:0;
        }
    }
</style>