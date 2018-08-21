<template>
  <div>
    <div class='title'>
      <div>周末去哪儿</div>
    </div>
    <ul>
      <li class='item border-bottom' v-for='item in list' :key='item.id'>
        <div class='item-img-wrapper'>
          <img :src="item.imgUrl" alt="" class='item-img'/>
        </div>
        <div class='item-info'>
          <p class='item-title'>{{item.title}}</p>
          <p class='item-desc'>{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
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
  .item-img-wrapper{
    height: 0
    overflow hidden
    padding-bottom 37.09%
    .item-img{
      width: 100%
    }
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
  }
</style>
