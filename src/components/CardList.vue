<template>
  <main>
    <div class="card-list">
      <Spinner v-if="isLoading" />
      <TheCard
        v-for="(item, i) in cards"
        :key="i"
        :content="item"
      />
    </div>
  </main>
</template>

<script>
import debounce from 'lodash.debounce';
import TheCard from './TheCard.vue';
import Spinner from './Spinner.vue';

export default {
  name: 'CardList',
  components: {
    TheCard,
    Spinner,
  },
  data() {
    return {
      cards: [],
      currentPage: 1,
      isLoading: false,
    };
  },
  created() {
    this.getData();
  },
  mounted() {
    if (window) {
      document.addEventListener('scroll', this.scrollHandler);
    }
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.scrollHandler);
  },
  methods: {
    async getData(isPushing = false) {
      this.isLoading = true;
      try {
        const response = await fetch(`https://randomuser.me/api/?page=${this.currentPage}&results=20`);
        const data = await response.json();

        if (isPushing) {
          this.cards = [...this.cards, ...data.results];
        } else {
          this.cards = data.results;
        }
      } catch (err) {
        console.error(err);
      } finally {
        this.isLoading = false;
      }
    },
    loadOnScroll: debounce(function () {
      const scrollPosition = window.innerHeight + window.scrollY;
      const documentHeight = document.body.offsetHeight;
      const screenHeightDeviationModifier = 5;

      if (scrollPosition + screenHeightDeviationModifier >= documentHeight) {
        this.currentPage += 1;
        this.getData(true);
      }
    }, 500),
    scrollHandler() {
      this.loadOnScroll();
    },
  },
};
</script>

<style lang="css" scoped>
.card-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 30px;
  width: min-content;
  margin: 0 auto;
  margin-bottom: 30px;
}
</style>
