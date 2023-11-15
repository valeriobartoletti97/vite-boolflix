<template>
  <header>
    <div class="d-flex justify-content-between flex-nowrap">
        <h1>Boolflix</h1>
        <div class="d-flex flex-no-wrap">
           <input type="text" name="searchbar" id="searchbar" v-model="searchTest" placeholder="Search..">
           <button class="btn btn-danger" @click="console">Search</button>
        </div>
    </div>
  </header>
</template>

<script>
    export default {
        name: 'HeaderComponent',
        components:{
            
        },
        data(){
            return{
               searchTest: '',
            }
        },
        methods:{
            console(){
                console.log(this.searchTest)
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
        input,button{
            height: 70%;
            margin: auto
        }
    }
</style>