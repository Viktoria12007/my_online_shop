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
    @decrement="decrement(index)"
    @increment="increment(index)"
    />
    <div class="v-cart__total">
        <p class="total__name">Total: </p>
        <p>{{cartTotal}} р.</p>
    </div>
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
    ]),
    cartTotal() {
      return this.CART.reduce((res, item) => res + item.price * item.quantity, 0)
    }
   },
   methods: {
       ...mapActions([
           'DELETE_FROM_CART',
           'DECREMENT_CART_ITEM',
           'INCREMENT_CART_ITEM'
       ]),
       deleteFromCart(index) {
          this.DELETE_FROM_CART(index);
       },
       decrement(index) {
          this.DECREMENT_CART_ITEM(index)
       },
       increment(index) {
          this.INCREMENT_CART_ITEM(index)
       }
   },
   watch: {},
   mounted() {
       
   }
}
</script>

<style lang="scss">
.v-cart {
    margin-bottom: 100px;
    &__total {
      display: flex;
      justify-content: center;
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      color: $white-color;
      font-size: 20px;
      padding: 16px;
      background-color: $green-bg;
    }
}
.total__name {
    margin-right: 16px;
}
</style>