<template>
  <v-flex xs12 text-xs-center mt-5 mb-3>
    <h1
      :class="$vuetify.breakpoint.xsOnly ? 'display-3' : 'display-4'"
      class="font-weight-bold"
    >
      {{ title }}
    </h1>
  </v-flex>
</template>

<script>
export default {
  name: 'Heading',
  props: {
    title: String
  }
}
</script>
