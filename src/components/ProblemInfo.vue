<template>
  <div
    style="
      border: 1px solid gray;
      padding: 1rem;
      text-align: left;
      border-radius: 5px;
      overflow: hidden;
      margin: 20px 0;
      background: #f0f0f0;
    "
  >
    <slot v-if="$slots.default"></slot>
    <div v-else v-html="instructions"></div>
  </div>
</template>

<script>
export default {
  name: "ProblemInfo",
  props: ["instructions"],
};
</script>