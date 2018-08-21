<template>
  <div class='wrapper'>
    <swiper :options="swiperOption" v-if='isShowswiper'>
      <swiper-slide v-for='item in list' :key='item.id'>
        <img :src="item.imgUrl" alt="" class='swiper-img'>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination', // 索引点
        loop: true // 循环播放
      }
    }
  },
  props: {
    list: Array
  },
  computed: {
    isShowswiper () {
      return this.list.length
    }
  }
}
</script>

<style lang='stylus' scoped>
  @import '~styles/varibles.styl'
  .wrapper >>> .swiper-pagination-bullet-active{
    background-color #fff
  }
  .wrapper{
    width 100%
    height 0
    overflow hidden
    padding-bottom 32.25% // h344 w750  344/750=0.4587
    background-color #eee
    .swiper-img{
      width 100%
    }
  }
</style>
