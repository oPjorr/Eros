<template>
  <div class="row">
    <va-counter class="mx-4 my-2" v-model="value" messages="Default" />

    <va-counter class="mx-4 my-2" stateful messages="Stateful" />

    <va-counter
      class="mx-4 my-2"
      v-model="value"
      manual-input
      messages="Manual-input"
    />
    <va-date-input class="mb-4 mr-4" label="readonly" readonly />
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 10,
    };
  },
};
</script>

<style></style>
