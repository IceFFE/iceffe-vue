<template>
  <div>
    <h2 @click="$emit('event-click', 'child-1', $attrs, $listeners)">Child-1</h2>
    <input :value="msg" />
    <Grandson v-bind="$attrs" v-on="$listeners" @event-click="childClick" />
    <!-- v-on 等同于上面 -->
    <!-- <Grandson v-bind="$attrs" v-on="_events" @event-click="childClick" /> -->
  </div>
</template>

<script>
import Grandson from "./Grandson.vue";
export default {
  provide() {
    return {
      provideMsg: "我是Child1"
    };
  },
  props: {
    // msg: String,
    msg: {
      type: String,
      default: ""
    }
  },
  components: {
    Grandson
  },
  mounted() {
    // 1. 父组件传入的事件同时注入到 vm.$listenter 和 vm._events
    // 2. 本实例 v-on 的事件只会注入到 vm._events
    // 3. vm.$emit 的发射是检索 vm._events 里面的事件

    // 1. 父组件传入的事件会进行一层处理 继承自 function invoker () {}
    // 2. v-on 时会判断事件是不是 instanceof invoker ? 【--???--】

    // 1. 事件总线是push进 vm._events
    this.$on("event-bus", (...args) => {
      console.log("event bus $on", args);
      console.log(this.$listeners, this._events, this);
    });
    setTimeout(() => {
      console.log("event bus $emit");
      this.$emit("event-bus", "我是参数1", "我是参数2");
    }, 1000);

    // 2. 等同于上面的 v-on
    this._events["event-bus2"] = [
      function(...args) {
        console.log("event bus2 _events", args);
        console.log(this.$listeners, this._events, this);
      }
    ];
    setTimeout(() => {
      console.log("event bus2 $emit");
      this.$emit("event-bus2", "我是参数1", "我是参数2");
    }, 2000);
  },
  methods: {
    childClick() {
      console.log("Child1----", ...arguments);
    }
  }
};
</script>

<style>
</style>