<script setup lang="ts">
const age = Math.floor(
  (Date.now() - new Date("2006-11-28").getTime()) /
    (1000 * 60 * 60 * 24 * 365.25)
);

interface SocialItem {
  name: string;
  url: string;
  username?: string;
}

const socials: SocialItem[] = [
  {
    name: "GitHub",
    url: "https://github.com/st6rdustx",
  },
  {
    name: "Discord",
    url: "https://discord.com/users/293020630608248832",
    username: "st6rdustx",
  },
  {
    name: "Email",
    url: "mailto:hi@diogo.wtf",
  },
];

const getDescriptionId = (item: SocialItem) =>
  `desc-${item.name.toLowerCase().replace(/\s+/g, "-")}`;

const getDisplayText = (item: SocialItem) => {
  if (item.username) {
    return `@${item.username}`;
  }

  if (item.url.includes("mailto:")) {
    return item.url.split(":")[1];
  }

  return `@${item.url.split("/").pop()}`;
};
</script>

<template>
  <Header title="star" size="large">
    <template #subtitle>
      <div class="text-gray-400 text-sm md:text-base space-y-1">
        <div>portugal</div>
        <div>{{ age }}yo</div>
        <div>silly wannabe programmer</div>
      </div>
    </template>
  </Header>

  <section class="mb-12 space-y-4 text-sm md:text-base leading-relaxed">
    <p>
      i build random software for problems i didn't know existed. check my
      <BaseLink
        to="/projects"
        class="underline hover:text-white transition-colors"
        >projects page</BaseLink
      >
      for the weird shit i've made.
    </p>

    <p>
      been programming since 9 (questionable parenting imo). dropped out of
      university because my major was ass and my mental health was worse, but
      going back with something that won't make me cry myself to sleep.
    </p>

    <p>
      had this whole phase where i thought typescript was overrated garbage and
      javascript was god tier. now i use it for literally everything unless i
      want to be fancy and write some go.
    </p>

    <p>
      obsessed with everything apple. picked up ios dev at 17 and turns out i
      love it.
    </p>

    <p>
      outside of programming: listening to music or getting absolutely destroyed
      in some game. if you're curious about what hardware and software keeps me
      functional, check out my
      <BaseLink to="/uses" class="underline hover:text-white transition-colors">
        setup</BaseLink
      >.
    </p>

    <p>
      i own a bunch of domains. check out my
      <BaseLink
        to="/domains"
        class="underline hover:text-white transition-colors"
      >
        domains list</BaseLink
      >
      if you're curious about that.
    </p>

    <p>
      always down to chat about tech, music, games, existential crises,
      whatever. i don't bite :3
    </p>
  </section>

  <section class="mb-16" aria-labelledby="connect">
    <div
      id="connect"
      class="text-xs text-gray-400 mb-6 uppercase tracking-wider"
    >
      connect
    </div>

    <div class="space-y-2">
      <BaseLink
        v-for="social in socials"
        :key="social.name"
        :to="social.url"
        variant="social"
        :aria-describedby="getDescriptionId(social)"
      >
        <div class="flex items-center space-x-4">
          <span class="text-base font-medium">{{ social.name }}</span>
          <span
            :id="getDescriptionId(social)"
            class="text-sm text-gray-400 font-mono"
          >
            {{ getDisplayText(social) }}
          </span>
        </div>
        <div
          class="text-gray-600 group-hover:text-white transition-colors duration-200"
          aria-hidden="true"
        >
          →
        </div>
      </BaseLink>
    </div>
  </section>

  <Footer text="built with 💜 and astro" show-navigation />
</template>
