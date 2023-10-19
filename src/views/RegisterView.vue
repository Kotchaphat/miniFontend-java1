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
      <Registerpage/>
    </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Registerpage from "../components/Register.vue";
export default {
  components: {
    Registerpage,
  },
};
</script>

<style>
</style>