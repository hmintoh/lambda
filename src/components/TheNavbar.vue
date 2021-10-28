<template>
  <div class="navbar">
    <router-link title="Lambda Acoustics" to="/">
      <img
        :src="logo"
        alt="lambda-logo"
        title="Click to go back to Home page"
        class="navbar--logo"
      />
    </router-link>

    <nav>
      <ul class="navbar--nav">
        <li v-for="(route, index) in routes" :key="index">
          <router-link
            :title="route.label"
            :to="route.url"
            :class="['lambda-link', { active: activeRoute === route.url }]"
          >
            {{ route.label }}
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import logo from '../assets/lambda_logo.svg';

export default {
  name: 'TheNavbar',
  data() {
    return {
      activeRoute: window.location.pathname,
      logo: logo,
      routes: [
        { url: '/services', label: 'Services' },
        { url: '/portfolio', label: 'Portfolio' },
      ],
    };
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
}

.navbar--logo {
  width: 50px;
}

.navbar--nav {
  list-style: none;
  display: flex;
}

.navbar--nav > li {
  margin-left: var(--sp-16);
}

.active {
  font-weight: var(--font-weight-semi);
}
</style>
