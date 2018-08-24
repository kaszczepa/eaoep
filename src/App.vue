<template>
  <div id="app">
    <app-header></app-header>
    <div class="whiteWrapper">
      <router-view class="view"></router-view>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import footer from './components/footer.vue'
  import header from './components/header.vue'

  export default {
    components: {
      'app-header': header,
      'app-footer' : footer
    }
 }   
</script>

<style>
.view {
    margin-top: 160px;
    z-index: 900;
    position: relative;
}

@media (max-width: 768px) {
    .view {
      margin-top: 0;
      position: static;
    }
}
</style>