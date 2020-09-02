<template>
  <div>
    <h2>SlotsChild2-具名插槽</h2>
    <slot name="content">具名-1</slot>
    <div />
    <slot name="content2">具名-2（未设置对应插槽，slot 直接显示其 content）</slot>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>