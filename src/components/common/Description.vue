<template>
  <v-flex
    xs12
    justify-center
    text-xs-center
    mb-2
    v-html="description"
    class="setWidth"
    :class="
      $vuetify.theme.dark
        ? 'grey--text text--lighten-3'
        : 'black--text text-darken-4'
    "
  ></v-flex>
</template>

<script>
export default {
  name: 'Description',
  props: {
    description: String
  }
}
</script>

<style scoped>
.setWidth {
  max-width: 270px;
  margin: 0 auto;
  font-size: clamp(1.2rem, 2.5vw, 1.8rem);
}
</style>
