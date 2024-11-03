<template>
  <footer class="footer">
    <p class="footer__title">
      <span class="footer__author">
        Created by <span class="footer__author-name">Ilia Koren</span>
      </span>
      03.11.2024
    </p>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',
};
</script>

<style lang="css" scoped>
.footer {
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.footer__author-name {
  font-weight: bold;
}
</style>
