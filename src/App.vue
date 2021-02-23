<template>
  <div class="container">
    <Background />
    <div class="faq-container">
      <transition appear mode="out-in">
        <component :is="$store.getters.$step" />
      </transition>
    </div>
  </div>
</template>

<script>
import Categories from "@/components/Categories";
import Questions from "@/components/Questions";
import Answers from "@/components/Answers";
import Background from "@/components/Background";

export default {
  name: "App",
  data() {
    return {
      current: "Categories"
    };
  },
  components: {
    Categories,
    Questions,
    Background,
    Answers
  },
  created() {
    this.$store.dispatch("fetchFaq");
  }
};
</script>

<style>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.faq-container {
  width: 320px;
  height: 450px;
  padding: 16px;
  background: #36383d;
  border-radius: 15px;
  display: flex;
  color: #fafafa;
  flex-direction: column;
  box-shadow: 2px 2px 8px 0px #e7e2e291;
}
.faq-container .astronaut-wrapper {
  height: 100px;
  width: 100%;
}

.faq-container-title {
  margin: 40px 0 28px 0;
  margin-left: 16px;
}

ul {
  display: flex;
  flex-direction: column;
  padding: 16px 0;
  /* justify-content: center; */
}

ul,
li,
.main-option {
  width: 100%;
  display: flex;
  align-items: center;
}

.main-option {
  padding: 12px 6px;
  transition: background 0.5s;
  border-radius: 5px;
}

.main-option img {
  width: 24px;
  margin: 0 20px;
}

.main-option:hover {
  cursor: pointer;
  background: #3f4452b3;
}

.arrow {
  padding: 8px;
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.5s;
}

.arrow:hover {
  background: #57595f;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s;
}
</style>
