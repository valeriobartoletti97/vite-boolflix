<template>
  <div class="d-flex flex-no-wrap">
      <input type="text" name="searchbar" id="searchbar" v-model="searchTest" placeholder="Search..">
      <button class="btn btn-danger" @click="console">Search</button>
  </div>
</template>

<script>
    export default {
        name: 'SearcBarComponent',
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
   input,button{
            height: 70%;
            margin: auto;
        }
</style>