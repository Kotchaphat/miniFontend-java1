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
    <HelloWorld />
  </v-col>
  </v-row>
</v-container>
</template>

<script>
import HelloWorld from "../components/HelloWorld.vue";

export default {
  name: "HomeView",

  components: {
    HelloWorld,
  },
  methods: {
    SetData() {
      this.$EventBus.$emit('SetData');
    },
  },
};
</script>
