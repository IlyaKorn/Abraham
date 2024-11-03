<template>
  <div class="spinner" />
</template>

<script>
export default {
  name: 'VSpinner',
};
</script>
<style lang="css">
.spinner {
  border-radius: 50%;
  border: 8px solid rgb(0, 104, 142);
  border-top: 8px solid rgba(0, 104, 142, 0.5);
  width: 60px;
  height: 60px;
  animation: spin 1s linear infinite;
  position: fixed;
  top: 50%;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
