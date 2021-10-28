<template>
  <div :id="id" class="accordion">
    <div class="accordion--title" @click="expandAccordion = !expandAccordion">
      {{ title }}
    </div>

    <transition
      name="slide"
      @before-enter="beforeEnter"
      @enter="enter"
      @before-leave="beforeLeave"
      @leave="leave"
    >
      <div v-show="expandAccordion" class="accordion--body">
        <slot />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Accordion',
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      expandAccordion: false,
    };
  },
  methods: {
    beforeEnter: function (el) {
      el.style.height = '0';
      el.style.opacity = '0';
    },
    enter: function (el) {
      el.style.height = el.scrollHeight + 'px';
      el.style.opacity = '1';
    },
    beforeLeave: function (el) {
      el.style.opacity = '1';
    },
    leave: function (el) {
      el.style.height = '0';
      el.style.opacity = '0';
    },
  },
};
</script>

<style scoped>
.accordion {
  box-sizing: border-box;
  cursor: default;
  -webkit-box-shadow: 4px 4px 11px 0px var(--color-grey-100);
  -moz-box-shadow: 4px 4px 11px 0px var(--color-grey-100);
  box-shadow: 4px 4px 11px 0px var(--color-grey-100);
}

.accordion:hover {
  -webkit-box-shadow: 4px 4px 11px 0px var(--color-grey-200);
  -moz-box-shadow: 4px 4px 11px 0px var(--color-grey-200);
  box-shadow: 4px 4px 11px 0px var(--color-grey-200);
  transition: var(--transition-default);
}

.accordion--title {
  cursor: pointer;
  padding: var(--sp-16);
  background: var(--color-grey-100);
  text-transform: uppercase;
  border-top-left-radius: var(--sp-4);
  border-top-right-radius: var(--sp-4);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semi);
}

.accordion--title:hover {
  background: var(--color-grey-200);
  transition: var(--transition-default);
}

.accordion--body {
  padding: 0 var(--sp-16);
  overflow: hidden;
}

.slide-enter-active,
.slide-leave-active {
  transition: var(--transition-default);
}
</style>
