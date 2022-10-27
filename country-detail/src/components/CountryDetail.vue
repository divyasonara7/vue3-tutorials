<template>

    <div class="q-pa-md">
        <div class="back-btn">
        <q-btn color="white" text-color="black" label="Back" @click="this.$router.back()" no-caps></q-btn>
    </div>
    <div class="row justify-center">
      <div class="col-12 col-md-2">
        <img src = "../assets/logo.png"/>
      </div>
      <div class="col-12 col-md-auto">
        <q-list>
            <q-item  v-ripple>
                <q-item-section>Native Name:</q-item-section>
                <q-item-section side>Side</q-item-section>
            </q-item>
            <q-item  v-ripple>
                <q-item-section>Native Name:</q-item-section>
                <q-item-section side>Side</q-item-section>
            </q-item>
            <q-item  v-ripple>
                <q-item-section>Native Name:</q-item-section>
                <q-item-section side>Side</q-item-section>
            </q-item>
            <q-item  v-ripple>
                <q-item-section>Native Name:</q-item-section>
                <q-item-section side>Side</q-item-section>
            </q-item>
            <q-item  v-ripple>
                <q-item-section>Native Name:</q-item-section>
                <q-item-section side>Side</q-item-section>
            </q-item>
        </q-list>
      </div>
      <div>
        <q-list>
            <q-item  v-ripple>
                <q-item-section>Native Name:</q-item-section>
                <q-item-section side>Side</q-item-section>
            </q-item>
            <q-item  v-ripple>
                <q-item-section>Native Name:</q-item-section>
                <q-item-section side>Side</q-item-section>
            </q-item>
            <q-item  v-ripple>
                <q-item-section>Native Name:</q-item-section>
                <q-item-section side>Side</q-item-section>
            </q-item>
        </q-list>
      </div>
    </div>
    </div>
    

</template>
<script>
import { useRoute } from 'vue-router'
import {onMounted} from 'vue'
export default {
    setup() {
        const route = useRoute()
        onMounted(() => {
        const id = route.params.id
        return{
            id
        }
    })

        
    },
}
</script>
