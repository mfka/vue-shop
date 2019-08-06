<template>
  <div id="app">
    <Navigation />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Navigation from '@/components/Navigation.vue';

@Component({
  components: { Navigation },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "~bulma/bulma";
html {
  background-color: #f5f5f5;
}
</style>
