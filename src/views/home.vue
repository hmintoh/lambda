<template>
  <div class="container">
    <img :src="logo" alt="lambda-logo" title="Click to go to Services page" />

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

    <router-link title="Lambda Acoustics" to="/services">
      See our services</router-link
    >
  </div>
</template>

<script>
import logo from '../assets/lambda_logo_with_name.jpg';

export default {
  name: 'ViewHome',
  data() {
    return {
      logo: logo,
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

img {
  width: 100%;
  max-width: 400px;
}
</style>
