<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
      class="bg-white text-grey-10"
      bordered>
      <q-toolbar class="constrain">
        <q-btn
          class="large-screen-only q-mr-sm"
          to="/camera"
          flat
          dense
          size="18px"
          round
          icon="eva-camera-outline" />
        <q-separator
          class="large-screen-only"
          spaced
          vertical />
        <q-toolbar-title class="text-grand-hotel text-bold"> 
          Quasargram
        </q-toolbar-title>
        <q-btn
          class="large-screen-only"
          to="/"
          flat
          dense
          size="18px"
          round
          icon="eva-home-outline" />
      </q-toolbar>
    </q-header>
    <q-footer
      class="bg-white small-screen-only"
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

  .q-header
    .q-toolbar__title
      @media (max-width: $breakpoint-xs-max)
        text-align: center
      font-size: 30px
    .q-toolbar
      @media (min-width: $breakpoint-sm-min)
        min-height: 77px
</style>