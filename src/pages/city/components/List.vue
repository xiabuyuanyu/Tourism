<template>
  <div class='list' ref='wrapper'>
     <div>
       <div class='area'>
         <div class='title border-topbottom'>当前城市</div>
         <div class='button-list'>
           <div class='button-wrapper'>
             <div class='button'>北京</div>
           </div>
         </div>
       </div>
       <div class='area'>
         <div class='title border-topbottom'>热门城市</div>
         <div class='button-list'>
           <div class='button-wrapper'>
             <div class='button'>北京</div>
           </div>
           <div class='button-wrapper'>
             <div class='button'>北京</div>
           </div>
           <div class='button-wrapper'>
             <div class='button'>北京</div>
           </div>
           <div class='button-wrapper'>
             <div class='button'>北京</div>
           </div>
           <div class='button-wrapper'>
             <div class='button'>北京</div>
           </div>
           <div class='button-wrapper'>
             <div class='button'>北京</div>
           </div>
           <div class='button-wrapper'>
             <div class='button'>北京</div>
           </div>
         </div>
       </div>
       <div class='area'>
         <div class='title border-topbottom'>A</div>
         <ul class='item-list'>
           <li class='border-bottom'>阿拉尔</li>
           <li class='border-bottom'>阿拉尔</li>
           <li class='border-bottom'>阿拉尔</li>
           <li class='border-bottom'>阿拉尔</li>
         </ul>
       </div>
       <div class='area'>
         <div class='title border-topbottom'>B</div>
         <ul class='item-list'>
           <li class='border-bottom'>阿拉尔</li>
           <li class='border-bottom'>阿拉尔</li>
           <li class='border-bottom'>阿拉尔</li>
           <li class='border-bottom'>阿拉尔</li>
         </ul>
       </div>
       <div class='area'>
         <div class='title border-topbottom'>C</div>
         <ul class='item-list'>
           <li class='border-bottom'>阿拉尔</li>
           <li class='border-bottom'>阿拉尔</li>
           <li class='border-bottom'>阿拉尔</li>
           <li class='border-bottom'>阿拉尔</li>
         </ul>
       </div>
       <div class='area'>
         <div class='title border-topbottom'>A</div>
         <ul class='item-list'>
           <li class='border-bottom'>阿拉尔</li>
           <li class='border-bottom'>阿拉尔</li>
           <li class='border-bottom'>阿拉尔</li>
           <li class='border-bottom'>阿拉尔</li>
         </ul>
       </div>
       <div class='area'>
         <div class='title border-topbottom'>B</div>
         <ul class='item-list'>
           <li class='border-bottom'>阿拉尔</li>
           <li class='border-bottom'>阿拉尔</li>
           <li class='border-bottom'>阿拉尔</li>
           <li class='border-bottom'>阿拉尔</li>
         </ul>
       </div>
       <div class='area'>
         <div class='title border-topbottom'>C</div>
         <ul class='item-list'>
           <li class='border-bottom'>阿拉尔</li>
           <li class='border-bottom'>阿拉尔</li>
           <li class='border-bottom'>阿拉尔</li>
           <li class='border-bottom'>阿拉尔</li>
         </ul>
       </div>
     </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  data () {
    return {
      name: []
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style lang='stylus' scoped>
  @import '~styles/varibles.styl'
  .border-topbottom{
    &:before{
      border-color #ccc
    }
    &:after{
      border-color #ccc
    }
  }
  .border-bottom{
    &:before{
      border-color #ccc
    }
  }
  .list{
    position: absolute
    top: 1.55rem;
    left: 0
    bottom: 0
    right: 0
    overflow hidden
    .title{
      line-height: .54rem
      background-color #eee
      padding-left: .2rem
      color #666
      font-size .26rem
    }
    .button-list{
      padding: .1rem .6rem  .1rem .1rem
      display flex
      flex-wrap wrap
      .button-wrapper{
        width: 33.33%
        .button{
          text-align center
          border:.02rem solid #ccc
          margin .1rem
          padding: .1rem 0
          border-radius .06rem
        }
      }
    }
    .item-list{
      li{
        line-height: .70rem
        padding-left .2rem
      }
    }
  }
</style>
