<template>
  <div class="main-content"><router-view></router-view></div>
  <TheFooter />
</template>

<script>
import TheFooter from './components/TheFooter.vue';

export default {
  name: 'App',
  components: {
    TheFooter,
  },
};
</script>

<style>
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  height: inherit;
}

.main-content {
  flex: 1;
  margin: auto;
  height: inherit;
  padding: 0 var(--sp-16);
}

@media (min-width: 768px) {
  .main-content {
    padding-left: 0;
    padding-right: 0;
    max-width: var(--breakpoint-max-container);
  }
}
</style>
