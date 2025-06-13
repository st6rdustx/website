<template>
  <NuxtLink
    :to="to"
    :target="isExternal ? '_blank' : undefined"
    :rel="isExternal ? 'noopener noreferrer' : undefined"
    :external="isExternal"
    :class="linkClasses"
    v-bind="$attrs"
  >
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
interface Props {
  to: string;
  variant?: "default" | "button" | "card" | "social";
  class?: string;
  underline?: boolean;
}

const {
  to,
  variant = "default",
  class: customClass = "",
  underline = false,
} = defineProps<Props>();

const isExternal = computed(
  () => to.startsWith("http") || to.startsWith("mailto:")
);

const linkClasses = computed(() => {
  const baseClasses =
    "transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-true-black";

  const variants = {
    default: "hover:text-white",
    button: "hover:text-zinc-300",
    card: "group border border-transparent hover:border-white/20 hover:bg-white/5 transition-all duration-200",
    social:
      "group flex items-center justify-between py-3 px-4 border border-transparent hover:border-white/20 hover:bg-white/5 transition-all duration-200",
  };

  const classes = [baseClasses, variants[variant]];

  if (underline) {
    classes.push("underline");
  }

  if (customClass) {
    classes.push(customClass);
  }

  return classes.filter(Boolean).join(" ");
});

// Expose whether link is external for parent components
defineExpose({
  isExternal,
});
</script>
