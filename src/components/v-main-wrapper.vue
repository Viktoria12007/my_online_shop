<template>
<div class="v-main-wrapper">
   <h1>{{title}}</h1>
</div>
</template>

<script>
export default {
   name: 'v-main-wrapper',
   components: {},
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
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 900px;
    margin: 0 auto;
}
</style>