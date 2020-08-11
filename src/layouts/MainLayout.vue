<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
      class="bg-white text-grey-10"
      bordered>
      <q-toolbar>

        <q-toolbar-title class="text-center"> 
          Quasar App
        </q-toolbar-title>

      </q-toolbar>
    </q-header>
    <q-footer
      class="bg-white"
      bordered>
      <q-tabs
        class="text-grey-10"
        active-color="primary"
        indicator-color="transparent">
        <q-route-tab
          to="/"
          exact
          icon="eva-home-outline"/>
        <q-route-tab
          to="/camera"
          exact
          icon="eva-camera-outline"/>
      </q-tabs>

    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',
  data() {
    return {

    }
  }
}
</script>

<style lang="sass">
  .q-footer
    .q-tab__icon
      font-size: 30px
</style>