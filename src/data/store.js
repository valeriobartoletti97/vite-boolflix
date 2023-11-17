import {reactive} from 'vue';
export const store = reactive ({
    apiUrl: "https://api.themoviedb.org/3/search/",
    endPoint: {
        movies:"movie",
        series: "tv"
    },
    imagesUrl: 'https://image.tmdb.org/t/p/w342',
    api_key: "a69ff8b5c9d2f523287aaf0fc6162c8c",
    query: '',
    params:{
        language: 'it-IT'
    },
    movieList: [],
    seriesList: [],
    error: "",
    loading: true,
    movieInfo: false
});