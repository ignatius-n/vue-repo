<template>
  <div>
    <problem-info>
      Make the custom input, use the v-model directive to update the
      <strong>name</strong> data
    </problem-info>
    <custom-input v-model="name" />
    Name: {{ name }}
  </div>
</template>

<script>
import CustomInput from "../CustomInput.vue";
export default {
  data() {
    return {
      name: "",
    };
  },
  components: { CustomInput },
};
</script>