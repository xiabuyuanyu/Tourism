<template>
  <ul class='list'>
    <li v-for='item in letters' :ref='item' :key='item' @click='handletter(item)' @touchstart='handleTouchStart' @touchmove='handleTouchMove' @touchend='handleTouchEnd'>{{item}}</li>
  </ul>
</template>

<script>
export default {
  name: 'Alphabet',
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null // 截流
    }
  },
  updated () {
    // A距离顶部的距离
    this.startY = this.$refs['A'][0].offsetTop
  },
  props: {
    cities: Object
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  methods: {
    handletter (red) {
      this.$emit('change', red)
      // this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          // 43+36=79 e.touchY[0].clientY 表示点击地方到页面顶部的高度
          const touchY = e.touches[0].clientY - 79
          // 每个字母的高度20  向下取整
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang='stylus' scoped>
  @import '~styles/varibles.styl'
  .list{
    position: absolute
    right 0
    bottom 0
    top 1.6rem
    width .4rem
    display flex
    flex-direction column // 垂直居中
    justify-content center
    li{
      text-align center
      line-height .4rem
      color $bgColor
    }
  }
</style>
