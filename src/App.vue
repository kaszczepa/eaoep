<template>
  <div id="app">
    <app-header></app-header>
    <router-view class="view"></router-view>
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
  padding-top: 130px;
}

@media (max-width: 768px) {
    .view {
      padding-top: 0;
    }
}
</style>