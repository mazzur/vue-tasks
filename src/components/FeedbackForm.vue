<template>
  <div>
    <div>
      <input type="checkbox" id="knowsFormFields">
      <label for="knowsFormFields"> Knows how to bind form fields</label>
    </div>
    <div>
      <input type="checkbox" id="likedTheInterview">
      <label for="wasAnnoyedWithFormTask"> Said this was a great interview</label>
    </div>

    <div class="mt-4">
      <span class="pt-4 text-3xl font-extrabold text-transparent bg-gradient-to-r bg-clip-text from-indigo-500 to-cyan-500">
        {{ finalScore }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeedbackForm',
  data() {
    return {
      finalScore: '',
    };
  },
};
</script>

<style lang="scss" scoped></style>
