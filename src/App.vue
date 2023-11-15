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
    MainComponent,
},
    data(){
      return{
        store
      }
    },
    created(){
      const movies = this.store.apiUrl + this.store.endPoint.movies + '?api_key=' +this.store.api_key + '&query=' + this.store.query
      axios.get(movies).then((response)=>{
        this.store.movieList = response.data.results;
        console.log(this.store.movieList)
      });
      const tvSeries = this.store.apiUrl + this.store.endPoint.series + '?api_key=' +this.store.api_key + '&query=' + this.store.query
      axios.get(tvSeries).then((response)=>{
        this.store.seriesList = response.data.results;
        console.log(this.store.movieList)
      });
    }
  }
</script>

<style lang="scss" scoped>

</style>