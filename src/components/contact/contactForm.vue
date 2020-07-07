<template>
  <container>
    <div
      id="contact"
      class="container mt-8 mx-auto"
    >
      <section-title
        title="contact me"
        description="get in touch"
      />
      <card class="mx-auto">
        <form
          class="form bg-white p-4 my-5 relative mx-auto"
          :action="`https://formspree.io/${userEmail}`"
          method="POST"
          @submit="validateForm"
        >
          <p :class="`text-${Theme.colors.fontPrimary}`">
            To help you choose your properly
          </p>
          <div class="flex space-x-5 mt-3">
            <input
              id=""
              v-model="contactName"
              type="text"
              name="name"
              placeholder="Your Name"
              class="border p-2  w-1/2"
            >
            <input
              id=""
              v-model="contactPhone"
              type="tel"
              name="phone"
              placeholder="Your Number"
              class="border p-2 w-1/2"
            >
          </div>
          <input
            id=""
            v-model="contactEmail"
            type="email"
            name="email"
            placeholder="Your Email"
            class="border p-2 w-full mt-3"
          >
          <textarea
            id=""
            v-model="contactMessage"
            name="message"
            cols="10"
            rows="3"
            placeholder="Tell me about desired property"
            class="border p-2 mt-3 w-full"
          />
          <p class="font-bold text-base mt-3">
            GDPR Agreement *
          </p>
          <div class="flex items-baseline space-x-2 mt-2">
            <input
              id=""
              v-model="contactGDPRAgreement"
              type="checkbox"
              name="gdpr-agreement"
              class="inline-block"
            >
            <p :class="`text-${Theme.colors.fontPrimary} text-base`">
              I consent to having this website store my submitted information so they can respond to my inquiry.
            </p>
          </div>
          <input
            type="submit"
            value="Submit"
            :class="`w-full mt-6 bg-${Theme.colors.primary}
              hover:bg-${Theme.colors.primaryDark} text-white font-semibold p-3`"
          >
        </form>
      </card>
    </div>
  </container>
</template>

<script>
import {
  Container,
  Card,
  SectionTitle,
  Theme,
} from 'UI-Components';

export default {
  components: {
    Card,
    Container,
    SectionTitle,
  },
  data() {
    return {
      userEmail: 'jperazafeliciano@gmail.com',
      contactName: '',
      contactPhone: '',
      contactEmail: '',
      contactMessage: '',
      contactGDPRAgreement: false,
      formErrors: [],
      Theme,
    };
  },
  methods: {
    validateForm(event) {
      this.formErrors = [];
      if (this.contactName && this.contactEmail && this.contactGDPRAgreement) return true;

      if (!this.contactName) {
        this.formErrors.push('Name required.');
      }

      if (!this.contactEmail) {
        this.formErrors.push('Email required.');
      }

      if (!this.contactGDPRAgreement) {
        this.formErrors.push('GDPR check required.');
      }

      event.preventDefault();
      return false;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
