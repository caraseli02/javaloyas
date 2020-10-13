<template>
  <v-footer height="60" class="d-block text-center">
    <div>
      {{ $t('footer.MADE_WITH') }}
      <v-icon small class="red--text mx-0 px-0">mdi-cards-heart</v-icon>
      &nbsp;{{ $t('footer.BY') }}:
    </div>
    <v-btn text href="https://caraseli.com">VladWeb</v-btn>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    appVersion() {
      return this.$store.getters.appVersion
    }
  }
}
</script>
