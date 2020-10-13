<template>
  <section class="d-flex justify-center align-center getSize pa-4">
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="name"
        :counter="10"
        :rules="nameRules"
        label="Name"
        required
      ></v-text-field>

      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>

      <v-textarea v-model="text" label="Description" required></v-textarea>

      <v-checkbox
        v-model="checkbox"
        :rules="[(v) => !!v || 'You must agree to continue!']"
        label="Do you agree?"
        required
      ></v-checkbox>
      <div class="d-flex justify-center align-center flex-column flex-sm-row">
        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4 mb-2"
          @click="validate"
        >
          Validate
        </v-btn>

        <v-btn color="error" class="mr-4 mb-2" @click="reset">
          Reset Form</v-btn
        >

        <v-btn color="warning" @click="resetValidation">
          Reset Validation</v-btn
        >
      </div>
    </v-form>
  </section>
</template>

<script>
export default {
  name: 'contact',
  data: () => ({
    valid: true,
    name: '',
    text: '',
    nameRules: [
      (v) => !!v || 'Name is required',
      (v) => (v && v.length <= 10) || 'Name must be less than 10 characters'
    ],
    email: '',
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    ],
    checkbox: false
  }),

  methods: {
    validate() {
      this.$refs.form.validate()
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    }
  }
}
</script>

<style scoped>
.getSize {
  width: 100vw;
  height: 100vh;
}
</style>
