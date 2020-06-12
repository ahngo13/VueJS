<template>
  <div>
      <button @click="dogClicked">개 이미지 가져오기</button>
      <button @click="catClicked">고양이 이미지 가져오기</button>
  </div>
</template>

<script>
export default {
    name:"Buttons",
    methods:{
        dogClicked(){
            // this.$emit('dogButtonClicked') 전파될 변수명
            this.$emit('dogButtonClicked');
        },
        catClicked(){
            // this.$emit('dogButtonClicked') 전파될 변수명
            this.$emit('catButtonClicked');
        }
    }
}
</script>

<style>

</style>