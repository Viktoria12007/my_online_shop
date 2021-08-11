<template>
<div class="v-cart">
   <h3>{{title}}</h3>
   <p>Text for Item</p>
   <button>Add goods</button>
</div>
</template>

<script>
export default {
   name: 'v-cart',
   components: {},
   props: {},
   data() {
       return {
           title: 'v-cart',
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
.v-cart {
    display: flex;
    flex-direction: column;
    /* justify-content: center;
    align-items: center;
    max-width: 900px;
    margin: 0 auto; */
}
</style>