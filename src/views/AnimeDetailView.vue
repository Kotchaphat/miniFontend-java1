<template>
    <!--
        <v-row>
      <v-col cols="1" v-for="i in 13" :key="i" >
        {{ 'col -'+i }}
      </v-col>
    </v-row>
    -->
  <v-container>
    <v-row>
        <v-col cols="12">
      <Animedetail />
    </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Animedetail from "../components/AnimeDetail.vue";
export default {
  components: {
   Animedetail,
  },
};
</script>

<style>
</style>