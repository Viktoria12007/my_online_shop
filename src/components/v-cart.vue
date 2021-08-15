<template>
<div class="v-cart">
    <router-link :to="{ name: 'catalog'}">
    <div class="v-catalog__link_to_cart">Back to catalog</div>
  </router-link>
    <h2>Cart</h2>
    <p v-if="!CART.length">There are no products in cart...</p>
    <v-cart-item 
    v-for="(item, index) in CART"
    :key="item.article"
    :cart_item_data="item"
    @deleteFromCart="deleteFromCart(index)"
    />
</div>
</template>

<script>
import vCartItem from './v-cart-item.vue';
import {mapActions, mapGetters} from 'vuex';

export default {
   name: 'v-cart',
   components: {
       vCartItem
   },
   props: {
       cart_data: {
           type: Array,
           default() {
             return []
           }
       }
   },
   data() {
       return {
          
       }
   },
   computed: {
        ...mapGetters([
      'CART'
    ])
   },
   methods: {
       ...mapActions([
           'DELETE_FROM_CART'
       ]),
       deleteFromCart(index) {
          this.DELETE_FROM_CART(index);
       }
   },
   watch: {},
   mounted() {
       
   }
}
</script>

<style>
.v-cart {
    display: flex;
    flex-direction: column;
}
</style>