<template>
  <PageLayout>
    <transition
      appear
      name="slide-fade"
      @after-enter="afterEnter"
      @after-leave="afterLeave"
    >
      <img v-if="showLogo" :src="logo" />
    </transition>

    <transition appear name="fade">
      <div v-if="showContent">
        <h1>// PURSUING PRESENCE //</h1>
        <p>
          Musical presence defines why an individual prefers the acoustics of a
          room to another or why one prefers a certain audio mix to another.
        </p>
        <p>
          Our team at Lambda Acoustics pursues the highest goal of achieving
          Musical Presence in all aspects of music, be it in acoustic design or
          in live mixing.
        </p>
        <br />
        <router-link
          title="Lambda Acoustics"
          to="/services"
          class="lambda-link"
        >
          Browse our services
        </router-link>
      </div>
    </transition>
  </PageLayout>
</template>

<script>
import PageLayout from '../components/PageLayout.vue';
import logo from '../assets/lambda_logo_with_name.jpg';
import { ref } from 'vue';

export default {
  name: 'ViewHome',
  components: {
    PageLayout,
  },
  data() {
    return {
      logo: logo,
    };
  },
  setup() {
    const showLogo = ref(true);
    const showContent = ref(false);

    const afterEnter = () => {
      setTimeout(() => (showLogo.value = false), 1000);
    };
    const afterLeave = () => {
      showContent.value = true;
    };

    return { afterEnter, afterLeave, showLogo, showContent };
  },
};
</script>

<style scoped>
img {
  width: 100%;
  max-width: 600px;
}

@media (max-width: 768px) {
  h1 {
    font-size: var(--font-size-xl);
    font-weight: var(--font-weight-bold);
  }
}
</style>
