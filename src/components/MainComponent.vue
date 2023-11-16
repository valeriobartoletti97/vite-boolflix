<template>
  <main>
    <div class="my-container">
        <section id="movies" v-if="store.movieList != 0">
            <h2 class="text-uppercase text-center mb-2">Movies</h2>
            <div class="d-flex align-items-start flex-wrap justify-content-center">
                <div class="px-3 mb-5" v-for="(card,index) in store.movieList" :key="card.id">
                    <CardComponent :img="store.imagesUrl + card.poster_path" :title="card.title" :originalTitle="card.original_title" :rating="card.vote_average" :language="card.original_language" :overview="card.overview"/>
                </div>
            </div>
        </section>
        <section id="series" v-if="store.seriesList != 0">
            <h2 class="text-uppercase text-center mb-2"> Tv Series</h2>
            <div class="d-flex align-items-start flex-wrap justify-content-center">
                <div class="px-3 mb-5" v-for="(card,index) in store.seriesList" :key="card.id">
                    <CardComponent :img="store.imagesUrl + card.poster_path" :title="card.name" :originalTitle="card.original_name" :rating="card.vote_average" :language="card.original_language" :overview="card.overview"/>
                </div>
            </div>
        </section>
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
        min-height: calc(100vh - 120px);
    }
    h2{
        font-size: 1.8em;
        margin:0;
    }
    .my-container{
        max-width: 90%;
        margin:0 auto;
        padding: 20px 0;
    }
</style>