<template>
  <li class="mb-2">
    <div class="flex items-center mb-1">
      <div :class="`bg-${Theme.colors.primaryLighter} rounded-full h-4 w-4 ml-2`" />
      <div :class="`flex-1 ml-4 font-medium text-${Theme.colors.fontDark}`">
        {{ title }}
      </div>
    </div>

    <div :class="`ml-12 text-${Theme.colors.fontPrimary} text-base`">
      {{ description }}
    </div>
  </li>
</template>

<script>
import { Theme } from 'UI-Components';

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
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
