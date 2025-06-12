<template>
  <a href="#main-content" class="skip-link" @click="focusMainContent">
    Skip to main content
  </a>
</template>

<script setup lang="ts">
const focusMainContent = () => {
  nextTick(() => {
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      mainContent.focus();
    }
  });
};
</script>
