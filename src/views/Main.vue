<style scoped lang='less'>
    .layout{
        border: 1px solid #d7dde4;
        background: #f6f8f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-header-bar{
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .home_title{
      height: 80px;
      padding: 0 80px;
      line-height: 80px;
      background: #fff;
      font-size: 18px;width: 100%;
      img{
        width: 200px;height: 28px;
      }
    }
    .ivu-menu{
      li{
        padding-left: 80px;
      }
      i{
        position: absolute;
        left: 51px;
        font-size: 25px;
        top: 13px;
        color: #9a9a9a;
      }
    }
    .ivu-menu-item-active{
      color: #fd6e3f!important;
      background: #ededed;
      border-right: 0!important
    }
    .ivu-menu-light{
      background: #f6f8f9;color: #222;
      padding-top: 28px;
      .ivu-menu-item{
          font-size: 18px;
      }
    }
    .ivu-menu-item{
      border-right:0!important
    }
    .menu_:before{
      // content:' ';position: absolute;
      // bottom: 0;left:80px;width:43%;
      // border-top: 1px solid #dbdbdb;
    }
    .menu_list{
      font-size: 14px!important;height: 36px;line-height: 36px;
      padding-top:0;padding-bottom: 0;
    }
    .main_nav{
      padding: 30px 0;font-size: 26px;
    }
    .ivu-menu-vertical.ivu-menu-light:after{
      width: 0
    }
</style>
<style lang='less'>
  @import './less/less.less';
  .home_title{
    .flexbox;.flex-j-b;.flex-a-c;
  }
</style>
<template>
    <div class="layout">
      <div class="home_title">
        <img src="../img/logo.jpg" alt="">
      </div>
        <Sider ref="side1" hide-trigger collapsible :collapsed-width="78"
          :style="{ float:'left', overflow: 'auto',width:'240px',minWidth:'240px',maxWidth:'280px'}">
                <Menu active-name="home_i" width="auto">
                    <MenuItem :name="item.name" v-for='item of getMenuList'
                      @click.native='changeMenu(item)'
                      :key='item.name' :class='[item.istitle?"menu_":"menu_list"]'>
                        <Icon v-if='item.icon' :type="item.icon"></Icon>
                        <span>{{item.title}}</span>
                    </MenuItem>
                </Menu>
            </Sider>
        <Layout :style="{marginLeft: '280px',background: '#f6f8f9'}">
              <div class="main_nav">
                {{navTitle}}
              </div>
              <keep-alive>
                  <router-view></router-view>
              </keep-alive>
        </Layout>
    </div>
</template>
<script>
    import { mapGetters } from 'vuex';
    export default {
      computed:mapGetters([
        'getMenuList'
      ]),
      data () {
        return {
          navTitle: ''
        }
      },
      mounted () {
        this.init();
        this.$nextTick(()=>{
          this.navTitle = this.getMenuList[0].title
        })
      },
      methods: {
        init () {

        },
        changeMenu (item) {
          this.navTitle = item.title;
        }
      }
    }
</script>
