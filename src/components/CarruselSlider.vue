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
          src: require('../assets/img/mezcladora01.jpg'),
        },
        {
          src: require('../assets/img/mezcladora02.jpg'),
        },
        {
          src: require('../assets/img/mezcladora03.jpg'),
        },
        {
          src: require('../assets/img/mezcladora04.jpeg'),
        },
      ],
    }
  },
}
</script>

