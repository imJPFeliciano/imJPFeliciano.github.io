<template>
  <card class="sm:w-1/2 md:w-1/2 lg:w-1/4 sm:flex-auto">
    <div>
      <img
        class="w-full h-64"
        :src="serviceImage"
        alt="Sunset in the mountains"
      >
      <div class="px-6 py-4">
        <div :class="`font-bold text-xl mb-2 text-center text-${Theme.colors.fontDarker}`">
          {{ product.title }}
        </div>

        <p :class="`text-${Theme.colors.fontPrimary} text-base text-center`">
          {{ product.description }}
        </p>
      </div>
    </div>
  </card>
</template>

<script>
import { Card, Theme } from 'UI-Components';

export default {
  components: {
    Card,
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      Theme,
    };
  },
  computed: {
    serviceImage() {
      // eslint-disable-next-line
      return require(`../../assets/images/services/${this.product.image}.svg`).default;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
