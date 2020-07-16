<template>
  <div id="nav">
    <img alt="Vue logo" src="../assets/vue-logo-circle-s.png" />
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Nav extends Vue {
  @Prop() private msg!: string;
}
</script>
<style scoped lang="scss">
#nav {
  display: flex;
  align-items: center;
  text-align: left;
  padding: 1rem;
  color: #42b983;
  background-color: #3d536a;
}
#nav img {
  margin-right: 1rem;
}
#nav a {
  margin-right: 1.5rem;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
}
</style>
