<template>
  <main>
    <div class="d-flex justify-content-center align-items-center" v-if="store.movieList == 0 && store.seriesList == 0">
        <h3 class="mt-5">Search your favourite show</h3>
    </div>
    <div class="d-flex justify-content-center align-items-center" v-if="store.loading">
        <LoaderComponent/>
    </div>
    <div class="alert alert-danger text-uppercase text-center" v-if="store.error">
        {{ store.error }}
    </div>
    <div class="my-container">
        <section id="movies" v-if="store.movieList != 0">
            <h2 class="text-uppercase text-center mb-4">Movies</h2>
            <div class="d-flex align-items-start flex-wrap justify-content-center">
                <div class="px-3 mb-5" v-for="(card,index) in store.movieList" :key="card.id">
                    <!-- offcanvas -->
                    <!-- <div class="movie-info" v-if="store.movieInfo">
                        <div class="canvas-img">
                            <img :src="store.imagesUrl500 + store.movieInfo.backdrop_path" alt="">
                        </div> 
                        <div class="offcanvas-wrapper">
                            <div>ciao</div>
                        </div>    
                    </div> -->
                    <CardComponent  @click="getInfo(card)" :img="card.poster_path" :title="card.title" :originalTitle="card.original_title" :rating="card.vote_average" :language="card.original_language" :overview="card.overview"/>
                </div>
            </div>
        </section>
        <section id="series" v-if="store.seriesList != 0">
            <div class="d-flex justify-content-center align-items-center" v-if="store.loading">
                <LoaderComponent/>
            </div>
            <h2 class="text-uppercase text-center mb-4"> Tv Series</h2>
            <div class="d-flex align-items-start flex-wrap justify-content-center">
                <div class="px-3 mb-5" v-for="(card,index) in store.seriesList" :key="card.id">
                    <CardComponent :img="card.poster_path" :title="card.name" :originalTitle="card.original_name" :rating="card.vote_average" :language="card.original_language" :overview="card.overview"/>
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
         methods:{
            getInfo(card){
                store.movieInfo = card;
                console.log(store.movieInfo);
                return card
            },
            removeInfo(){
                if(store.movieInfo !== false){
                    store.movieInfo = false
                }  
            }
        } 
    }
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables.scss' as *;
    main{
        background-color: $black-olive;
        margin-top: 120px;
        height: calc(100vh - 120px);
        overflow-y: auto;
    }
    h2{
        font-size: 1.8em;
        margin:0;
        font-weight: 800;
    }
    .my-container{
        max-width: 90%;
        margin:0 auto;
        padding: 20px 0;
    }
    h3{
        color: $floral-white;
        font-weight: 700
    }
    #movies{
        margin-bottom: 50px
    }
    div.alert-danger{
        width:50%;
        margin: 0 auto;
        background-color: rgb(238, 53, 53);
        font-weight: bolder
     }
     .movie-wrapper{
        overflow:hidden
     }
     .movie-info{
        z-index:10001;
        max-width: 33%;
        background-color:$black-olive;
        height: calc(100vh - 60px);
        margin: 30px auto;
        position: absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
        border-radius: 10px;
        border: 1px solid $eerie-black
     }
     .fa-solid.fa-xmark{
        padding:10px;
        background-color:gray;
        top:0;
        right:0;
        border-radius:50%;
        font-size:2em;
     }
     .fa-solid.fa-xmark:hover{
        cursor:pointer
     } 
     .offcanvas-wrapper{
        padding:20px;
     }
     .canvas-img{
            width: 100%;
            height:300px;
            overflow:hidden;
            position:relative;
            img{
            width: 100%;
            display:block; 
            object-fit: cover
        }
       }
</style>