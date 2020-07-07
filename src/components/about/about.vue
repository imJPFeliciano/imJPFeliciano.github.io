<template>
  <div
    id="about"
    class="flex bg-white w-auto"
    style="height: 600px;"
  >
    <div class="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
      <div>
        <h2 class="text-3xl font-semibold text-gray-800 md:text-4xl">
          I'm <span :class="`text-${Theme.colors.fontAccent}`">{{ PageInformation.title }}</span>
        </h2>
        <p
          v-for="(paragraph, index) in PageInformation.description"
          :key="index"
          :class="`mt-2 text-lg text-${Theme.colors.fontPrimary}`"
        >
          {{ paragraph }}
        </p>
      </div>
    </div>
    <div
      class="hidden lg:block lg:w-1/2"
      style="clip-path:polygon(10% 0, 100% 0%, 100% 100%, 0 100%)"
    >
      <div
        class="bg-no-repeat bg-right-top h-full object-fill"
        :style="{ 'background-image': `url(${heroImage})` }"
      >
        <div class="h-full bg-black opacity-25" />
      </div>
    </div>
  </div>
</template>

<script>
import { Theme } from 'UI-Components';
import PageInformation from './hero-info';

export default {
  data() {
    return {
      PageInformation,
      Theme,
    };
  },
  computed: {
    heroImage() {
      // eslint-disable-next-line
      return require(`../../assets/images/${this.PageInformation.image}`).default;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
