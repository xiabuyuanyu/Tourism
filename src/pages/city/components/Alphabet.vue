<template>
  <ul class='list'>
    <li v-for='(item, key) in cities' :key='key'>{{key}}</li>
  </ul>
</template>

<script>
export default {
  name: 'Alphabet',
  data () {
    return {
      name: []
    }
  },
  props: {
    cities: Object
  }
}
</script>

<style lang='stylus' scoped>
  @import '~styles/varibles.styl'
  .list{
    position: absolute
    right 0
    bottom 0
    top 1.6rem
    width .4rem
    display flex
    flex-direction column // 垂直居中
    justify-content center
    li{
      text-align center
      line-height .4rem
      color $bgColor
    }
  }
</style>
