export default {
  methods: {
    capitalizeWord(word) {
      return word[0].toUpperCase() + word.slice(1);
    },
    timeout(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },
  },
};
