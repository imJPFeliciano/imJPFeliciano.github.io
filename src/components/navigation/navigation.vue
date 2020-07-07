<template>
  <nav :class="`flex items-center justify-between flex-wrap bg-${Theme.colors.primary} p-6 w-full z-10 sticky top-0`">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <span class="font-semibold text-xl tracking-tight">Jonathan Peraza F</span>
    </div>
    <div class="block lg:hidden">
      <button
        :class="`flex items-center px-3 py-2 border rounded text-${Theme.colors.primaryLighter}
          border-${Theme.colors.primary} hover:text-white hover:border-white`"
        @click.prevent="handleMenu"
      >
        <svg
          class="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        ><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
      </button>
    </div>
    <div :class="`w-full flex-grow lg:flex lg:items-center lg:w-auto ${menuStatus}`">
      <div class="text-base lg:flex-grow">
        <navigation-item
          id="#about"
          :on-click="handleMenu"
          label="About"
        />

        <navigation-item
          id="#services"
          :on-click="handleMenu"
          label="Services"
        />

        <navigation-item
          id="#experience"
          :on-click="handleMenu"
          label="Experience"
        />

        <navigation-item
          id="#contact"
          :on-click="handleMenu"
          label="Contact"
          is-last-item
        />
      </div>
      <div>
        <a
          :href="resumeLink"
          :class="`inline-block text-base px-4 py-2 leading-none border rounded text-white border-white
            hover:border-transparent hover:text-${Theme.colors.primaryDark} hover:bg-white mt-4 lg:mt-0`"
          download="jpfeliciano_en"
        >Download Resume</a>
      </div>
    </div>
  </nav>
</template>

<script>
import { Theme } from 'UI-Components';
import Resume from '../../assets/docs/EN_resume_cv.pdf';
import NavigationItem from './navigation-item';

export default {
  components: {
    NavigationItem,
  },
  data() {
    return {
      resumeLink: Resume,
      displayMenu: false,
      Theme,
    };
  },
  computed: {
    menuStatus() {
      return this.displayMenu ? 'block' : 'hidden';
    },
  },
  methods: {
    handleMenu() {
      this.displayMenu = !this.displayMenu;
    },
    hideMenu() {
      this.displayMenu = false;
    },
  },
};

</script>

<style lang="scss" scoped>
</style>
