<template>
  <div class="section-title my-2">
    <h3 class="text-xl uppercase title">
      {{ title }}
    </h3>
    <h2 class="text-3xl capitalize font-bold">
      {{ description }}
    </h2>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      required: true,
      type: String,
    },
    description: {
      required: true,
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.title{
  &::before {
    display: inline-block;
    content: "";
    width: 2rem;
    height: 3px;
    margin: 0 1rem 0 0;
    transform: translateY(-5px);
    background: linear-gradient(to right, #c3dafe, #7f9cf5);
  }
}
</style>
