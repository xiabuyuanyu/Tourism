<template>
    <div>
      <detail-banner></detail-banner>
      <detail-header></detail-header>
      <div class="content">
      </div>
    </div>
</template>

<script>
import DetailBanner from './components/banner'
import DetailHeader from './components/header'
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
    DetailBanner,
    DetailHeader
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
.content{
  height: 50rem
}
</style>
