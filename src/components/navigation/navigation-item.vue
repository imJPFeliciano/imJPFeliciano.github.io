<template>
  <a
    v-smooth-scroll="{ offset: -100 }"
    :href="id"
    :class="className"
    @click="onClick"
  >
    {{ label }}
  </a>
</template>

<script>
export default {
  props: {
    id: { required: true, type: String },
    onClick: { required: true, type: Function },
    label: { required: true, type: String },
    isLastItem: { type: Boolean },
  },
  computed: {
    className() {
      return this.isLastItem
        ? 'block mt-4 lg:inline-block lg:mt-0 text-indigo-200 hover:text-white'
        : 'block mt-4 lg:inline-block lg:mt-0 text-indigo-200 hover:text-white mr-4';
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
