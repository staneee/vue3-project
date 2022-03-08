<script lang="ts">
import { defineComponent } from "vue";
import { RouterLink, RouterView } from "vue-router";
import BaseHeader from "./components/layouts/BaseHeader.vue";

export default defineComponent({
  components: {
    BaseHeader,
    RouterLink,
    RouterView,
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
  <BaseHeader />
  <main>
    <RouterView />
  </main>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.element-plus-logo {
  width: 50%;
}
</style>
