import { createStore } from "vuex";
import { faqCategories } from "@/utils/db.json";

export default createStore({
  state: {
    faq: [],
    step: "Categories",
    questions: [],
    category: {},
    answer: {}
  },
  mutations: {
    SET_FAQ(state, faq) {
      state.faq = faq;
    },
    SET_QUESTIONS(state, id) {
      state.category = state.faq[id];
      state.questions = state.faq[id].questions;
    },
    SET_STEP(state, step) {
      state.step = step;
    },
    SET_ANSWER(state, answer) {
      state.answer = answer;
    }
  },
  actions: {
    fetchFaq(context) {
      const faq = faqCategories;

      context.commit("SET_FAQ", faq);
    },
    fetchQuestions(context, id) {
      context.commit("SET_QUESTIONS", id);
    },
    fetchSteps(context, step) {
      context.commit("SET_STEP", step);
    },
    fetchAnswers(context, answer) {
      context.commit("SET_ANSWER", answer);
    }
  },
  getters: {
    $allFaq(state) {
      return state.faq;
    },
    $allQuestions(state) {
      return state.questions;
    },
    $answer(state) {
      return state.answer;
    },
    $answerTitle(state) {
      return state.answer.title;
    },
    $step(state) {
      return state.step;
    },
    $category(state) {
      return state.category;
    }
  }
});
