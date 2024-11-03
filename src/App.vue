<template>
  <div class="app-container">
    <TheHeader />
    <CardList />
    <TheFooter />
  </div>
</template>
<script>
import TheHeader from './components/TheHeader.vue';
import CardList from './components/CardList.vue';
import TheFooter from './components/TheFooter.vue';

export default {
  name: 'App',
  components: {
    TheHeader,
    CardList,
    TheFooter,
  },
};
</script>

<style lang="css">
body {
  height: 100%;
  margin: 0 auto;
  max-width: 1600px;
  background-color: rgba(201, 194, 193, 0.2);
}
.app-container {
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
}
</style>
