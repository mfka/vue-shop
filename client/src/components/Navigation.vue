<template>
  <nav class="navbar is-fixed-top">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">SHOP</a>
    </div>
    <div class="navbar-end">
      <router-link class="navbar-item" to="/">Home</router-link>
      <router-link class="navbar-item" to="/about">About</router-link>
      <router-link class="navbar-item" to="/contact">Contact</router-link>
    </div>
  </nav>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Navigation extends Vue {}
</script>
<style lang="scss" scoped>
nav {
  .navbar-item {
    padding: 1rem 2rem;
  }
  .navbar-brand {
    font-size: 2rem;
    font-weight: 100;
  }
  .navbar-end {
    .navbar-item {
      font-weight: 700;
    }
  }
}
</style>

