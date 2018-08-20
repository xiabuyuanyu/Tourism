<template>
  <div class='wrapper'>
    <swiper :options="swiperOption">
      <swiper-slide v-for='item in swiperList' :key='item.id'>
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
      },
      swiperList: [
        {
          id: '001',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1806/3c/c72a1ccd4d7b2202.jpg_750x200_b88bbab4.jpg'
        },
        {
          id: '002',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1805/e8/14b75b1c81fbe702.jpg_750x200_e6d4f1f1.jpg'
        },
        {
          id: '003',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1808/5e/514ce60160e62602.jpg_750x200_9b0074e2.jpg'
        }
      ]
    }
  }
}
</script>

<style lang='stylus' scoped>
  @import '~styles/varibles.styl'
  .wrapper >>> .swiper-pagination-bullet-active{
    background-color $bgColor
  }
  .wrapper{
    width 100%
    height 0
    overflow hidden
    padding-bottom 26.25% // h344 w750  344/750=0.4587
    background-color #eee
    .swiper-img{
      width 100%
    }
  }
</style>
