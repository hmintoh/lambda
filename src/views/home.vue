<template>
  <PageLayout>
    <h1>// PURSUING PRESENCE //</h1>

    <p>
      Musical presence defines why an individual prefers the acoustics of a room
      to another or why one prefers a certain audio mix to another.
    </p>
    <p>
      Our team at Lambda Acoustics pursues the highest goal of achieving Musical
      Presence in all aspects of music, be it in acoustic design or in live
      mixing.
    </p>

    <br />

    <router-link title="Lambda Acoustics" to="/services">
      Browse our services
    </router-link>
  </PageLayout>
</template>

<script>
import PageLayout from '../components/PageLayout.vue';

export default {
  name: 'ViewHome',
  components: {
    PageLayout,
  },
};
</script>

<style scoped>
img {
  width: 100%;
  max-width: 400px;
}
</style>
