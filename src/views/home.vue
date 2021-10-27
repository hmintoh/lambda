<template>
  <div class="wrapper">
    <router-link title="Lambda Acoustics" to="/services">
      <img :src="logo" alt="lambda-logo" title="Click to go to Services page" />
    </router-link>

    <h1>// PURSUING PRESENCE //</h1>
    <p>
      Musical presence defines why an individual prefers the acoustics of a room
      to another or why one prefers a certian audio mix to another.
    </p>
    <p>
      Our team at Lambda Acoustics pursues the highest goal of achieving Musical
      Presence in all aspects of music, be it in acoustic design or in live
      mixing.
    </p>
  </div>
</template>

<script>
import logo from '../assets/lambda_logo.jpg';

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
.wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 var(--sp-16);
  justify-content: center;
}

img {
  width: 100px;
}
</style>
