<template>
  <section>
    <v-container
      fluid
      class="d-flex justify-around align-start align-sm-center setSize"
      :class="$vuetify.theme.dark ? 'setGradientBlack' : 'setGradient'"
    >
      <v-row justify="space-around">
        <v-col
          cols="12"
          md="4"
          :class="$vuetify.breakpoint.xsOnly ? 'setWidthXs' : 'setWidth'"
          class="mb-14 mb-md-0"
        >
          <v-layout row wrap>
            <v-flex
              justify-centerw
              xs12
              :class="
                $vuetify.breakpoint.xsOnly ? 'setTranslateXs' : 'setTranslate'
              "
              >Los
            </v-flex>
            <Heading
              :title="$t('landing.TITLE')"
              class="red--text mb-2 mb-sm-6"
            />
            <Description
              class="mb-4"
              :description="$t('landing.DESCRIPTION')"
            />
          </v-layout>
          <v-row class="mt-4" align="center" justify="space-between">
            <v-btn large>
              {{ $t('buttons.CONTACT') }}
            </v-btn>
            <v-btn class="red white--text" large>
              {{ $t('buttons.AGENDA') }}
            </v-btn>
          </v-row>
        </v-col>
        <v-col
          cols="12"
          md="7"
          class="d-flex justify-center align-center rounded-xl setRelative"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="153"
            height="142"
            viewBox="0 0 153 142"
            class="puntitos d-none d-xl-block"
          >
            <defs>
              <clipPath id="a">
                <rect width="153" height="142" fill="none" />
              </clipPath>
            </defs>
            <g clip-path="url(#a)">
              <g transform="translate(-888 -234)">
                <g
                  transform="translate(888 234)"
                  fill="#bc4141"
                  stroke="#707070"
                  stroke-width="1"
                >
                  <circle cx="16" cy="16" r="16" stroke="none" />
                  <circle cx="16" cy="16" r="15.5" fill="none" />
                </g>
              </g>
              <g transform="translate(-836 -234)">
                <g
                  transform="translate(888 234)"
                  fill="#bc4141"
                  stroke="#707070"
                  stroke-width="1"
                >
                  <circle cx="16" cy="16" r="16" stroke="none" />
                  <circle cx="16" cy="16" r="15.5" fill="none" />
                </g>
              </g>
              <g transform="translate(-784 -234)">
                <g
                  transform="translate(888 234)"
                  fill="#bc4141"
                  stroke="#707070"
                  stroke-width="1"
                >
                  <circle cx="16" cy="16" r="16" stroke="none" />
                  <circle cx="16" cy="16" r="15.5" fill="none" />
                </g>
              </g>
              <g transform="translate(-888 -182)">
                <g
                  transform="translate(888 234)"
                  fill="#bc4141"
                  stroke="#707070"
                  stroke-width="1"
                >
                  <circle cx="16" cy="16" r="16" stroke="none" />
                  <circle cx="16" cy="16" r="15.5" fill="none" />
                </g>
              </g>
              <g transform="translate(-836 -182)">
                <g
                  transform="translate(888 234)"
                  fill="#bc4141"
                  stroke="#707070"
                  stroke-width="1"
                >
                  <circle cx="16" cy="16" r="16" stroke="none" />
                  <circle cx="16" cy="16" r="15.5" fill="none" />
                </g>
              </g>
              <g transform="translate(-784 -182)">
                <g
                  transform="translate(888 234)"
                  fill="#bc4141"
                  stroke="#707070"
                  stroke-width="1"
                >
                  <circle cx="16" cy="16" r="16" stroke="none" />
                  <circle cx="16" cy="16" r="15.5" fill="none" />
                </g>
              </g>
              <g transform="translate(-888 -130)">
                <g
                  transform="translate(888 234)"
                  fill="#bc4141"
                  stroke="#707070"
                  stroke-width="1"
                >
                  <circle cx="16" cy="16" r="16" stroke="none" />
                  <circle cx="16" cy="16" r="15.5" fill="none" />
                </g>
              </g>
              <g transform="translate(-836 -130)">
                <g
                  transform="translate(888 234)"
                  fill="#bc4141"
                  stroke="#707070"
                  stroke-width="1"
                >
                  <circle cx="16" cy="16" r="16" stroke="none" />
                  <circle cx="16" cy="16" r="15.5" fill="none" />
                </g>
              </g>
              <g transform="translate(-784 -130)">
                <g
                  transform="translate(888 234)"
                  fill="#bc4141"
                  stroke="#707070"
                  stroke-width="1"
                >
                  <circle cx="16" cy="16" r="16" stroke="none" />
                  <circle cx="16" cy="16" r="15.5" fill="none" />
                </g>
              </g>
            </g>
          </svg>
          <v-img
            v-if="$vuetify.breakpoint.mdAndUp"
            class="rounded-xl setBorder"
            cover
            position="center top"
            max-height="548"
            max-width="800"
            src="https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/74876773_10221255824413574_3091466830586314752_o.jpg?_nc_cat=107&_nc_sid=b9115d&_nc_ohc=oW7HNZS0XcAAX_icdkU&_nc_ht=scontent-cdg2-1.xx&oh=722bc5a7f1fd09a2a80215f5f2be4ec3&oe=5FA9CE25"
          ></v-img>
          <v-img
            v-else
            class="rounded-xl setBorderXs"
            cover
            position="center top"
            max-height="375"
            max-width="315"
            src="https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/74876773_10221255824413574_3091466830586314752_o.jpg?_nc_cat=107&_nc_sid=b9115d&_nc_ohc=oW7HNZS0XcAAX_icdkU&_nc_ht=scontent-cdg2-1.xx&oh=722bc5a7f1fd09a2a80215f5f2be4ec3&oe=5FA9CE25"
          ></v-img>
        </v-col>
      </v-row>
      <a @click="$vuetify.goTo('#maps', options)" class="scroll"> </a>
    </v-container>
    <v-sheet id="maps">
      <Steper />
    </v-sheet>
  </section>
