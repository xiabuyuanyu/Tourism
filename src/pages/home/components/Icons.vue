<template>
  <div class='icons'>
    <swiper>
      <swiper-slide>
        <div class='icon' v-for='item in iconList' :key='item.id'>
          <div class='icon-img'>
            <img :src="item.iconUrl" alt="" class='icon-img-content'>
          </div>
          <p class='icon-desc'>主题</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'Icons',
  data () {
    return {
      swiperOption: {
        autoplay: false
      },
      iconList: [
        {
          id: '001',
          iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc: '景点门票'
        },
        {
          id: '002',
          iconUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
          desc: '广州必游'
        },
        {
          id: '003',
          iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
          desc: '动植物园'
        },
        {
          id: '004',
          iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
          desc: '两江夜游'
        },
        {
          id: '005',
          iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/89/55083b0f1951f302.png',
          desc: '游乐场'
        },
        {
          id: '006',
          iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/6a/45f595250c73d102.png',
          desc: '夏日玩水'
        },
        {
          id: '007',
          iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png',
          desc: '城市观光'
        },
        {
          id: '007',
          iconUrl: 'http://img1.qunarzz.com/piao/fusion/1804/95/8d02011d149bdb02.png',
          desc: '汽车票'
        }
      ]
    }
  }
}
</script>

<style lang='stylus' scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .icons >>> .swiper-container
    height: 0
    padding-bottom: 50% // 比例1：2
  .icons
    margin-top: .1rem
    .icon
      position: relative
      overflow: hidden
      float: left
      width: 25%
      height: 0
      padding-bottom: 25%
      .icon-img
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: .44rem
        box-sizing: border-box
        padding: .1rem
        .icon-img-content
          display: block
          margin: 0 auto
          height: 100%
      .icon-desc
        position: absolute
        left: 0
        right: 0
        bottom: 0
        height: .44rem
        line-height: .44rem
        text-align: center
        color: $darkTextColor
        ellipsis()
</style>
