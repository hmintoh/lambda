<template>
  <PageLayout withNavbar>
    <h1>Oops!</h1>
    <p class="subtitle">
      Looks like the page you are looking for is not available. Please return to
      the
      <router-link title="Link to Home page" to="/" class="lambda-link">
        Home</router-link
      >
      page.
    </p>
  </PageLayout>
</template>

<script>
import logo from '../assets/lambda_logo.svg';
import PageLayout from '../components/PageLayout.vue';

export default {
  name: 'ViewError',
  components: {
    PageLayout,
  },
  data() {
    return {
      logo: logo,
    };
  },
};
</script>

<style scoped>
a {
  font-size: inherit;
}
</style>
