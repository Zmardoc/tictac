<template>
  <v-container>
    <v-row>
      <v-col cols="12"><h3>Piškvorkys od Krysa na špejlis a Mr Petera</h3></v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
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

export default {
  name: 'Home',
  components: { DrawPanel },
  data() {
    return {
      singleDisabled: false,
      botDisabled: false,
    }
  },
  methods: {
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
  },
}
</script>
