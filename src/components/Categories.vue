<template>
  <div>
    <div class="astronaut-wrapper">
      <img src="@/assets/images/astronaut.svg" alt="Astronaut" />
    </div>
    <div class="faq-container-title">
      <h4>Perguntas frequentes</h4>
      <span>Escolha a categoria desejada</span>
    </div>
    <ul>
      <li v-for="(question, i) in $allFaq" :key="question.id">
        <div @click="handleCategory(i)" class="main-option">
          <img :src="getIcon(question.icon)" alt="Icon" />
          {{ question.title }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    getIcon(icon) {
      return require(`@/assets/images/${icon}`);
    },
    handleCategory(id) {
      this.$store.dispatch("fetchQuestions", id);
      this.$store.dispatch("fetchSteps", "Questions");
    }
  },
  computed: {
    $allFaq() {
      return this.$store.getters.$allFaq;
    }
  }
};
</script>

<style scoped></style>
