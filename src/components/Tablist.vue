<template>
  <ul class="tab--panel">
    <li v-for="(label, index) in labels" :key="index">
      <button
        :class="['tab--list', { active: activeTab === index }]"
        v-on:click="setActiveTab(index)"
      >
        {{ label }}
      </button>
    </li>
  </ul>

  <div class="tab--content">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Tablist',
  emits: ['set-tab-index'],
  props: {
    labels: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      activeTab: 0,
    };
  },
  methods: {
    setActiveTab: function (index) {
      this.activeTab = index;
      this.$emit('set-tab-index', index);
    },
  },
};
</script>

<style scoped>
.tab--panel {
  display: flex;
  list-style: none;
  padding-left: 0;
}

.tab--list {
  font: inherit;
  font-size: var(--font-size-s);
  color: inherit;
  background: none;
  margin-right: var(--sp-16);
  cursor: pointer;
  border-radius: var(--sp-16);
  border: 1px solid var(--color-grey-400);
  padding: var(--sp-4) var(--sp-8);
}

.tab--list:hover {
  background: var(--color-grey-100);
  transition: var(--transition-fast);
}

.tab--content {
  border-top: 1px solid var(--color-grey-300);
}

.active {
  background: var(--color-grey-100);
  font-weight: var(--font-weight-semi);
}
</style>
