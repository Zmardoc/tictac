<template>
  <v-app id="app">
    <!--<div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view />
  </v-app>
</template>

<style>
@font-face {
  font-family: GrixelKyrou7Wide;
  src: local('GrixelKyrou7Wide'), url(./fonts/GrixelKyrou7Wide.ttf) format('truetype');
}
#app {
  font-family: 'GrixelKyrou7Wide', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
