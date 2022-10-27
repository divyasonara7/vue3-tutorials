import { createStore } from 'vuex';
import axios from 'axios';
// Create a new store instance.
const store = createStore({
  state: {
    countryList: [],
  },
  mutations: {
    SET_COUNTRYLIST(state,data) {
      state.countryList = data
    }
  },
  getters:{
    getCountryLists(state){
      return state.countryList;
    }
  },
  actions:{
   async  getCountryList(context){
   const data =   await  axios.get('https://restcountries.com/v2/all')
   context.commit('SET_COUNTRYLIST',data.data)
      }
    },
})

export default store;