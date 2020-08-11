<template>
  <q-page class="constrain-more q-pa-md">
    <div class="camera-frame q-pa-md">
      <!-- v-show instead of v-if -->
      <!-- otherwise the content will be deleted from the dom -->
      <video
        v-show="!imageCaptured"
        ref="video"
        autoplay
        class="full-width" />
      <canvas
        v-show="imageCaptured"
        ref="canvas"
        height="240" 
        clas="full-width" />
    </div>
    <div class="text-center q-pa-md">
      <q-btn
        @click="captureImage"
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
require('md-gum-polyfill')

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
      },
      imageCaptured: false
    }
  },
  methods: {
    initCamera(){
      navigator.mediaDevices.getUserMedia({
        video:true
      }).then(stream => {
        this.$refs.video.srcObject = stream
      })
    },
    captureImage(){
      let video = this.$refs.video
      let canvas = this.$refs.canvas
      canvas.width = video.getBoundingClientRect().width
      canvas.height= video.getBoundingClientRect().height
      let context = canvas.getContext('2d')
      context.drawImage(video, 0, 0, canvas.width, canvas.height)
      this.imageCaptured = true
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