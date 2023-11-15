<template>
  <HeaderComponent />
  <MainComponent />
</template>

<script>
import axios from 'axios';
import {store} from './data/store';
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
  export default {
    name: 'App',
    components:{
    HeaderComponent,
    MainComponent
},
    data(){
      return{
        store
      }
    },
    created(){
      const url = this.store.apiUrl + this.store.endPoint.series + '?api_key=' +this.store.api_key + '&query=' + this.store.query
      axios.get(url).then((response)=>{
        this.store.movieList = response.data;
        console.log(this.store.movieList)
      })
    }
  }
</script>

<style lang="scss" scoped>

</style>