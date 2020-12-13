<template>
  <div :class='["game-option",  isDisabled ? "disabled" : ""]'>
    <h2 class='game-option__title'>Round: {{ roundsCount }}</h2>
    <p v-if='looseGameDisplay'
       class='game-option__loose'>You lose after: {{ roundsCount }} rounds!</p>
    <button @click='clickButtonHandler'
            class='game-option__start_button'>
            Start
    </button>
  </div>
</template>

<script>
export default {
  name: 'gameOption',
  props: {
    roundsCount: Number,
    gameLogic: Function,
    looseGameDisplay: Boolean,
    isDisabled: Boolean,
  },
  methods: {
    async clickButtonHandler() {
      this.$emit('clickButtonHandler');

      await this.gameLogic();
    },
  },
};
</script>

<style scoped lang="sass">
@import '../style/mixins'

.game-option
  & > &__start_button
    background-color: #6DABE8
    border: none
    border-radius: 15px
    outline: none
    color: white
    padding: 10px 32px
    text-align: center
    text-decoration: none
    font-size: 20px
    font-weight: bold
    user-select: none

    @media (hover: hover) and (pointer: fine)
      &:hover
        background: #78BCFF

@include disabled
</style>
