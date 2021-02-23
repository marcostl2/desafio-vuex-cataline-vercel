<template>
  <div class="answer-wrapper">
    <div class="answer-header">
      <img
        class="arrow"
        @click="goBack"
        src="@/assets/images/arrow-left.svg"
        alt=""
      />
      <h4>{{ $answerTitle }}</h4>
    </div>
    <div>
      <p v-html="$answer"></p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    $answerTitle() {
      return this.$store.getters.$answerTitle;
    },
    $answer() {
      return this.$store.getters.$answer.content;
    }
  },
  methods: {
    goBack() {
      this.$store.dispatch("fetchSteps", "Questions");
    }
  }
};
</script>

<style scoped>
.answer-wrapper {
  height: 100%;
}

.answer-wrapper p {
  margin-top: 20px;
}

.answer-header {
  display: flex;
  align-items: center;
}

.answer-header h4 {
  margin-left: 16px;
}
</style>
