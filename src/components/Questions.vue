<template>
  <div class="questions-wrapper">
    <div class="questions-header">
      <img
        class="arrow"
        @click="goBack"
        src="@/assets/images/arrow-left.svg"
        alt=""
      />
      <div class="questions-header-text">
        <h3>{{ $category.title }}</h3>
        <span>Selecione uma pergunta</span>
      </div>
      <img :src="require(`@/assets/images/${$category.icon}`)" alt="Icon" />
    </div>
    <ul>
      <li v-for="(question, i) in $allQuestions" :key="question.id">
        <div @click="handleQuestion(i)" class="main-option">
          {{ question.title }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      questions: ""
    };
  },
  mounted() {
    this.questions = this.$allQuestions;
  },
  methods: {
    handleQuestion(id) {
      this.$store.dispatch("fetchSteps", "Answers");
      this.$store.dispatch("fetchAnswers", this.questions[id]);
    },
    goBack() {
      this.$store.dispatch("fetchSteps", "Categories");
    }
  },
  computed: {
    $allQuestions() {
      return this.$store.getters.$allQuestions;
    },
    $category() {
      return this.$store.getters.$category;
    }
  }
};
</script>

<style scoped>
.questions-wrapper,
ul {
  height: 100%;
}

.questions-header {
  display: grid;
  gap: 12px;
  align-items: center;
  grid-template-columns: auto 1fr auto;
}

img:not(.arrow) {
  width: 24px;
}
</style>
