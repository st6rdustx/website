<template>
  <section class="space-y-12 text-sm md:text-base mb-16">
    <div v-for="section in sections" :key="section.category">
      <h2 class="text-lg md:text-xl font-semibold mb-6 text-gray-300">
        {{ section.category }}
      </h2>
      <div class="space-y-4">
        <div
          v-for="project in section.items"
          :key="project.name"
          class="group border border-transparent hover:border-white/20 hover:bg-white/5 transition-all duration-200 p-4"
          role="article"
          :aria-labelledby="getProjectId(project)"
        >
          <div class="flex items-start justify-between">
            <div class="flex-1">
              <div class="flex items-center space-x-3 mb-2">
                <BaseLink
                  v-if="project.url"
                  :to="project.url"
                  variant="button"
                  :id="getProjectId(project)"
                  class="font-medium text-white hover:text-gray-300"
                  :aria-describedby="getDescriptionId(project)"
                >
                  {{ project.name }}
                </BaseLink>
                <h3
                  v-else
                  :id="getProjectId(project)"
                  class="font-medium text-white"
                >
                  {{ project.name }}
                </h3>

                <ProjectStatusBadge
                  :status="project.status"
                  :aria-label="`Project status: ${project.status}`"
                />
              </div>

              <div
                :id="getDescriptionId(project)"
                class="text-gray-400 text-sm mb-3"
              >
                {{ project.description }}
              </div>

              <div
                v-if="project.tech && project.tech.length"
                class="flex flex-wrap gap-2"
                role="list"
                :aria-label="`Technologies used in ${project.name}`"
              >
                <span
                  v-for="tech in project.tech"
                  :key="tech"
                  class="text-xs px-2 py-1 bg-white/10 text-gray-300 rounded"
                  role="listitem"
                >
                  {{ tech }}
                </span>
              </div>
            </div>

            <div
              v-if="project.url"
              class="text-gray-600 group-hover:text-white transition-colors duration-200 ml-4"
              aria-hidden="true"
            >
              →
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
export type ProjectStatus =
  | "active"
  | "wip"
  | "maintained"
  | "learning"
  | "archived";

export interface Project {
  name: string;
  description?: string;
  url?: string;
  tech?: string[];
  status: ProjectStatus;
}

export interface ProjectSection {
  category: string;
  items: Project[];
}

interface Props {
  sections: ProjectSection[];
}

const { sections } = defineProps<Props>();

const getProjectId = (project: Project) =>
  `project-${project.name.toLowerCase().replace(/\s+/g, "-")}`;

const getDescriptionId = (project: Project) =>
  `desc-${project.name.toLowerCase().replace(/\s+/g, "-")}`;
</script>
