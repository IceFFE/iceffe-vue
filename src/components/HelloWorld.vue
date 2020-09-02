<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- <Communication /> -->
    <Slots />
  </div>
</template>

<script>
// import Communication from "./communication/index.vue";
import Slots from "./slots/index.vue";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  components: {
    // Communication,
    Slots
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
