<template>
  <div>
      <span v-for="image in catImages" :key="image.id">
        <!-- <img v-bind:src="url"/> -->
            <img :src="image" width="200" height="200"/>
      </span>
  </div>
</template>

<script>

export default {
    name: 'CatImage',
    props: {
        catImages: Array
    }
}
</script>

<style>

</style>