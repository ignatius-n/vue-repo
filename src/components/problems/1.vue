<template>
  <div>
    <problem-info instructions="Toggle the contact information paragraph" />
    <a @click="toggle" v-if="showContact" href="javascript:;">Hide Detail</a>
    <a @click="toggle" v-else href="javascript:;">Show Detail</a>
    <p v-if="showContact">Contact us by email johndoe@example.com </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showContact : true
    };
  },
  methods: {
    toggle() {
      this.showContact = !this.showContact;
    }
  },
};
</script>