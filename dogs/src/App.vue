<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Buttons @dogButtonClicked="getDog" @catButtonClicked="getCat"/>
    <br>
    <DogImage :dogImages="dogImages"/>
    <CatImage :catImages="catImages"/>
  </div>
</template>

<script>
import DogImage from './components/DogImage.vue'
import CatImage from './components/CatImage.vue'
import Buttons from './components/Buttons.vue'
import axios from 'axios';
export default {
  name: 'App',
  components: {
    DogImage,
    CatImage,
    Buttons
  },
  data(){
    return{
      catImages:[],
      dogImages:[],
    }
  },
  methods:{
    getCat(){
        axios.get('https://api.thecatapi.com/v1/images/search')
        .then((returnData)=>{
            if(returnData.data[0].url){
                // this.url = returnData.data.message;
                // this.images += (`<div><img src='${returnData.data.message}'></img></div>`);
                this.catImages.push(returnData.data[0].url);
            }
        })
        
    },
    getDog(){
            //1.dog.ceo API에 요청을 보내어 JSON을 응답받아
            //2.이미지 URL을 가져와 
            //3.<img src="">로 넣어줌
            axios.get('https://dog.ceo/api/breeds/image/random')
            .then((returnData)=>{
                if(returnData.data.status === 'success'){
                    // this.url = returnData.data.message;
                    // this.images += (`<div><img src='${returnData.data.message}'></img></div>`);
                    this.dogImages.push(returnData.data.message);
                }
            })
        }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
