<template>
  <div>
    <SlotsChild>
      111
      <template v-slot:default>v-slot:default 333</template>
      <template>222</template>
      444
    </SlotsChild>
    <SlotsChild2>
      <template v-slot:content>具名插槽 - content</template>
    </SlotsChild2>
    <SlotsChild3>
      <template v-slot:content="params">{{params.sex}}-{{params.age}}</template>
    </SlotsChild3>
    <SlotsChild3 v-slot:content="params">{{params.sex}}+{{params.age}}</SlotsChild3>
  </div>
</template>

<script>
import SlotsChild from "./SlotsChild.vue";
import SlotsChild2 from "./SlotsChild2.vue";
import SlotsChild3 from "./SlotsChild3.vue";
export default {
  data() {
    return {};
  },
  components: {
    SlotsChild,
    SlotsChild2,
    SlotsChild3
  },
  methods: {}
};
</script>

<style>
</style>