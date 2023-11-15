<template>
  <main>
     <div class="container">
        <h2 class="text-uppercase">Movies</h2>
        <div class="row align-items-center justify-content-center">
            <div class="col-12 col-md-4 col-lg-3" v-for="(card,index) in store.movieList" :key="card.id">
                <CardComponent :title="card.title" :originalTitle="card.original_title" :rating="card.vote_average" :language="card.original_language"/>
            </div>
        </div>
        <h2 class="text-uppercase"> Tv Series</h2>
        <div class="row align-items-center justify-content-center">
            <div class="col-12 col-md-4 col-lg-3" v-for="(card,index) in store.seriesList" :key="card.id">
                <CardComponent :title="card.name" :originalTitle="card.original_name" :rating="card.vote_average" :language="card.original_language"/>
            </div>
        </div>
     </div>
  </main>
</template>

<script>
import LoaderComponent from './LoaderComponent.vue';
import CardComponent from './CardComponent.vue';
import { store } from '../data/store';
    export default {
        name: 'MainComponent',
        components:{
           LoaderComponent,
           CardComponent,
        },
        data(){
            return{
                store
            }
        },
    }
</script>

<style lang="scss" scoped>
    main{
        background-color: gray;
        margin-top: 120px;
    }
</style>