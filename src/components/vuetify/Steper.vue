<template>
  <section class="pa-12 fill-height">
    <h2 class="display-2 setSize d-flex justify-center align-center">
      Proximos Conciertos
    </h2>
    <v-stepper non-linear class="transparent elevation-0" v-model="e1">
      <v-stepper-header>
        <template v-for="n in steps.Data">
          <v-stepper-step
            :key="n.step"
            :complete="e1 > n.step"
            :step="n.step"
            editable
          >
            {{ n.month }}
          </v-stepper-step>

          <v-divider v-if="n.step !== steps.number" :key="n.step"></v-divider>
        </template>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content v-for="n in steps.Data" :key="n.step" :step="n.step">
          <v-card :loading="loading" class="mx-auto my-12" max-width="374">
            <template slot="progress">
              <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
              ></v-progress-linear>
            </template>

            <v-img
              height="250"
              src="https://images.unsplash.com/photo-1558269617-58a1701f1d41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
            ></v-img>

            <v-card-title>Mallorca</v-card-title>
            <v-divider class="mx-4"></v-divider>

            <v-card-title>FECHA</v-card-title>

            <v-card-text>
              <v-chip-group
                v-model="selection"
                active-class="deep-purple accent-4 white--text"
                column
              >
                <v-chip>9:00PM</v-chip>
              </v-chip-group>
            </v-card-text>

            <v-card-actions>
              <v-btn color="deep-purple lighten-2" text @click="reserve">
                Reserve
              </v-btn>
            </v-card-actions>
          </v-card>

          <v-btn
            v-if="n.step !== steps.number"
            color="error"
            @click="nextStep(n.step)"
          >
            Next</v-btn
          >
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </section>
</template>

<script>
export default {
  name: 'steper',
  data() {
    return {
      e1: 1,
      steps: {
        number: 3,
        Data: [
          {
            step: 1,
            name: 'uno',
            date: '28',
            month: 'Enero',
            location: 'Palma'
          },
          {
            step: 2,
            name: 'dos',
            date: '8',
            month: 'Febrero',
            location: 'Ibiza'
          },
          {
            step: 3,
            name: 'tres',
            date: '2',
            month: 'Marzo',
            location: 'Palma'
          }
        ]
      }
    }
  },

  methods: {
    nextStep(n) {
      if (n === this.steps) {
        this.e1 = 1
      } else {
        this.e1 = n + 1
      }
    }
  }
}
</script>

<style scoped>
.setSize {
  width: 100vw;
  height: 15vh;
}
.setSize:before {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
}
</style>