</template>

<style scoped lang="scss">
.setSize::before {
  content: '';
  width: 308px;
  height: 770px;
  background-image: url('../../src/assets/img/guitar.png');
  position: absolute;
  bottom: 0;
  left: 0;
}

.setRelative {
  position: relative;
}

.puntitos {
  position: absolute;
  bottom: -40px;
  right: 50px;
}

.setTranslate {
  transform: translate(-110px, 60px);
  font-size: 3rem;
  font-weight: bolder;
}

.setTranslateXs {
  transform: translate(-70px, 45px);
  font-size: 2rem;
  font-weight: bolder;
}

.setWidth {
  max-width: 430px;
  margin: 0 auto;
}

.setWidthXs {
  max-width: 280px;
  margin: 0 auto;
}

.setSize {
  width: 100vw;
  height: calc(100vh - 64px);
  position: relative;
}

.setSizeXs {
  width: 100vw;
  height: calc(100vh - 56px);
}

.setBorder {
  border: 40px black solid;
}

.setBorderXs {
  border: 10px black solid;
}

/*ARROW DOWN*/
$orange: #e84c00;
$fuschia: #c10040;
$size: 90px;
$border: 4px;
/*ARROW DOWN*/
.scroll {
  position: absolute;
  left: 50%;
  bottom: 0;
  height: 0;
  width: 0;

  border-left: $size solid transparent;
  border-right: $size solid transparent;
  border-bottom: $size/1.125 solid transparent;
  transform: translateX(-50%);

  &:before {
    content: '';
    position: absolute;
    top: $size/2;
    left: 50%;
    height: $size/4.5;
    width: $size/3;
    margin-top: -$size/9/2;
    margin-left: -$size/3/2;

    background: linear-gradient(top left, $orange, $fuschia);

    clip-path: polygon(15% 0, 50% 60%, 85% 0, 100% 20%, 50% 100%, 0 20%);

    animation: bounce 2s ease infinite;
  }
}

@keyframes bounce {
  50% {
    transform: scale(0.75) translateY(-50%);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
<script>
import Steper from '@/components/vuetify/Steper'
export default {
  components: { Steper }
}
</script>
