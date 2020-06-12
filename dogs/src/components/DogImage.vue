<template>
  <div>    
    <!-- <div v-html="images"> -->
    <span v-for="image in dogImages" :key="image.id">
        <!-- <img v-bind:src="url"/> -->
            <img :src="image" width="200" height="200"/>
    </span>
  </div>
</template>

<script>

export default {
    name: 'DogImage',
    props: {
        dogImages: Array
    }
}
</script>

<style>

</style>