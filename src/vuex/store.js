import { createApp } from 'vue';
import {createStore} from 'vuex';
import apiActions from './actions/api-actions';
import commonActions from './actions/common-actions';
import getters from './getters/getters';
import mutations from './mutations/mutations';

const actions = { ...apiActions, ...commonActions };

const store = createStore({
   state: {
       products: [],
       cart: []
   },
   mutations,
   actions,
   getters
})

const app = createApp({});
app.use(store);


export default store;