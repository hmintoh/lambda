<template>
  <a class="card" :href="url" target="_blank" rel="noopener">
    <slot />
  </a>
</template>

<script>
export default {
  name: 'LinkCard',
  props: {
    url: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.card {
  background: var(--color-grey-100);
  padding: var(--sp-16);
  text-align: center;
  align-items: center;
  border-radius: var(--sp-8);
  width: 240px;
  cursor: pointer;
  box-sizing: border-box;
  display: block;
}

.card:hover {
  opacity: 0.9;
  background: var(--color-grey-200);
  transition: var(--transition-default);
  -webkit-box-shadow: 4px 4px 11px 0px var(--color-grey-200);
  -moz-box-shadow: 4px 4px 11px 0px var(--color-grey-200);
  box-shadow: 4px 4px 11px 0px var(--color-grey-200);
}
</style>
