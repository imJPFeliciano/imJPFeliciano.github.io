<template>
  <div class="relative w-100 m-8">
    <div
      v-for="(item, key) in items"
      :key="key"
      class=""
    >
      <span :class="`ml-8 text-xl font-semibold text-${Theme.colors.fontDarker}`">{{ key }}</span>
      <div
        :class="`border-r-2 border-${Theme.colors.primaryLighter} absolute h-full top-0`"
        style="left: 15px"
      />

      <ul class="list-none m-0 p-0">
        <timeline-list-item
          v-for="(job, jobIndex) in items[key]"
          :key="jobIndex"
          :title="job.title"
          :description="job.description"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import { Theme } from 'UI-Components';
import TimelineListItem from './timelineListItem';

export default {
  components: {
    TimelineListItem,
  },
  props: {
    items: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      Theme,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
