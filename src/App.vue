<template>
<!--   <div class="overlay"> -->
    <IntroComponent @onEnd="intro = false" v-if="intro"/> 
    <header>
      <div class="d-flex justify-content-between flex-nowrap">
        <HeaderComponent />
        <SearchBarComponent @filterSearch="getMoviesAndSeries"/>
      </div>
    </header>
    <MainComponent />
<!--   </div> -->
</template>

<script>
import axios from 'axios';
import {store} from './data/store';
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
import IntroComponent from './components/IntroComponent.vue';
import SearchBarComponent from './components/SearchBarComponent.vue';
  export default {
    name: 'App',
    components:{
    HeaderComponent,
    MainComponent,
    SearchBarComponent,
    IntroComponent,
},
    data(){
      return{
        store,
        intro: true
      }
    },
    methods:{
      getMoviesAndSeries(){
        store.loading=true
        const movies = store.apiUrl + store.endPoint.movies + '?api_key=' +store.api_key + '&query=' + store.query
        axios.get(movies, {params: store.params}).then((response)=>{
        store.movieList = response.data.results;
        console.log(store.movieList)
      }).catch((error)=>{
          store.error = error.message
          console.log(store.error)
        }).finally(()=>{
          store.loading = false
        });
        const tvSeries = store.apiUrl + store.endPoint.series + '?api_key=' +store.api_key + '&query=' + store.query
        axios.get(tvSeries, {params: store.params}).then((response)=>{
        store.seriesList = response.data.results;
        console.log(store.seriesList)
      }).catch((error)=>{
          store.error = error.message
          console.log(store.error)
        }).finally(()=>{
          store.loading = false
        });
      },
    },
    mounted(){
      this.intro = true
    } 
  }
</script>

<style lang="scss" scoped>
@use './assets/style/partials/variables.scss' as *;
    header{
        position: fixed;
        top:0;
        left:0;
        width: 100%;
        height: 120px;
        background-color: $eerie-black;
        z-index: 1000;
        padding: 40px;
    }
/*     .overlay {
      position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba($color: #000000, $alpha: 0.9);
    z-index: 1000000;
    opacity: 1;
} */
</style>