<template>
  <Header title="domain list" show-back-link>
    <template #subtitle>
      <div class="text-gray-400 text-sm md:text-base space-y-1">
        <div>
          raw file
          <a
            href="/domains.txt"
            class="underline hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            >here</a
          >
        </div>
      </div>
    </template>
  </Header>

  <section class="space-y-6 text-sm md:text-base leading-loose mb-16">
    <div>
      <div
        class="bg-zinc-950 border-2 border-zinc-800 rounded-lg p-4 font-mono text-sm overflow-x-auto shadow-lg"
      >
        <div v-for="(line, index) in domainsList" :key="index" class="py-1">
          <div v-if="line.startsWith('#')" class="text-zinc-400 italic">
            {{ line }}
          </div>
          <div v-else-if="line.trim() === ''" class="h-2"></div>
          <div v-else class="text-emerald-400 font-medium">{{ line }}</div>
        </div>
      </div>
    </div>
  </section>

  <Footer text="inspired by erisa.uk/domains" />
</template>

<script setup lang="ts">
const {
  data: domainsContent,
  pending,
  error,
  refresh,
} = await useFetch("/domains.txt", {
  headers: {
    "Cache-Control": "no-cache",
  },
  key: "domains-content-" + Date.now(),
  responseType: "text",
});

watch(error, (newError) => {
  if (newError) {
    console.error("Error fetching domains.txt, retrying...", newError);
    refresh();
  }
});

const domainsList = computed(() => {
  if (!domainsContent.value) return [];
  const content =
    typeof domainsContent.value === "string"
      ? domainsContent.value
      : String(domainsContent.value);
  return content.split("\n");
});
</script>
