<template>
  <header>
    <div class="d-flex justify-content-between flex-nowrap">
      <HeaderComponent />
      <SearchBarComponent @filterSearch="getMoviesAndSeries"/>
    </div>
  </header>
  <MainComponent />
</template>

<script>
import axios from 'axios';
import {store} from './data/store';
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
import SearchBarComponent from './components/SearchBarComponent.vue';
  export default {
    name: 'App',
    components:{
    HeaderComponent,
    MainComponent,
    SearchBarComponent,
},
    data(){
      return{
        store
      }
    },
    methods:{
      getMoviesAndSeries(){
        const movies = store.apiUrl + store.endPoint.movies + '?api_key=' +store.api_key + '&query=' + store.query
      axios.get(movies, {params: store.params}).then((response)=>{
        store.movieList = response.data.results;
        console.log(store.movieList)
      });
      const tvSeries = store.apiUrl + store.endPoint.series + '?api_key=' +store.api_key + '&query=' + store.query
      axios.get(tvSeries, {params: store.params}).then((response)=>{
        store.seriesList = response.data.results;
        console.log(store.seriesList)
      });
      }
    },
    created(){
      
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
    }
</style>