<template>
    <div>
      <div class='title'>
        <div>热销推荐</div>
      </div>
      <ul>
        <router-link class='item border-bottom' v-for='item in list' :key='item.id' :to="'/detail/'+item.id" tag='li'>
          <div class='item-img-wrapper'>
            <img :src="item.imgUrl" alt="" class='item-img'/>
          </div>
          <div class='item-info'>
            <p class='item-title'>{{item.title}}</p>
            <p class='item-desc'>{{item.desc}}</p>
            <button class="item-button">查看详情</button>
          </div>
        </router-link>
        <!--<li class='item border-bottom' v-for='item in list' :key='item.id'>
          <div class='item-img-wrapper'>
            <img :src="item.imgUrl" alt="" class='item-img'/>
          </div>
          <div class='item-info'>
            <p class='item-title'>{{item.title}}</p>
            <p class='item-desc'>{{item.desc}}</p>
            <button class="item-button">查看详情</button>
          </div>
        </li>-->
      </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    'list': Array
  }
}
</script>

<style lang='stylus' scoped>
  @import '~styles/mixins.styl'
  .title{
    text-indent .2rem
    background-color #eee
    line-height .8rem
    text-align left
  }
  .item{
    display flex
    overflow hidden
    height: 1.9rem
    min-width: 0;
    .item-img{
      width: 1.7rem
      height: 1.7rem
      padding .1rem
    }
    .item-info{
      flex 1
      padding .1rem
      .item-title{
        font-size .32rem
        line-height .54rem
        ellipsis()
      }
      .item-desc{
        color #ccc
        line-height .4rem
        ellipsis()
      }
      .item-button{
        line-height: .3rem
        margin-top .16rem
        background-color #ff9300
        padding .1rem
        border-radius .06rem
        color #fff
      }
    }
  }
</style>
