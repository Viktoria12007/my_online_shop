<template>
<div class="v-main-wrapper">
    <router-view v-slot="{ Component }" >
    <keep-alive>
        <component :is="Component" />
    </keep-alive>
    </router-view>
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
   methods: {},
   watch: {},
   mounted() {
       
   }
}
</script>

<style>
.v-main-wrapper {
    max-width: 900px;
    margin: 0 auto;
}
</style>