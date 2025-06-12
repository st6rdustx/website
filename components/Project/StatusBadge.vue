<template>
  <span
    class="text-xs"
    :class="statusColors[status]"
    :aria-label="statusLabels[status]"
  >
    {{ statusSymbols[status] }}
  </span>
</template>

<script setup lang="ts">
import type { ProjectStatus } from "./ProjectGrid.vue";

interface Props {
  status: ProjectStatus;
}

const { status } = defineProps<Props>();

const statusColors: Record<ProjectStatus, string> = {
  active: "text-green-400",
  wip: "text-orange-400",
  maintained: "text-blue-400",
  learning: "text-yellow-400",
  archived: "text-gray-500",
};

const statusSymbols: Record<ProjectStatus, string> = {
  active: "●",
  wip: "●",
  maintained: "●",
  learning: "●",
  archived: "○",
};

const statusLabels: Record<ProjectStatus, string> = {
  active: "actively developed",
  wip: "work in progress",
  maintained: "maintained",
  learning: "learning project",
  archived: "archived",
};
</script>
