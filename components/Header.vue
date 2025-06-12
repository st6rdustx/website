<template>
  <header class="mb-8">
    <nav v-if="showBackLink" class="mb-8" aria-label="Breadcrumb navigation">
      <BaseLink
        to="/"
        class="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
        aria-label="Go back to homepage"
      >
        ← back
      </BaseLink>
    </nav>

    <h1 class="font-bold mb-4 tracking-tight" :class="titleClass">
      {{ title }}
    </h1>

    <div v-if="$slots.subtitle" class="text-gray-400 text-sm md:text-base">
      <slot name="subtitle" />
    </div>
  </header>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  showBackLink?: boolean;
  size?: "small" | "medium" | "large";
}

const { title, showBackLink = false, size = "medium" } = defineProps<Props>();

const titleClass = computed(() => {
  const sizes = {
    small: "text-3xl md:text-5xl",
    medium: "text-4xl md:text-6xl",
    large: "text-4xl md:text-8xl",
  };
  return sizes[size];
});
</script>
