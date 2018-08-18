<template>
  <div class='header'>
    <div class='header-left'><span class='iconfont icon-fanhui'></span></div>
    <div class='header-input'><span class='iconfont icon-sousuo'></span>请输入城市\景点\游玩主题</div>
    <div class='header-right'>城市<span class='iconfont icon-xiaotuziCduan_'></span></div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang='stylus' scoped>
  @import '~styles/varibles.styl'
.header{
  width 100%;
  height .86rem;
  line-height .86rem;
  display flex;
  background-color $bgColor
  color #fff
  .header-left{
    width .64rem;
    float left;
    .icon-fanhui{
      padding .20rem
    }
  }
  .header-input{
    flex 1;
    border-radius .1rem
    background-color #fff
    margin auto .2rem
    height .64rem
    line-height .64rem
    text-align left
    color #ccc
    padding-left .20rem
  }
  .header-right{
    width 1.24rem;
    float right;
    text-align center
    .icon-xiaotuziCduan_{
      font-size .36rem
    }
  }
}
</style>
