<template>
<!--     <div class="movie-info d-flex justify-content-center align-items-center" v-if="store.movieInfo">
        <h5>ciao</h5>
        <i class="fa-solid fa-xmark position-absolute" @click="removeInfo"></i>
        <div>{{originalTitle}}</div>
    </div> -->
    <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <div class="img-card-container">
                    <img :src="img" :alt="title">
                </div>
            </div>
            <div class="flip-card-back">
                <div class="card-description py-4 text-center">
                    <h5 class="text-uppercase">{{title}}</h5>
                    <div>{{originalTitle}}</div>
                    <i v-for="n in 5" :key="n" class="fa-star" :class="(n <= getVote) ? 'fa-solid' : 'fa-regular'"></i>
                    <div>
                        <img class="flags" :src="getFlags" :alt="language">
                    </div>
                    <p class="plot">"{{ overview }}"</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../data/store';
    export default {
        name: 'CardComponent',
        props:{
            img:String,
            originalTitle:String,
            title:String,
            rating:Number,
            language:String,
            overview:String
        },
        data(){
            return{
               flags:[
               'fake',
               'lt',
               'lb',
               'lc',
               'li',
               'lk',
               'ky',
               'kz',
               'la',
               'ko',
               'kp',
               'kw',
               'ki',
               'km',
               'kn',
               'ke',
               'kg',
               'kh',
               'jm',
               'jo',
               'jp',
               'is',
               'it',
               'je',
               'io',
               'iq',
               'ir',
               'ie',
               'il',
               'im',
               'in',
               'ht',
               'hu',
               'id',
               'hm',
               'hn',
               'hr',
               'gw',
               'gy',
               'hk',
               'gs',
               'gt',
               'gu',
               'gp',
               'gq',
               'gr',
               'gl',
               'gm',
               'gn',
               'gg',
               'gh',
               'gi',
               'gb',
               'gd',
               'ge',
               'gf',
               'gb-nir',
               'gb-sct',
               'gb-wls',
               'fr',
               'ga',
               'en',
               'uk',
               'ko',
               'ja',
               'fk',
               'fm',
               'fo',
               'et',
               'fi',
               'fj',
               'eh',
               'er',
               'es',
               'ec',
               'ee',
               'eg',
               'dm',
               'do',
               'dz',
               'cz',
               'de',
               'dj',
               'dk',
               'cw',
               'cx',
               'cy',
               'cr',
               'cu',
               'cv',
               'cm',
               'cn',
               'co',
               'ci',
               'ck',
               'cl',
               'cf',
               'cg',
               'ch',
               'ca',
               'cc',
               'cd',
               'bw',
               'by',
               'bz',
               'br',
               'bs',
               'bt',
               'bv',
               'bn',
               'bo',
               'bq',
               'bj',
               'bl',
               'bm',
               'bg',
               'bh',
               'bi',
               'bd',
               'be',
               'bf',
               'az',
               'ba',
               'bb',
               'au',
               'aw',
               'ax',
               'aq',
               'ar',
               'as',
               'at',
               'al',
               'am',
               'ao',
               'af',
               'ag',
               'ai',
               'ad',
               'ae',
               'en',
               'zm',
               'zw',
               'ye',
               'yt',
               'za',
               'wf',
               'ws',
               'xk',
               'vi',
               'vn',
               'vu',
               'vc',
               've',
               'vg',
               'uy',
               'uz',
               'va',
               'ua',
               'ug',
               'um',
               'us',
               'tv',
               'tw',
               'tz',
               'to',
               'tr',
               'tt',
               'tl',
               'tm',
               'tn',
               'th',
               'tj',
               'tk',
               'td',
               'tf',
               'tg',
               'sy',
               'sz',
               'tc',
               'st',
               'sv',
               'sx',
               'sn',
               'so',
               'sr',
               'ss',
               'sk',
               'sl',
               'sm',
               'sh',
               'si',
               'sj',
               'sd',
               'se',
               'sg',
               'sa',
               'sb',
               'sc',
               'rs',
               'ru',
               'rw',
               'qa',
               're',
               'ro',
               'pt',
               'pw',
               'py',
               'pn',
               'pr',
               'ps',
               'ph',
               'pk',
               'pl',
               'pm',
               'pe',
               'pf',
               'pg',
               'nz',
               'om',
               'pa',
               'np',
               'nr',
               'nu',
               'ni',
               'nl',
               'no',
               'ne',
               'nf',
               'ng',
               'mz',
               'na',
               'nc',
               'mw',
               'mx',
               'my',
               'ms',
               'mt',
               'mu',
               'mv',
               'mp',
               'mq',
               'mr',
               'mm',
               'mn',
               'mo',
               'mh',
               'mk',
               'ml',
               'me',
               'mf',
               'mg',
               'ma',
               'mc',
               'md',
               'lu',
               'lv',
               'ly',
               'lr',
               'ls',
               ],
               store
            }
        },
        methods:{
           /*  getInfo(card){
                const info = card
                store.movieInfo = !store.movieInfo;
                console.log(card)
                return info;
            },
            removeInfo(){
                if(store.movieInfo === true){
                    store.movieInfo = false
                }  
            } */
        },
        computed:{
            getFlags(){
                let flag =`images/flags/${this.language}.svg`;
                if(!this.flags.includes(this.language)){
                    flag = `images/flags/fake.png`
                }
                return flag;
            },
            getVote(){
                return Math.ceil (this.rating / 2);
            },
        }
    }
</script>

<style lang="scss" scoped>
    .img-card-container{
        width:100%;
        height:100%;
        overflow:hidden;
        img{
            width:100%;
            height: 100%;
            
            display:block;
            line-height: 300px;
            overflow:hidden
        }
     }
     .flags{
        width:20px
     }
     .fa-solid.fa-star{
        color:rgb(231, 231, 48)
     }
     .flip-card {
      background-color: transparent;
      width: 342px;
      height: 500px;
      perspective: 1000px;
    }
    .flip-card:hover{
        cursor:pointer;
    }
    .flip-card-inner {
      position: relative;
      width: 100%;
      height: 100%;
      text-align: center;
      transition: transform 0.8s;
      transform-style: preserve-3d;
    }
    .flip-card:hover .flip-card-inner {
      transform: rotateY(180deg);
    }
    .flip-card-front, .flip-card-back {
      position: absolute;
      width: 100%;
      height:100%;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
    }
    .flip-card-front {
      background-color: #252422ff;
      color: white;
      background-image: url('/images/unknown-movie.jpg');
      background-position: center;
      background-size: contain;
    }
    .flip-card-back {
      background-color: black;
      color: white;
      transform: rotateY(180deg);
      overflow-y: auto;
    }
    .plot{
        height: auto;
        text-align: center;
        margin:0;
    }
    .card-description{
        padding: 0 20px;
        overflow-y: auto;
    }
    /* .movie-info{
        z-index:10001;
        max-width: 50%;
        background-color:white;
        height: calc(100vh - 100px);
        margin: 50px auto;
        position: absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
        border-radius: 10px
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
     } */
</style>