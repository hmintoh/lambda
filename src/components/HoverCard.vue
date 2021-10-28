<template>
  <div
    class="hover-card"
    @mouseenter="revealDetailText = true"
    @mouseleave="revealDetailText = false"
  >
    <div :style="applyBackgroundStyles()" />

    <transition name="fade">
      <div v-if="revealDetailText" class="hover-card--detail-wrapper">
        <div class="hover-card--detail-text"><slot /></div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'HoverCard',
  props: {
    imgSrc: {
      type: String,
    },
    imgAlt: {
      type: String,
    },
  },
  data() {
    return {
      revealDetailText: false,
    };
  },
  methods: {
    applyBackgroundStyles() {
      return {
        height: '440px',
        backgroundImage: `url(${this.imgSrc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      };
    },
  },
};
</script>

<style>
.hover-card {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
}

.hover-card--detail-wrapper {
  position: absolute;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  overflow: hidden;
  background: linear-gradient(
    transparent,
    var(--color-grey-400),
    var(--color-grey-500)
  );
  color: var(--color-white);
  opacity: 0.9;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}

.hover-card--detail-text {
  width: 80%;
  margin: auto;
}
</style>
