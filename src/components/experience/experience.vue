<template>
  <container>
    <div
      id="experience"
      class="container mt-8 mx-auto"
    >
      <section-title
        title="My resume"
        description="Professional Experience"
      />
      <card class="mx-auto">
        <div class="form bg-white p-4 my-5 relative mx-auto">
          <timeline :items="timelineItems" />
        </div>
      </card>
    </div>
  </container>
</template>

<script>
import {
  Container,
  Card,
  Timeline,
  SectionTitle,
} from 'UI-Components';
import workExperienceItems from './work-experience';

export default {
  components: {
    Container,
    Card,
    Timeline,
    SectionTitle,
  },
  data() {
    return {
      timelineItems: workExperienceItems,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
