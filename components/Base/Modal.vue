<template>
  <div class="modal-container">
    <div class="modal bg-white">
      <div class="modal-header">
        <div>
          <v-icon>mdi-check-circle-outline</v-icon>
        </div>
        <button>
          <v-icon>mdi-window-close</v-icon>
        </button>
      </div>
      <div class="modal-body ">
        <slot name="body" />
      </div>
      <div class="modal-footer">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>
<script>
// import baseButton from '~/components/Base/Button'
export default {
  components: {
    // baseButton
  },
  props: {}
}
</script>
<style lang="scss" scoped>
.modal-container{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 100vh;
  background: rgba($color: $black, $alpha: 0.2);
  .modal{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 4px;
    width: 50%;
    height: 80%;
    .modal-header {
      border-bottom: $border 1px solid;
      padding: 16px;
      display: flex;
      justify-items: center;
      justify-content: space-between;
    }
    .modal-body{
      padding: 16px;
    }
    .modal-footer {
      border-top: $border 1px solid;
      padding: 16px;
    }
  }
}
</style>
