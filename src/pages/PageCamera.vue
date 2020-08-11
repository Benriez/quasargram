<template>
  <q-page class="constrain q-pa-md">
    <div class="camera-frame q-pa-md">
      <img
        class="full-width"
        src="https://cdn.quasar.dev/img/mountains.jpg">
    </div>
    <div class="text-center q-pa-md">
      <q-btn
        round
        size="lg"
        color="grey-10"
        icon="eva-camera" />
      <div class="row justify-center q-ma-md">
        <q-input
          v-model="text"
          class="col"
          dense
          label="Caption" />
      </div>
      <div class="row justify-center q-ma-md">
        <q-input
          v-model="text"
          class="col"
          dense
          label="Location" >
        <template v-slot:append>
          <q-btn
            round
            dense
            flat
            icon="eva-navigation-2-outline" />
        </template>
        </q-input>
      </div>
      <div class="row justify-center q-mt-lg">
        <q-btn
          unelevated
          rounded
          color="grey-10"
          label="Post Image" />
      </div>
      
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageCamera'
}
</script>


<style lang="sass">
  .camera-frame
    border: 2px solid $grey-10
    border-radius: 10px
</style>