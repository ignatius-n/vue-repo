<template>
  <div>
    <label for="customInput" style="display: block">Custom Input</label>
    <div>
      <input type="text" :value="name" @input="$emit('input', $event.target.value)" />
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomInput",
  props: ['name']
};
</script>