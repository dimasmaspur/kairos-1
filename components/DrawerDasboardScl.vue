<template>
  <v-navigation-drawer
    dark
    permanent
    color="#3273DC"
    :mini-variant="mini"
    app
    class="pt-5"
  >
    <v-list>
      <v-list-item class="justify-start">
        <img src="../assets/img/SCL-png.png" width="70%" style="text-align: center;margin-bottom: 40px;" />
      </v-list-item>
      <v-list-item
        v-for="(item, i) in menus"
        :key="i"
        :to="item.to"
        nuxt
        exact
      >
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { Drawer } from '@/utils'
export default {
  data () {
    return {
      mini: false
    }
  },

  computed: {
    menus () {
      return Drawer[this.$auth.user.role]
    }
  },

  methods: {
    onToggle (e) {
      this.mini = !this.mini
    }
  }
}
</script>

<style scoped>
.v-list-group.JO-minibar.v-list-group--active.primary--text{
  color: white !important;
}
</style>
