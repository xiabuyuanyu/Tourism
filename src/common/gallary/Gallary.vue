<template>
  <div class='container' @click.stop='handleGallaryClick'>
    <div class='wrapper'>
      <swiper :options="swiperOption">
        <swiper-slide v-for='(item, index) in imgs' :key='index'>
          <img :src="item" alt="" class='gallary-img'>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'gallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return ['//img1.qunarzz.com/sight/p0/1603/3b/3bd311262ee06d8c90.img.jpg_600x330_cd2e3bf7.jpg', 'http://img1.qunarzz.com/sight/p0/201403/07/452bd2d46925768793ff15a853899211.jpg_350x240_e61b5db4.jpg']
      }
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination', // 索引点
        loop: false, // 循环播放
        paginationType: 'fraction',
        observeParents: true, // 重新计算属性
        observer: true // 自我刷新
      }
    }
  },
  methods: {
    handleGallaryClick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang='stylus' scoped>
.container >>> .swiper-container{
  overflow inherit
}
.container{
  z-index 10
  display flex
  flex-direction column
  justify-content center
  position: fixed
  top: 0
  left: 0
  bottom: 0
  right 0
  background-color #000
  .wrapper{
    height: 0
    width: 100%
    padding-bottom 100%
    .gallary-img{
      width: 100%
    }
    .swiper-pagination{
      color #fff
      bottom -1rem
    }
  }
}
</style>
