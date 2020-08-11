<template>
  <q-page class="constrain q-pa-md">
    <q-card
      v-for="post in posts"
      :key="post.id"
      class="card-post q-mb-md"
      flat
      bordered>
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-bold">benny_riezler</q-item-label>
          <q-item-label caption>
            {{post.location}}
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-separator />
      <q-img :src="post.imageUrl" />
      <q-card-section>
        <div>{{post.caption}}</div>
        <div class="text-caption text-grey">{{post.date | dateToday}}</div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { date } from 'quasar'
export default {
  name: 'PageHome',
  data() {
    return {
      posts: [
        {
          id:1,
          caption: 'beautiful mountain',
          date: 1597150477321,
          location: 'Darmstadt, DE',
          imageUrl: 'https://cdn.quasar.dev/img/mountains.jpg'
        },
        {
          id:2,
          caption: 'nice weather',
          date: 1597150477321,
          location: 'Darmstadt, DE',
          imageUrl: 'https://cdn.quasar.dev/img/mountains.jpg'
        },
        {
          id:3,
          caption: 'beautiful mountain',
          date: 1597150477321,
          location: 'Darmstadt, DE',
          imageUrl: 'https://cdn.quasar.dev/img/mountains.jpg'
        },
        {
          id:4,
          caption: 'beautiful mountain',
          date: 1597150477321,
          location: 'Darmstadt, DE',
          imageUrl: 'https://cdn.quasar.dev/img/mountains.jpg'
        }
      ]
    }
  },
  filters: {
    dateToday(value) {
      return date.formatDate(value, 'D MMMM H:mm')
    }
  }
}
</script>

<style lang="sass">
  .card-post
    q-img
      min-height: 200px
</style>