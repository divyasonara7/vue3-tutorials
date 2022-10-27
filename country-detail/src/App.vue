<template>
  <q-layout view="lHh Lpr lFf">
<div class="header">
    <p> Where in the world?</p>
    <q-btn color="white" text-color="black" label="Light Mode" flat no-caps></q-btn>
  </div>
    <q-page-container class="">
    <CountryList></CountryList>

    </q-page-container>
      
  </q-layout>

</template>

<script>
import CountryList from "@/components/CountryList.vue"
export default {
  name: 'LayoutDefault',

  components: {
    CountryList,
  },

  setup () {
    return {
    }
  }
}
</script>
<style>
@import './styles/app.scss';
</style>