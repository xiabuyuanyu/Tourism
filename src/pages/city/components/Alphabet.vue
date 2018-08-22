<template>
  <ul class='list'>
    <li>A</li>
    <li>A</li>
    <li>A</li>
    <li>A</li>
    <li>A</li>
    <li>A</li>
  </ul>
</template>

<script>
export default {
  name: 'Alphabet',
  data () {
    return {
      name: []
    }
  }
}
</script>

<style lang='stylus' scoped>
  @import '~styles/varibles.styl'
  .list{
    position: absolute
    right 0
    bottom 0
    top -.4rem
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
