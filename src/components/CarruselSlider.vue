<template>
  <v-carousel hide-delimiters>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    name: 'CarruselSlider',
    data () {
    return {
      items: [
        {
          src: require('../assets/img/mezladora1.jpg'),
        },
        {
          src: require('../assets/img/mezladora2.jpg'),
        },
        {
          src: require('../assets/img/mezladora3.jpg'),
        },
        {
          src: require('../assets/img/mezladora4.jpg'),
        },
      ],
    }
  },
}
</script>

