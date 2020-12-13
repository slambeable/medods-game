<template>
  <div id="app">
    <h1 class='game-title'>Simon Says</h1>
    <game-location @clickSquaredHandler='gameStep'
                   :isActive='isActive'
                   :squaredColors='squaredColors'
                   :isDisabled='isDisabled.gameLocation'/>
    <game-option @clickButtonHandler='dischargeGame'
                 :roundsCount='roundsCount'
                 :looseGameDisplay='looseGameDisplay'
                 :isDisabled='isDisabled.startButton'
                 :gameLogic='gameLogic'/>
    <game-difficulty @checkDifficult='dischargeGame'
                     :isDisabled='isDisabled.gameDifficult'
                     :delay='delay'/>
  </div>
</template>

<script>
import audio1 from './assets/sounds/1.mp3';
import audio2 from './assets/sounds/2.mp3';
import audio3 from './assets/sounds/3.mp3';
import audio4 from './assets/sounds/4.mp3';
import utils from './mixins/utils';
import gameLocation from './components/gameLocation.vue';
import gameOption from './components/gameOption.vue';
import gameDifficulty from './components/gameDifficulty.vue';

export default {
  name: 'App',
  components: { gameDifficulty, gameOption, gameLocation },
  mixins: [utils],
  data() {
    return {
      roundsCount: 0,
      numberOfSquares: 4,
      looseGameDisplay: false,
      predeterminedSequence: [],
      userSequence: [],
      difficult: 'easy',
      squaredColors: ['blue', 'red', 'yellow', 'green'],
      delay: {
        easy: 1500,
        normal: 1000,
        hard: 400,
      },
      timeBetweenRounds: 700,
      timeOfActiveSquared: 200,
      sounds: [
        new Audio(audio1),
        new Audio(audio2),
        new Audio(audio3),
        new Audio(audio4),
      ],
      isActive: {
        blue: false,
        red: false,
        yellow: false,
        green: false,
      },
      isDisabled: {
        gameLocation: true,
        startButton: false,
        gameDifficult: false,
      },
    };
  },
  methods: {
    async dischargeGame(difficult = '') {
      this.predeterminedSequence = [];
      this.userSequence = [];
      this.roundsCount = 1;
      this.looseGameDisplay = false;

      if (difficult.length !== 0) {
        this.isDisabled.gameLocation = true;
        this.difficult = difficult;
      }
    },
    async gameStep(indexOfSquared) {
      this.userSequence.push(indexOfSquared);
      const lastSimbol = this.userSequence.length - 1;

      this.sounds[indexOfSquared].load();
      this.sounds[indexOfSquared].play();

      if (this.userSequence[lastSimbol] !== this.predeterminedSequence[lastSimbol]) {
        this.looseGame();
      } else if (this.userSequence.length === this.predeterminedSequence.length) {
        this.roundsCount += 1;
        await this.gameLogic();
      }
    },
    randomSquare() {
      return Math.floor(Math.random() * this.numberOfSquares);
    },
    looseGame() {
      this.looseGameDisplay = true;
      this.predeterminedSequence = [];
      this.userSequence = [];
      this.isDisabled.gameLocation = true;
    },
    async gameLogic() {
      this.userSequence = [];
      this.isDisabled.gameLocation = true;
      this.isDisabled.startButton = true;
      this.isDisabled.gameDifficult = true;
      this.predeterminedSequence.push(this.randomSquare());

      const runGame = async (count = 0) => {
        const squared = this.predeterminedSequence[count];
        const currentColor = this.squaredColors[squared];

        await this.timeout(this.timeBetweenRounds);
        this.isActive[currentColor] = true;

        await this.timeout(this.timeOfActiveSquared);
        this.sounds[squared].load();
        this.sounds[squared].play();

        this.isActive[currentColor] = false;
        await this.timeout(this.delay[this.difficult]);
        if (this.predeterminedSequence.length - 1 !== count) {
          await runGame(count + 1);
        } else {
          this.isDisabled.gameLocation = false;
          this.isDisabled.startButton = false;
          this.isDisabled.gameDifficult = false;
        }
      };

      await runGame();
    },
  },
};
</script>

<style lang="sass">
@import './style/mixins'

#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin-top: 60px
</style>
