<template>
  <div>
    <Child1 :msg="msg1" @event-click="clickByChildren" />
    <Child2 :msg="msg2" @event-click="clickByChildren" />
  </div>
</template>

<script>
import Child1 from "./Child1.vue";
import Child2 from "./Child2.vue";
export default {
  provide() {
    return {
      provideMsg: "我是index"
    };
  },
  data() {
    return {
      msg1: "msg-1",
      msg2: "msg-2"
    };
  },
  components: {
    Child1,
    Child2
  },
  methods: {
    clickByChildren() {
      console.log("index----", ...arguments);
    }
  }
};
</script>

<style>
</style>