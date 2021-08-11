<template>
<div class="v-catalog-item">
   <img src="" alt="img">
   <p>Icon 1</p>
   <p>Price: 100</p>
   <button>Add to card</button>
</div>
</template>

<script>
export default {
   name: 'v-catalog-item',
   components: {},
   props: {},
   data() {
       return {
           title: 'v-catalog-item',
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

<style lang="scss">
.v-catalog-item {
    flex-basis: 25%;
    color: $red;
    box-shadow: 0 0 8px 0 #e0e0e0;
    padding: 16px;
    margin-bottom: 16px;
} 
</style>