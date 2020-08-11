<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>
    <q-footer elevated>
      <q-tabs>
        <q-route-tab
          to="/"
          exact
          name="home"
          icon="mail"
          label="Home" />
        <q-route-tab
          to="/camera"
          exact
          name="camera"
          icon="alarm"
          label="Camera" />
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
