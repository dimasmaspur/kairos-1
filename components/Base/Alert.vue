<template>
  <div
    class="alert"
    :class="{
      'bg-success' : status === true,
      'bg-error' : status === false,
      'show' : display === true,
      'hidden' : display === false
    }"
  >
    <div
      class="d-flex"
      :class="{'text-green' : status === true, 'text-red' : status === false}"
    >
      <v-icon v-if="status === true">
        mdi-check-circle-outline
      </v-icon>
      <v-icon v-if="status === false">
        mdi-close-octagon-outline
      </v-icon>
      <span class="alert-text">
        <slot />
      </span>
      <button class="close" @click="close">
        <v-icon>mdi-window-close</v-icon>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    status: {
      type: Boolean,
      default: false
    },
    display: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    close () {
      this.display = false
    }
  }
}
</script>
<style lang="scss" scoped>
 .alert{
   width: 100%;
   height: 56px;
   padding: 16px;
   border-radius: 4px;
   position: relative;
   .alert-text{
    margin-left: 10px;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: left;
  }
 }
 .show {
   display: block;
 }
 .hidden {
   display: none;
 }
 .close{
   margin-left: auto;
   outline: none;
 }
 .d-flex{
   display: flex;
 }
 i {
   color: currentColor !important;
   &::before {
     color: currentColor;
   }
   &::after {
     color: currentColor;
   }
 }
</style>
