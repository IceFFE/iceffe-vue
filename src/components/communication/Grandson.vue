<template>
  <div>
    <h2
      @click="
        $emit(
          'event-click',
          'Grandson',
          $attrs,
          $listeners,
          _events,
          $listeners['event-click'] === _events['event-click'][0]
        )
      "
    >Grandson</h2>
    <input :value="msg" />
    <div />
    <input :value="$attrs.msg" />
  </div>
</template>

<script>
export default {
  // inject: ["provideMsg"],
  inject: {
    msg: {
      from: "provideMsg"
    }
  },
  mounted() {
    // $emit == Vue.prototype.$emit => { this._events[arguments[0]]; }
    // vm.$listeners['event-click'] === vm._events['event-click'][0]

    console.log((window.a = this), this.$listeners, this._events);
  }
};
</script>

<style></style>
