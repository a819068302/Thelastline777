<template>
  <div id="app">
    <div id="tabbar" >
      <template v-for="(item,index) in tabbar" >
        <router-link :to="item.path" :key="index">
          <span class="T1">{{item.title}}</span>
        </router-link>
      </template>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data() {
    return {
      tabbar: [
        {title: "邹", path: "/zou",name:"zou"},
        {title: "李", path: "/li",name:"li"},
        {title: "王", path: "/wang",name:"wang"},
        {title: "冯", path: "/feng",name:"feng"},
      ]
    }
  },
  computed: {
    ...mapState(['show'])
  },
}
</script>

<style lang="scss">
  #tabbar{
    z-index:99;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    left: 0;
    right: 0;
	top:0;
    height: 48px;
    border-top: 1px solid #d8d8d8;
    background: #fff;
    a{
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      flex: 1;
      height: 100%;
      color: #696969;
      span{
        font-size: 20px;
      }
      &.router-link-active{
        color: #f03d37;
      }
    }
  }
  a{
    color: #000;
    text-decoration: none;
  }
</style>
