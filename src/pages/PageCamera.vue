<template>
  <q-page class="constrain-more q-pa-md">
    <div class="camera-frame q-pa-md">
      <video
        ref="video"
        autoplay
        class="full-width" />
    </div>
    <div class="text-center q-pa-md">
      <q-btn
        round
        size="lg"
        color="grey-10"
        icon="eva-camera" />
      <div class="row justify-center q-ma-md">
        <q-input
          v-model="post.caption"
          class="col col-sm-6"
          dense
          label="Caption" />
      </div>
      <div class="row justify-center q-ma-md">
        <q-input
          v-model="post.location"
          class="col col-sm-6"
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
import { uid } from 'quasar'

export default {
  name: 'PageCamera',
  data() {
    return {
      post: {
        id: uid(),
        caption: '',
        location: '',
        photo: null,
        date: Date.now()
      }
    }
  },
  methods: {
    initCamera(){
      navigator.mediaDevices.getUserMedia({
        video:true
      }).then(stream => {
        this.$refs.video.srcObject = stream
      })
    }
  },
  mounted() {
    this.initCamera()
  }
}
</script>


<style lang="sass">
  .camera-frame
    border: 2px solid $grey-10
    border-radius: 10px
</style>