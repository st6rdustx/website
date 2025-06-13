<script setup lang="ts">
interface UsesItem {
  name: string;
  description?: string;
  url?: string;
}

interface UsesSubsection {
  category?: string;
  items: UsesItem[];
}

interface UsesSection {
  category?: string;
  items?: UsesItem[];
  subsections?: UsesSubsection[];
}

const hardware: UsesSection[] = [
  {
    items: [
      {
        name: "MacBook Pro 16'' M3 Pro 18GB",
      },
      {
        name: "MacBook Air 13'' M1 8GB",
        description: "my first ever mac, used for university",
      },
      { name: "Apple Magic Mouse" },
      { name: "Logitech G PRO X SUPERLIGHT" },
      { name: "AirPods Pro (2nd gen)" },
      { name: "Razer BlackShark V2 X" },
      { name: "iPhone 15 Pro" },
      { name: "AOC 32'' 240Hz (32G2WG8)", description: "secondary monitor" },
    ],
  },
];

const software: UsesSection[] = [
  {
    category: "software",
    subsections: [
      {
        category: "editor",
        items: [
          {
            name: "Visual Studio Code",
            description: "for bigger projects",
            url: "https://code.visualstudio.com/",
          },
          {
            name: "Neovim",
            description:
              "for everything else (i'm proactively learning and trying to switch)",
            url: "https://neovim.io",
          },
          { name: "Xcode", description: "for iOS & macOS development" },
          {
            name: "Rosé Pine",
            description: "my favorite theme",
            url: "https://rosepinetheme.com",
          },
        ],
      },
      {
        category: "browser",
        items: [
          { name: "Safari" },
          {
            name: "Firefox Developer Edition",
            description: "for testing and development",
            url: "https://www.mozilla.org/en-US/firefox/developer/",
          },
        ],
      },
      {
        category: "browser extensions",
        items: [
          {
            name: "Wipr 2",
            description: "the best ad and tracker blocker for safari",
            url: "https://kaylees.site/wipr2.html",
          },
          {
            name: "Refined GitHub",
            description: "enhanced github experience",
            url: "https://github.com/refined-github/refined-github",
          },
          {
            name: "SponsorBlock",
            description: "skip youtube sponsor segments",
            url: "https://github.com/ajayyy/SponsorBlock",
          },
          {
            name: "1Password",
            description: "password manager",
            url: "https://1password.com/",
          },
          {
            name: "Userscripts",
            description: "userscript manager for safari",
            url: "https://apps.apple.com/pt/app/userscripts/id1463298887?l=en-GB",
          },
        ],
      },
      {
        category: "apps",
        items: [
          {
            name: "Ghostty",
            description: "fast and modern terminal emulator",
            url: "https://ghostty.org",
          },
          {
            name: "Sketch",
            description: "design tool",
            url: "https://www.sketch.com",
          },
          {
            name: "AlDente",
            description: "battery management",
            url: "https://apphousekitchen.com/aldente-overview/",
          },
        ],
      },
      {
        category: "terminal",
        items: [
          { name: "zsh", description: "shell" },
          {
            name: "Bun",
            description: "javascript runtime and package manager",
            url: "https://bun.sh",
          },
          {
            name: "Homebrew",
            description: "package manager",
            url: "https://brew.sh",
          },
          {
            name: "Oh My Posh",
            description: "prompt theme engine",
            url: "https://ohmyposh.dev",
          },
          {
            name: "dotfiles",
            description: "my personal dotfiles repository",
            url: "https://github.com/st6rdustx/dotfiles",
          },
        ],
      },
    ],
  },
];

const getSectionId = (section: UsesSection) =>
  `section-${(section.category || "hardware")
    .toLowerCase()
    .replace(/\s+/g, "-")}`;

const getSubsectionId = (subsection: UsesSubsection) =>
  `subsection-${subsection.category!.toLowerCase().replace(/\s+/g, "-")}`;

const getItemDescId = (item: UsesItem) =>
  `desc-${item.name.toLowerCase().replace(/\s+/g, "-")}`;
</script>

<template>
  <Header title="uses" show-back-link
    ><template #subtitle
      >software and hardware that power my workflow</template
    ></Header
  >

  <section class="space-y-12 text-sm md:text-base">
    <div
      v-for="section in [...hardware, ...software]"
      :key="section.category || 'hardware'"
    >
      <h2
        class="text-xl md:text-2xl font-bold mb-8 text-white"
        :id="getSectionId(section)"
      >
        {{ section.category || "hardware" }}
      </h2>

      <div class="space-y-8">
        <div
          v-for="subsection in section.subsections || [section]"
          :key="subsection.category || 'items'"
          :aria-labelledby="
            subsection.category
              ? getSubsectionId(subsection)
              : getSectionId(section)
          "
        >
          <h3
            v-if="subsection.category"
            :id="getSubsectionId(subsection)"
            class="text-lg font-semibold mb-4 text-zinc-300"
          >
            {{ subsection.category }}
          </h3>

          <div class="space-y-3" role="list">
            <div
              v-for="item in subsection.items"
              :key="item.name"
              class="flex items-start justify-between py-2 border-b border-white/10"
              role="listitem"
            >
              <div class="flex-1">
                <BaseLink
                  v-if="item.url"
                  :to="item.url"
                  variant="button"
                  class="font-medium hover:text-zinc-300"
                  :aria-describedby="
                    item.description ? getItemDescId(item) : undefined
                  "
                >
                  {{ item.name }}
                </BaseLink>
                <span
                  v-else
                  class="font-medium"
                  :aria-describedby="
                    item.description ? getItemDescId(item) : undefined
                  "
                >
                  {{ item.name }}
                </span>

                <div
                  v-if="item.description"
                  :id="getItemDescId(item)"
                  class="text-zinc-400 text-sm mt-1"
                >
                  {{ item.description }}
                </div>
              </div>

              <div
                v-if="item.url"
                class="text-zinc-600 ml-4"
                aria-hidden="true"
              >
                →
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <Footer text="last updated: june 2025" />
</template>
