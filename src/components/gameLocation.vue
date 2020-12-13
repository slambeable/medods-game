<template>
  <div :class='["game-location", isDisabled ? "disabled" : ""]'>
    <div v-for='(color, index) in squaredColors' :key='index'
         :class='[`game-location__${color}`, isActive[color] ? "active" : ""]'
         @click='clickSquaredHandler'
         :value='color'>
    </div>
  </div>
</template>

<script>
export default {
  name: 'gameLocation',
  props: {
    squaredColors: Array,
    isDisabled: Boolean,
    isActive: Object,
  },
  methods: {
    async clickSquaredHandler({ target }) {
      const { value } = target.attributes.value;
      const indexOfSquared = this.squaredColors.indexOf(value);

      this.$emit('clickSquaredHandler', indexOfSquared);
    },
  },
};
</script>

<style scoped lang="sass">
@import '../style/mixins'

.game-location
  display: flex
  flex-wrap: wrap
  margin: auto
  width: 300px
  height: 300px
  margin-bottom: 30px
  user-select: none

  & > &__blue
    @include color-button('blue')

  & > &__red
    @include color-button('red')

  & > &__green
    @include color-button('green')

  & > &__yellow
   @include color-button('yellow')

@include disabled
</style>
