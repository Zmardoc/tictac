<template>
  <canvas ref="canvas" :width="WIDTH" :height="HEIGHT" class="gridCanvas" @click="placeMark"></canvas>
</template>

<script>
const SQUARE_SIZE = 28
const WIDTH = 800
const HEIGHT = 800

export default {
  name: 'DrawPanel',
  props: {
    /*{
  "statusCode": 0,
  "playerCrossId": "string",
  "playerCircleId": "string",
  "actualPlayerId": "string",
  "winnerId": "string",
  "coordinates": [
    [
      {
        "playerId": "string",
        "x": 0,
        "y": 0
      }
    ]
  ]
}*/
    game: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      WIDTH,
      HEIGHT,
      player: true,
    }
  },
  mounted() {
    this.drawGrid()
  },
  watch: {
    game: {
      handler: () => {
        this.drawPositions()
      },
      deep: true,
    },
  },
  methods: {
    getPosition(event) {
      const ctx = this.$refs['canvas']
      const rect = ctx.getBoundingClientRect()
      const x = event.clientX - rect.left - 37
      const y = event.clientY - rect.top - 37
      return {
        x: x >= 0 ? Math.floor(x / SQUARE_SIZE) : 0,
        y: y >= 0 ? Math.floor(y / SQUARE_SIZE) : 0,
      }
    },
    placeMark(event) {
      const myPosition = this.getPosition(event)
      this.drawMark(myPosition, this.player ? '0' : 'X')
      this.player = !this.player
    },
    drawMark(position, mark) {
      const ctx = this.$refs['canvas'].getContext('2d')
      ctx.font = '16px GrixelKyrou7Wide'
      ctx.strokeStyle = 'black'
      ctx.strokeText(
        mark,
        SQUARE_SIZE / 2 + SQUARE_SIZE + position.x * SQUARE_SIZE,
        2 * SQUARE_SIZE + position.y * SQUARE_SIZE,
      )
    },
    drawPositions() {
      if (this.game) {
        const ctx = this.$refs['canvas'].getContext('2d')
        ctx.font = '16px GrixelKyrou7Wide'
        ctx.strokeStyle = 'black'
        //this.game.coordinates
      }
    },
    drawGrid() {
      const ctx = this.$refs['canvas'].getContext('2d')

      const nX = Math.floor(WIDTH / SQUARE_SIZE) - 2
      const nY = Math.floor(HEIGHT / SQUARE_SIZE) - 2
      const pX = WIDTH - nX * SQUARE_SIZE
      const pY = HEIGHT - nY * SQUARE_SIZE
      const pL = Math.ceil(pX / 2) - 0.5
      const pR = WIDTH - nX * SQUARE_SIZE - pL
      const pT = Math.ceil(pY / 2) - 0.5
      const pB = HEIGHT - nY * SQUARE_SIZE - pT

      ctx.strokeStyle = 'lightgrey'
      ctx.beginPath()
      for (var x = pL; x <= WIDTH - pR; x += SQUARE_SIZE) {
        ctx.moveTo(x, pT)
        ctx.lineTo(x, HEIGHT - pB)
      }
      for (var y = pT; y <= HEIGHT - pB; y += SQUARE_SIZE) {
        ctx.moveTo(pL, y)
        ctx.lineTo(WIDTH - pR, y)
      }
      ctx.stroke()
    },
  },
}
</script>

<style lang="sass" scoped>
.gridCanvas
  position: relative !important
  border: lightgrey 1px solid
  border-radius: 5px
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2)
</style>
