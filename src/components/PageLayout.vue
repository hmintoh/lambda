<template>
  <div class="main-content">
    <div v-if="withNavbar" class="container--default">
      <transition appear name="fade-delay">
        <TheNavbar />
      </transition>

      <br />

      <transition appear name="fade">
        <div><slot /></div>
      </transition>
    </div>

    <div v-else class="container--centered">
      <slot />
    </div>
  </div>

  <TheFooter />
</template>

<script>
import TheNavbar from './TheNavbar.vue';
import TheFooter from './TheFooter.vue';

export default {
  name: 'PageLayout',
  components: {
    TheNavbar,
    TheFooter,
  },
  props: {
    withNavbar: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.main-content {
  flex: 1;
  width: 100%;
  margin: auto;
}

.container--default {
  padding: var(--sp-40) var(--sp-16);
}

.container--centered {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
  padding: 0 var(--sp-16);
}

@media (min-width: 768px) {
  .main-content {
    max-width: var(--breakpoint-max-container);
  }
}
</style>
