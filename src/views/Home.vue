<template>
  <v-container>
    <v-row>
      <v-col cols="12"><h3>Piškvorkys od Krysa na špejlis a Mr Petera</h3></v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-btn class="mx-2 primary" :disabled="singleDisabled" depressed tile @click="connect">Připoj se</v-btn>
        <v-btn class="mx-2 primary" :disabled="singleDisabled" depressed tile @click="toggleSingle">Hraj!</v-btn>
        <v-btn class="mx-2 primary" :disabled="botDisabled" depressed tile @click="toggleBot">Vypusť robota</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <draw-panel />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DrawPanel from '../components/DrawPanel'
import { mapActions, mapState } from 'vuex'
import { USER } from '../store/modules/user/types'
import { GAME } from '../store/modules/game/types'

export default {
  name: 'Home',
  components: { DrawPanel },
  data() {
    return {
      singleDisabled: false,
      botDisabled: false,
    }
  },
  computed: {
    ...mapState(USER.NAMESPACE, ['user']),
    ...mapState(GAME.NAMESPACE, ['game', 'gameMeta']),
  },
  methods: {
    ...mapActions(GAME.NAMESPACE, [
      GAME.ACTIONS.CONNECT_REQUEST,
      GAME.ACTIONS.PLAY_REQUEST,
      GAME.ACTIONS.CHECK_STATUS_REQUEST,
      GAME.ACTIONS.CHECK_LAST_STATUS_REQUEST,
    ]),
    toggleSingle() {
      this.botDisabled = !this.botDisabled
      this.singleDisabled = !this.botDisabled
      //TODO single logic
    },
    toggleBot() {
      this.singleDisabled = !this.singleDisabled
      this.botDisabled = !this.singleDisabled
      //TODO bot logic
    },
    connect() {
      this[GAME.ACTIONS.CONNECT_REQUEST]({ userToken: this.user.userToken })
    },
  },
}
</script>
