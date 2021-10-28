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
  width: 240px;
  height: 100px;
  background: linear-gradient(
    var(--color-grey-100),
    var(--color-grey-200),
    var(--color-grey-200)
  );
  padding: var(--sp-16);
  border-radius: var(--sp-8);
  cursor: pointer;
  box-sizing: border-box;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
}

.card:hover {
  background: linear-gradient(var(--color-grey-200), var(--color-grey-200));
  transition: var(--transition-default);
  -webkit-box-shadow: 4px 4px 11px 0px var(--color-grey-200);
  -moz-box-shadow: 4px 4px 11px 0px var(--color-grey-200);
  box-shadow: 4px 4px 11px 0px var(--color-grey-200);
}

::v-slotted(*) {
  display: block;
  width: 100%;
}
</style>
