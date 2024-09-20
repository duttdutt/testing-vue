<script setup lang="ts">
const sum = () => {}
sum()
</script>

<template>
  <div>
    <header class="header">
      <a class="header-left" href="/">
        <img class="header-left__logo" src="./assets/Vue.svg" alt="Vue Logo" />
        <p class="header-left__title">Vue Learning</p>
      </a>
      <div class="header-right">
        <a class="header-right__link" href="https://github.com/duttdutt/testing-vue">
          <img class="header-right__logo" src="./assets/GitHub.svg" alt="GitHub Logo" />
        </a>
      </div>
    </header>
  </div>

  <main>
    <aside>
      <router-link class="header__link" to="/home">Home</router-link>
      <router-link class="header__link" to="/about">About</router-link>
    </aside>
    <router-view />
  </main>
</template>

<style scoped>
</style>
