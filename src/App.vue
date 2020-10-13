<template>
  <section class="bgEfect">
    <v-app>
      <Toolbar />
      <v-speed-dial
        v-model="dialShare"
        absolute
        right
        top
        class="mt-14 mr-6"
        direction="left"
        open-on-hover
      >
        <template v-slot:activator>
          <v-btn fab bottom small color="">
            <v-icon v-if="dialShare">mdi-close</v-icon>
            <v-icon v-else>mdi-share-variant</v-icon>
          </v-btn>
        </template>
        <v-btn
          v-for="item in media"
          :key="item.name"
          dark
          fab
          bottom
          :color="item.color"
          small
          :href="item.url"
          target="_blank"
        >
          <v-icon>{{ item.name }}</v-icon>
        </v-btn>
      </v-speed-dial>
      <v-content class="text-center">
        <loading />
        <v-main fluid>
          <transition name="fade" mode="out-in">
            <router-view />
          </transition>
        </v-main>
      </v-content>
      <Footer />
    </v-app>
  </section>
</template>

<script>
import Toolbar from '@/components/core/Toolbar.vue'
import Loading from '@/components/core/Loading.vue'
import Footer from '@/components/core/Footer.vue'

export default {
  name: 'App',
  metaInfo() {
    return {
      title: this.appTitle,
      htmlAttrs: {
        lang: this.$i18n.locale
      },
      meta: [
        { name: 'msapplication-TileColor', content: '#ffc40d' },
        { name: 'theme-color', content: '#ffffff' },
        {
          name: 'apple-mobile-web-app-title',
          content: this.appTitle
        },
        { name: 'application-name', content: this.appTitle }
      ],
      link: [
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png'
        },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'mask-icon', color: '#5bbad5', href: '/safari-pinned-tab.svg' },
        { rel: 'favicon', href: '/favicon.ico' }
      ]
    }
  },
  data() {
    return {
      dialShare: false,
      media: [
        {
          name: 'mdi-whatsapp',
          url: 'https://wa.me/1XXXXXXXXXX',
          color: 'green'
        },
        {
          name: 'mdi-facebook',
          url: 'https://wa.me/1XXXXXXXXXX',
          color: 'blue'
        },
        { name: 'mdi-gmail', url: 'https://wa.me/1XXXXXXXXXX', color: 'red' },
        { name: 'mdi-phone', url: 'https://wa.me/1XXXXXXXXXX', color: 'teal' }
      ]
    }
  },
  components: {
    Toolbar,
    Loading,
    Footer
  },
  computed: {
    appTitle() {
      return this.$store.getters.appTitle
    }
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.setGradient {
  background: linear-gradient(
    325deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 1) 42%,
    rgba(255, 255, 255, 1) 42%,
    rgba(255, 255, 255, 1) 42%
  );
}

.setGradientBlack {
  background: linear-gradient(
    325deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 36%,
    rgba(0, 0, 0, 1) 36%,
    rgba(0, 0, 0, 1) 36%
  );
}
</style>
