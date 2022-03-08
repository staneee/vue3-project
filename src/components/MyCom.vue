<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MyCom",
  props: {
    count: {
      type: Number,
    },
    modelValue: Number,
  },
  emits: ["update:count", "update:modelValue"],
  data() {
    return {
      count1: this.count || 1,
      count2: this.modelValue || 1,
    };
  },
  methods: {
    addCount1() {
      this.count1++;
      this.$emit("update:count", this.count1);
    },
    addCount2() {
      this.count2++;
      this.$emit("update:modelValue", this.count2);
    },
  },
});
</script>

<template>
  <div>
    <div>{{ count1 }}</div>
    <button @click="addCount1()">count1</button>
  </div>

  <div>
    <div>{{ count2 }}</div>
    <button @click="addCount2()">count2</button>
  </div>
</template>

<style>
a {
}
</style>
