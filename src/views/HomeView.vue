<script lang="ts">
import { defineComponent } from "vue";
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
import MyCom from "@/components/MyCom.vue";

export default defineComponent({
  components: {
    HelloWorld,
    RouterLink,
    RouterView,
    MyCom,
  },
  data() {
    return {
      count1: 1,
      count2: 1,
    };
  },
  methods: {
    sayHello() {
      alert("Hello");
    },
  },
});
</script>

<template>
  <!-- <HelloWorld msg="Hello Vue 3.0 + Element Plus + Vite" /> -->

  <div class="wrapper">
    <h1>This is an home page</h1>

    <div>
      <button @click="sayHello()">sayHello</button>
    </div>

    <div>
      <div>count1:{{ count1 }}</div>
      <div>count2:{{ count2 }}</div>
      <MyCom v-model:count="count1" v-model="count2"></MyCom>
    </div>
  </div>
</template>
