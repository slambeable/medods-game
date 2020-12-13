<template>
  <div :class='["game-difficulty",  isDisabled ? "disabled" : ""]'>
    <h2 class='game-difficulty__title'>Game Difficulty:</h2>
    <div class='game-difficulty__wrapper'>
      <label v-for='(value, key) in delay' :key='key'>
        <input name='difficult'
              @change='checkDifficult'
              :class='`game-difficulty__${key}`'
              type='radio'
              :value='key'
              :checked='key === "easy"'>
              {{ capitalizeWord(key) }}
      </label>
    </div>
  </div>
</template>

<script>
import utils from '../mixins/utils';

export default {
  name: 'gameDifficulty',
  mixins: [utils],
  props: {
    delay: Object,
    isDisabled: Boolean,
  },
  methods: {
    checkDifficult({ target }) {
      const { value } = target.attributes.value;
      this.$emit('checkDifficult', value);
    },
  },
};
</script>

<style scoped lang="sass">
@import '../style/mixins'

.game-difficulty
  user-select: none

  &__wrapper
    display: flex
    flex-wrap: wrap
    margin: auto
    width: 100px

@include disabled
</style>
