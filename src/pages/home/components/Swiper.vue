<template>
  <div class='wrapper'>
    <swiper :options="swiperOption">
      <swiper-slide v-for='item in swiperList' :key='item.id'>
        <img :src="item.imgUrl" alt="" class='swiper-img'>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
    <p>454555</p>
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
          imgUrl: 'https://mgg.gzqqs.com/web/mgg-activity/product/817/爆品3@2x.png'
        },
        {
          id: '002',
          imgUrl: 'https://mgg.gzqqs.com/web/mgg-activity/product/817/爆品4@2x.png'
        },
        {
          id: '003',
          imgUrl: 'https://mgg.gzqqs.com/web/mgg-activity/product/817/爆品5@2x.png'
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
    padding-bottom 45.87% // h344 w750  344/750=0.4587
    background-color #eee
    .swiper-img{
      width 100%
    }
  }
</style>
