<template>
  <div class="home">
    <HomeComponent />
  </div>
</template>

<script>
import HomeComponent from '../components/HomeComponent.vue';

export default {
  name: 'home-page',
  components: {
    HomeComponent,
  }
}
</script>

<style scoped>
.home {
  width: 100%;
}
</style>