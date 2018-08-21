<template>
  <div>
    <div class='title'>
      <div>周末去哪儿</div>
    </div>
    <ul>
      <li class='item border-bottom' v-for='item in recommendList' :key='item.id'>
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
  data () {
    return {
      recommendList: [
        {
          id: '001',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/92/580e9ea4f37a1b.jpg_r_640x214_72112761.jpg',
          title: '广州必游TOP10',
          desc: '333条评论'
        },
        {
          id: '002',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/92/580e9ea4f37a1b.jpg_r_640x214_72112761.jpg',
          title: '广州长隆旅游度假区',
          desc: '333条评论'
        },
        {
          id: '003',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/92/580e9ea4f37a1b.jpg_r_640x214_72112761.jpg',
          title: '广州长隆旅游度假区',
          desc: '333条评论'
        }
      ]
    }
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
    padding-bottom 33.9%
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
