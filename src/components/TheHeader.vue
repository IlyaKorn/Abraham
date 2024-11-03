<template>
  <header class="header">
    <nav class="navbar">
      <a
        href="#"
        class="navbar-item"
      >Home</a>
      <a
        href="#"
        class="navbar-item"
      >About</a>
      <a
        href="#"
        class="navbar-item"
      >Services</a>
      <a
        href="#"
        class="navbar-item"
      >Contact</a>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
};
</script>

<style lang="css" scoped>
  .header {
    font-size: 32px;
    font-weight: bold;
    padding: 10px;
    border-bottom: 1px solid black;
    margin-bottom: 30px;
  }
  .navbar {
    display: flex;
    align-items: center;
    column-gap: 12px;
  }
  .navbar-item {
    text-decoration: none;
    color: black;
    transition: all 0.3s ease-in-out;
  }
  .navbar-item:hover {
    opacity: 0.5;
  }
  .navbar-item:first-of-type {
    flex-grow: 1;
  }
</style>
