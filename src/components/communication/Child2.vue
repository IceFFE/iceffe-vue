<template>
  <div>
    <h2 @click="$emit('event-click', 'child-2', $attrs, $listeners)">Child-2</h2>
    <input :value="$attrs.msg" />
    <Grandson v-bind="$attrs" v-on="$listeners" />
  </div>
</template>

<script>
import Grandson from "./Grandson.vue";

export default {
  components: {
    Grandson
  }
};
</script>

<style>
</style>