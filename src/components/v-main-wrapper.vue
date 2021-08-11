<template>
<div class="v-main-wrapper">
   <v-catalog/>
   <v-cart/>
</div>
</template>

<script>
import vCatalog from './v-catalog.vue';
import vCart from './v-cart.vue';

export default {
   name: 'v-main-wrapper',
   components: {
       vCatalog,
       vCart
   },
   props: {},
   data() {
       return {
           title: 'v-main-wrapper.vue',
       }
   },
   computed: {},
   metods: {},
   watch: {},
   mounted() {
       console.log('Hello world!')
   }
}
</script>

<style>
.v-main-wrapper {
    max-width: 900px;
    margin: 0 auto;
}
</style>