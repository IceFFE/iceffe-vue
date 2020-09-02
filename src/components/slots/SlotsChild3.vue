<template>
  <div>
    <h2>SlotsChild3 - 作用域插槽</h2>
    <slot name="content" sex="man" age="18">作用域-1</slot>
    <div />
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>