<template>
  <v-container fluid>
    <v-layout row wrap>
      <Heading :title="$t('about.TITLE')" />
      <Description :description="$t('about.DESCRIPTION')" />
    </v-layout>
    <v-timeline>
      <v-timeline-item
        v-for="(year, i) in years"
        :key="i"
        :color="year.color"
        small
      >
        <template v-slot:opposite>
          <span
            :class="`headline font-weight-bold ${year.color}--text`"
            v-text="year.year"
          ></span>
        </template>
        <v-img
          height="300px"
          :src="year.img"
          class="py-4 white--text align-end rounded-xl"
          gradient="to bottom, rgba(0,0,0,.5), rgba(0,0,0,.7)"
        >
          <h2 class="`headline font-weight-bold mb-4 white--text`">
            {{ year.title }}
          </h2>
          <div class="subtitle-1 ma-6">
            {{ year.text }}
          </div>
        </v-img>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: this.$store.getters.appTitle,
      titleTemplate: `${this.$t('about.TITLE')} - %s`
    }
  },
  data: () => ({
    years: [
      {
        color: 'cyan',
        year: '1952',
        title: 'Inicio',
        img:
          'https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/73219536_2313472825632876_8739794779870593024_n.jpg?_nc_cat=103&_nc_sid=b9115d&_nc_ohc=WbYeKMU_6p8AX97wfEE&_nc_ht=scontent-cdt1-1.xx&oh=28cddd8b3eb0802bbec9106d6c1c7822&oe=5FAAF5FA',
        text:
          'Es probablemente el mas veterano de los grupos pop españoles, ya que sus inicios datan de 1952 y aún continúan en activo, con algunas novedades entre sus componentes.'
      },
      {
        color: 'teal',
        year: '1953',
        title: 'Primer Disco',
        img:
          'https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-0/p417x417/75247493_2313472945632864_7725501350561185792_n.jpg?_nc_cat=108&_nc_sid=b9115d&_nc_ohc=qMiYIEOdBF4AX_vPqY-&_nc_ht=scontent-cdg2-1.xx&tp=6&oh=b8d614b1b587fc3598e8e558011c95eb&oe=5FA9258B',
        text:
          'En 1953 grabaron su primer disco, en Argel y regresaron a Palma de Mallorca siendo la atracción mas estable de la isla, aunque continuaron realizando giras por el extranjero, actuaron en Roma y participaron en una película en 1956. Se presentaron en sitios frecuentados por las luminarias del cine como Silvana Mangano y Silvana Pampanini entre otros. '
      },
      {
        color: 'green',
        year: '1960',
        img:
          'https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/74638374_2314394978873994_6858642345953329152_n.jpg?_nc_cat=110&_nc_sid=b9115d&_nc_ohc=1L-XSW4CidQAX_dVe9N&_nc_ht=scontent-cdt1-1.xx&oh=0d2c285c73890da6c62620f51b55cc77&oe=5FA895FC',
        title: 'Paris y Alemania',
        text:
          'Mas tarde grabaron un disco en París y otro en Alemania y actuaron junto a figuras de renombre de la época como Aznavour y Luis Mariano. También actuaron en Asia, e incluso en algunos espectáculos para príncipes y otras distinguidas figuras de la política en Irán, Jordania y otros países. '
      }
    ]
  })
}
</script>
