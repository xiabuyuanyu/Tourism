<template>
  <div class='banner' @click.stop='handleBannerClick'>
    <img src="//img1.qunarzz.com/sight/p0/1603/3b/3bd311262ee06d8c90.img.jpg_600x330_cd2e3bf7.jpg" alt="" class='banner-img'>
    <div class='banner-info'>
      <div class='banner-tittle'>大连亚圣旅游区</div>
      <div class='banner-number'><span class='iconfont icon-sousuo'></span>13{{showGallary}}</div>
    </div>
    <common-gallary :imgs='imgs' v-show='showGallary' @close='handleGallaryClose'></common-gallary>
  </div>
</template>

<script>

import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'banner',
  data () {
    return {
      showGallary: false,
      imgs: ['//img1.qunarzz.com/sight/p0/1603/3b/3bd311262ee06d8c90.img.jpg_600x330_cd2e3bf7.jpg', 'http://img1.qunarzz.com/sight/p0/201403/07/452bd2d46925768793ff15a853899211.jpg_350x240_e61b5db4.jpg']
    }
  },
  components: {
    CommonGallary
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  }
}
</script>

<style lang='stylus' scoped>
.banner{
  overflow hidden
  height: 0
  padding-bottom: 55%
  position: relative
  .banner-img{
    width: 100%
  }
  .banner-info{
    position: absolute
    left: 0
    bottom: 0
    right: 0
    display flex
    line-height: .6rem
    color #fff
    background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
    .banner-tittle{
      padding: 0 .2rem
      font-size .32rem
      flex 1
    }
    .banner-number{
      height: .32rem
      line-height: .32rem
      margin-top: .14rem
      padding: 0 .4rem
      border-radius: .2rem
      background: rgba(0, 0, 0, .8)
      font-size: .24rem
      .banner-icon{
        font-size: .24rem
      }
    }
  }
}
</style>
