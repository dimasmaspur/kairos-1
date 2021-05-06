<template>
  <div>
    <nuxt-link
      v-if="type === 'link'"
      :to="link"
      class="scl-button"
      :class="`button-${color}`"
    >
      <slot />
      <v-icon v-if="icon === 'add'">
        mdi-plus-circle-outline
      </v-icon>
      <v-icon v-if="icon === 'edit'">
        mdi-pencil-outline
      </v-icon>
      <v-icon v-if="icon === 'import'">
        mdi-download-outline
      </v-icon>
      <v-icon v-if="icon === 'uncheck'">
        mdi-circle-outline
      </v-icon>
      <v-icon v-if="icon === 'check'">
        mdi-check-circle-outline
      </v-icon>
      <v-icon v-if="icon === 'print'">
        mdi-printer
      </v-icon>
    </nuxt-link>
    <button
      v-if="type === 'button'"
      class="scl-button"
      :class="`button-${color}`"
      @click="actions"
    >
      <slot />
      <v-icon v-if="icon === 'add'">
        mdi-plus-circle-outline
      </v-icon>
      <v-icon v-if="icon === 'edit'">
        mdi-pencil-outline
      </v-icon>
      <v-icon v-if="icon === 'import'">
        mdi-download-outline
      </v-icon>
      <v-icon v-if="icon === 'uncheck'">
        mdi-circle-outline
      </v-icon>
      <v-icon v-if="icon === 'check'">
        mdi-check-circle-outline
      </v-icon>
      <v-icon v-if="icon === 'print'">
        mdi-printer
      </v-icon>
    </button>
    <a
      v-if="type === 'a'"
      :target="target"
      :href="link"
      class="scl-button"
      :class="`button-${color}`"
    >
      <slot />
      <v-icon v-if="icon === 'add'">
        mdi-plus-circle-outline
      </v-icon>
      <v-icon v-if="icon === 'edit'">
        mdi-pencil-outline
      </v-icon>
      <v-icon v-if="icon === 'import'">
        mdi-download-outline
      </v-icon>
      <v-icon v-if="icon === 'uncheck'">
        mdi-circle-outline
      </v-icon>
      <v-icon v-if="icon === 'check'">
        mdi-check-circle-outline
      </v-icon>
      <v-icon v-if="icon === 'print'">
        mdi-printer
      </v-icon>
    </a>
  </div>
</template>
<script>
export default {
  props: {
    link: {
      type: String,
      default: 'link'
    },
    target: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'button',
      validator (value) {
        return ['button', 'link', 'a'].includes(value)
      },
      required: true
    },
    color: {
      type: String,
      default: 'blue',
      validator (value) {
        return [
          'blue',
          'white',
          'red',
          'gray',
          'sky',
          'light',
          'yellow'
        ].includes(value)
      },
      required: true
    },
    icon: {
      type: String,
      default: '',
      validator (value) {
        return ['add', 'edit', 'import', 'uncheck', 'check', 'print'].includes(value)
      },
      required: true
    },
    actions: {
      type: Function,
      default: null
    }
  }
}
</script>
<style lang="scss" scoped>
.scl-button {
  padding: 8px 16px;
  display: inline-block;
  min-height: 40px;
  text-decoration: none;
  border-radius: 4px;

  //styleName: paragraph;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: center;

}
.button-blue {
  background-color: $blue;
  color: $white;
  &:hover {
    background-color: darken($color: $blue, $amount: 10%);
  }
}
.button-white {
  background-color: $white;
  color: $red;
  &:hover {
    background-color: darken($color: $white, $amount: 10%);
  }
}
.button-red {
  background-color: $red;
  color: $white;
  &:hover {
    background-color: darken($color: $red, $amount: 10%);
  }
}
.button-grey {
  background-color: $gray;
  color: $black;
  &:hover {
    background-color: darken($color: $gray, $amount: 10%);
  }
}
.button-sky {
  background-color: $sky;
  color: $white;
  &:hover {
    background-color: darken($color: $sky, $amount: 10%);
  }
}
.button-light {
  background-color: $white;
  color: $black;
  &:hover {
    background-color: darken($color: $white, $amount: 10%);
  }
}
.button-yellow {
  background-color: $yellow;
  color: $black;
  &:hover {
    background-color: darken($color: $yellow, $amount: 10%);
  }
}
i {
  color: currentColor !important;
  margin-left: 10px;
  &::before {
    color: currentColor;
  }
  &::after {
    color: currentColor;
  }
}
</style>
