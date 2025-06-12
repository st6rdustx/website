<script setup lang="ts">
import type { ProjectSection } from "~/components/ProjectGrid.vue";

const projects: ProjectSection[] = [
  {
    category: "current focus",
    items: [
      {
        name: "[tbd]",
        description: "👀",
        tech: ["Swift", "SwiftUI"],
        status: "wip",
      },
    ],
  },
  {
    category: "utilities",
    items: [
      {
        name: "Glitchy",
        description: "a self-hostable, open source AI-powered code reviewer",
        url: "https://github.com/st6rdustx/glitchy",
        tech: ["Go", "Docker", "Claude"],
        status: "maintained",
      },
      {
        name: "TwitchKit",
        description: "swift library for interacting with the Twitch IRC",
        url: "https://github.com/st6rdustx/TwitchKit",
        tech: ["Swift"],
        status: "maintained",
      },
    ],
  },
  {
    category: "experiments",
    items: [
      {
        name: "latte",
        description: "a minimal programming language born from boredom",
        url: "https://github.com/st6rdustx/latte",
        tech: ["C++", "LLVM"],
        status: "learning",
      },
      {
        name: "apple oauth swift",
        description:
          "golang backend and swiftui implementation of sign in with apple",
        url: "https://github.com/st6rdustx/apple_oauth_x",
        tech: ["Go", "Swift", "SwiftUI"],
        status: "archived",
      },
    ],
  },
  {
    category: "archive",
    items: [
      {
        name: "SteamDB Unofficial Safari Extension",
        description:
          "an unofficial port of the SteamDB extension for Safari since the original dev refused to make it",
        url: "https://github.com/st6rdustx/SteamDB-Unofficial-Safari-Port",
        tech: ["JavaScript", "Swift"],
        status: "archived",
      },
      {
        name: "Shiber",
        description:
          "open source discord moderation bot with a web dashboard and a lot of features",
        url: "https://github.com/comfykayyy/Shiber",
        tech: ["JavaScript", "EJS", "Lavalink", "Discord.js", "MongoDB"],
        status: "archived",
      },
      {
        name: "Vary",
        description:
          "my first ever programming project, a discord bot that had music, moderation, and fun commands",
        tech: ["JavaScript", "Lavalink", "Discord.js", "MongoDB"],
        status: "archived",
      },
    ],
  },
];
</script>

<template>
  <Header title="projects" show-back-link
    ><template #subtitle
      >things I've built, maintain, or experiment with</template
    ></Header
  >

  <ProjectGrid :sections="projects" />

  <div class="pt-8 border-t border-white/10 mb-16">
    <div class="text-center">
      <BaseLink
        to="https://github.com/st6rdustx?tab=repositories"
        class="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200 text-sm"
      >
        <span>view all my repos on github</span>
        <span aria-hidden="true">→</span>
      </BaseLink>
    </div>
  </div>

  <ProjectLegend />

  <Footer text="updated june 2025" />
</template>
