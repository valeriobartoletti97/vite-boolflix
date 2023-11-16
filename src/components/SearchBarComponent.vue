<template>
  <div class="d-flex flex-no-wrap">
      <input type="text" name="searchbar" id="searchbar" v-model="searchTest" placeholder="Search.." @keyup.enter="filterData">
      <button class="btn" @click="filterData">Search</button>
  </div>
</template>

<script>
import { store } from '../data/store';
    export default {
        name: 'SearcBarComponent',
        data(){
            return{
                searchTest: '',
                store
            }
        },
        methods:{
            filterData(){
                if(this.searchTest === ''){
                    this.searchTest = '';
                }else{
                    store.query = this.searchTest;
                    this.searchTest = '';
                    console.log(store.query)
                    this.$emit('filterSearch', this.searchTest)
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
   input,button{
            height: 70%;
            margin: auto;
        }
        button{
            color:white;
        }
</style>