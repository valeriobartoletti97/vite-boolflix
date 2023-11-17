<template>
  <div class="search-box">
    <button class="btn-search" @click="filterData"><i class="fas fa-search"></i></button>
    <input type="text" class="input-search" placeholder="Type to Search..." @keyup.enter="filterData" v-model="searchTest">
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
@use '../assets/style/partials/variables.scss' as *;
.search-box{
  width: fit-content;
  height: fit-content;
  position: relative;
}
.input-search{
  height: 50px;
  width: 50px;
  border-style: none;
  padding: 10px;
  font-size: 18px;
  letter-spacing: 2px;
  outline: none;
  border-radius: 25px;
  transition: all .5s ease-in-out;
  background-color: $flame;
  padding-right: 40px;
  color:#fff;
}
.input-search::placeholder{
  color:rgba(255,255,255,.5);
  font-size: 18px;
  letter-spacing: 2px;
  font-weight: 100;
}
.btn-search{
  width: 50px;
  height: 50px;
  border-style: none;
  font-size: 20px;
  font-weight: bold;
  outline: none;
  cursor: pointer;
  border-radius: 50%;
  position: absolute;
  right: 0px;
  color:#ffffff ;
  background-color:transparent;
  pointer-events: painted;  
}
.btn-search:focus ~ .input-search{
  width: 300px;
  border-radius: 0px;
  background-color: transparent;
  border-bottom:1px solid rgba(255,255,255,.5);
  transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
}
.input-search:focus{
  width: 300px;
  border-radius: 0px;
  background-color: transparent;
  border-bottom:1px solid rgba(255,255,255,.5);
  transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
}
</style>

<!--   <div class="d-flex flex-no-wrap">
      <input type="text" name="searchbar" id="searchbar" placeholder="Search.." @keyup.enter="filterData" v-model="searchTest">
      <button class="btn" @click="filterData">Search</button>
  </div> -->