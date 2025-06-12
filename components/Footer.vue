<template>
  <footer class="mt-auto pt-8 border-t border-white/10">
    <div
      class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-2 md:space-y-0"
    >
      <div class="text-xs text-gray-500">
        {{ text }}
      </div>

      <nav v-if="showNavigation" aria-label="Footer navigation">
        <div class="text-xs flex flex-wrap items-center gap-1">
          <template v-for="(link, index) in navigationLinks" :key="link.to">
            <BaseLink
              :to="link.to"
              class="text-gray-500 hover:text-white transition-colors duration-200"
              :aria-label="`Go to ${link.label} page`"
            >
              {{ link.label }}
            </BaseLink>

            <span
              v-if="index < navigationLinks.length - 1"
              class="text-gray-500 mx-2"
              aria-hidden="true"
            >
              /
            </span>
          </template>
        </div>
      </nav>

      <div v-else class="text-xs">
        <BaseLink
          to="/"
          class="text-gray-500 hover:text-white transition-colors duration-200"
          aria-label="Go back to homepage"
        >
          cd ..
        </BaseLink>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
interface NavigationLink {
  to: string;
  label: string;
}

interface Props {
  text?: string;
  showNavigation?: boolean;
}

const { showNavigation = false } = defineProps<Props>();

const navigationLinks: NavigationLink[] = [
  { to: "/uses", label: "uses" },
  { to: "/projects", label: "projects" },
  { to: "/privacy", label: "privacy" },
  { to: "/domains", label: "domains" },
];
</script>
