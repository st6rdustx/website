<script lang="ts" setup>
useHead({
  title: 'projects',
  link: [
    {
      rel: 'canonical',
      href: 'https://diogo.wtf/projects'
    }
  ]
})

import type { ProjectSection } from '~/components/Project/Grid.vue'

const projects: ProjectSection[] = [
  {
    category: 'current focus',
    items: [
      {
        name: 'website',
        description: "this website you're currently on",
        url: 'https://github.com/st6rdustx/website',
        tech: ['Vue', 'Nuxt', 'Tailwind CSS'],
        status: 'active'
      }
    ]
  },
  {
    category: 'experiments',
    items: [
      {
        name: 'latte',
        description: 'tiny programming language born from boredom',
        url: 'https://github.com/st6rdustx/latte',
        tech: ['C++', 'LLVM'],
        status: 'archived'
      }
    ]
  }
]
</script>

<template>
  <Header show-back-link size="medium" title="projects">
    <template #subtitle
      >featured things i've built, maintain, or experiment with
    </template>
  </Header>

  <ProjectGrid :sections="projects" />

  <div class="mb-16 border-t border-white/10 pt-8">
    <div class="text-center">
      <BaseLink
        class="inline-flex items-center space-x-2 text-sm text-zinc-400 transition-colors duration-200 hover:text-white"
        to="https://github.com/st6rdustx?tab=repositories"
      >
        <span>view all my repos on GitHub</span>
        <span aria-hidden="true">→</span>
      </BaseLink>
    </div>
  </div>

  <ProjectLegend />

  <Footer />
</template>
