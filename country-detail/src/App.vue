<template>
  <q-layout view="lHh Lpr lFf">
<div class="header">
    <p> Where in the world?</p>
    <q-btn color="white" text-color="black" label="Light Mode" flat no-caps></q-btn>
  </div>
    <q-page-container class="">
      <router-view :key="$route.path" />
    </q-page-container>
      
  </q-layout>

</template>

<script>
export default {
  name: 'LayoutDefault',
}
</script>
<style>
@import './styles/app.scss';
</style>