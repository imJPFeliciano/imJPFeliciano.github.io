<template>
  <div class="w-full">
    <navigation />
    <!-- TODO: Add Paralax Hero section -->
    <about />
    <services-list />
    <experience />
    <!-- TODO: Add portfolio -->
    <!-- TODO: Add stats -->
    <!-- TODO: Add testimonials -->
    <!-- TODO: Add blog posts -->
    <contact-form />

    <footer-nav />
  </div>
</template>

<script>
import Navigation from '../components/navigation';
import About from '../components/about';
import Experience from '../components/experience';
import ServicesList from '../components/services';
import ContactForm from '../components/contact';
import FooterNav from '../components/ui/footer';

export default {
  components: {
    Navigation,
    About,
    Experience,
    ServicesList,
    ContactForm,
    FooterNav,
  },
};
</script>

<style lang="scss" scoped>
</style>
