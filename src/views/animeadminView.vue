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
      <animeadmin />
    </v-col>
    </v-row>
  </v-container>
</template>

<script>
import animeadmin from "../components/Animeadmin.vue";
export default {
  components: {
    animeadmin,
  },
};
</script>

<style>
</style>