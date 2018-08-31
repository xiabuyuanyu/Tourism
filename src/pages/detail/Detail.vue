<template>
    <detail-banner></detail-banner>
</template>

<script>
import DetailBanner from './components/banner'
export default {
  name: 'City',
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  components: {
    DetailBanner
  },
  mounted () {
  },
  methods: {
    getCityInfo () {
    },
    hendldGetCityinfoSucc (res) {
    },
    handletterChange (letter) {
    }
  }
}
</script>

<style lang='stylus' scoped>

</style>
