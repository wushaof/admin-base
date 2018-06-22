<style lang="less">
  @import './home.less';
  @import '../less/less.less';
  .home_badge{
    .ivu-badge-count{
      top: -53px;right: 4px;
    }
  }
  .home_chatbox{
    background: #f7f7f7;
    .ivu-card-body{
      .flexbox;.flex-d-c;
      background: #fff;
    }
  }
  .home_page_{
    margin-left: 10px;
    .ivu-page-total{
      margin-right: 0!important;
    }
  }
</style>
<style lang="less" scoped>
  @import '../less/less.less';
  .ivu-layout-sider{
    background: #fff!important;
  }
  .ivu-menu-item-active{
    background: #eeeeee!important;
  }
  .ivu-menu-item:hover{
    background: #eeeeee!important
  }
  .chat_header{
    padding: 10px 20px 8px;
    border-bottom: 1px solid #e9eced;
    .p3{
      span{
        font-size: 20px;color: #0e0e0e;
      }
    }
    .p4{
      font-size: 12px;color: #4e4e4e;padding-top: 3px;
    }
  }
  .chat_body{
    .flex-1;padding: 20px;overflow-y: scroll;
  }
  .chat_footer{
    border-top: 1px solid #e9eced;background: #ffffff;
    position: relative;height: 200px;
  }
  .chat_input{
    resize: none;border: 0;height: 180px;
    outline: none;width: 100%;padding: 10px;
    font-size: 14px;color: #222;
  }
  .chat_btn{
    .flexbox;
    .flex-d-c;
    .flex-j-c;
    -moz-user-select: none; -khtml-user-select: none; user-select: none;
    background: #fd6e3f;color: #fff;font-size: 16px;
    width: 88px;text-align: center;height: 44px;bottom: 10px;
    border-radius: 8px;position: absolute;right: 10px;
    span{
      font-size: 14px;
      margin-top: -3px;
    }
  }
  .chat_left{
    margin-bottom: 20px;
    .chat_bubble{
      border-top-right-radius: 12px;
      border-bottom-right-radius: 12px;
      border-bottom-left-radius: 12px;
      background: #f5f5f5;
      display: inline-block;
      padding: 14px;margin-top: 10px;
    }
    p{
      font-size: 12px;color: #8d8d8d;
      i{
        font-size: 14px;color: #222;font-size: 16px;
      }
      span{
        margin: 0 10px;
        color: #8d8d8d;
      }
    }
  }
  .chat_right{
    text-align: right;margin-bottom: 20px;
    .p_time{
      font-size: 12px;color: #8d8d8d;
      em{
        margin: 0 10px;
      }
      i{
        font-size: 16px;color: #222;
      }
    }
    .chat_bubble{
      border-top-left-radius: 12px;
      border-bottom-right-radius: 12px;
      border-bottom-left-radius: 12px;
      background: #fbe9e2;
      padding: 14px;
      max-width: 80%;
      display: inline-block;
      text-align: left;margin-top: 10px;
    }
    .chat_tip{
      text-align: right;
      color: #1f75d5;
      font-size: 14px;
      i{
        font-size: 12px;position: relative;top: -1px;
        margin: 0 5px;
      }
      span,em{
        cursor: pointer;
      }
    }
  }
  .timeslot{
    width: 100%;
  }
  .chat_content{
    box-shadow: 1px 1px 4px #bbbbbb;
  }

</style>
<template>

  <Content :style="{}">
      <template>
          <Row class='chat_content'>
              <Col span="18" push="6">
                <Card class='home_chatbox' dis-hover>
                    <div class='chat_header'>
                      <p class='p3'><span>用户123</span></p>
                      <p class='p4'>手机号：<span>1888888888</span></p>
                    </div>

                    <div class="chat_body" ref='chat_body'>
                      <div class="" v-for='item in messageList'>

                        <section class='chat_right'>
                          <p class='p_time'><span>2018-15-5</span><em>13:30</em><i>用户123</i></p>
                          <div class="chat_bubble">
                            <p class='p_p'>怎么变更过给你拉嘎你了哈哈你了哈哈弄好啦,怎么变更过给你拉嘎你了哈哈你了哈哈弄好啦怎么变更过给你拉嘎你了哈哈你了哈哈弄好啦
                              怎么变更过给你拉嘎你了哈哈你了哈哈弄好啦怎么变更过给你拉嘎你了哈哈你了哈哈弄好啦，怎么变更过给你拉嘎你了哈哈你了哈哈弄好啦
                              怎么变更过给你拉嘎你了哈哈你了哈哈弄好啦，怎么变更过给你拉嘎你了哈哈你了哈哈弄好啦</p>
                              <p class="chat_tip">
                                <span>报错</span> <i>|</i> <em>教育ta</em>
                              </p>
                            </div>
                          </section>

                          <section class='chat_left'>
                            <p><i>用户123</i><span>2018-15-5</span><em>13:30</em></p>
                            <div class="chat_bubble">
                              怎么变更过给你拉嘎你了哈哈你了哈哈弄好啦
                            </div>
                          </section>
                      </div>
                    </div>

                    <div class="chat_footer">
                      <textarea class='chat_input' name="name" placeholder="请输入描述" v-model='textMsg'></textarea>
                      <div class="chat_btn" @click='emit'>
                        <p>发送</p>
                        <span>Ctrl+Enter</span>
                      </div>
                    </div>
                </Card>
              </Col>
              <Col span="6" pull="18">
                <Card class='list_left' dis-hover>
                    <!-- <Input v-model="searchVal" placeholder='搜索用户' icon="ios-search" class='input_search'></Input> -->
                    <Row class='home-data'>
                      <Col span="10">
                        <DatePicker type="date" placeholder="日期筛选" style=""></DatePicker>
                      </Col>
                      <Col span="13" offset='1'>
                        <DatePicker type="daterange" placement="bottom-end" placeholder="时间段筛选" class='timeslot'></DatePicker>
                      </Col>
                    </Row>
                    <div class='chatlist_scroll' ref='chatlist_scroll'>
                          <Sider breakpoint="md" collapsible :collapsed-width="78" class=''>
                              <Menu active-name="1" width="auto" class='message_list_box'>
                                  <MenuItem :name="index" v-for='(item,index) of userList' :key='item.id' @click.native='clickChatList(item)'>
                                    <div class="message_list">
                                      <div class="img">
                                        <img :src="item.uhead" alt="">
                                        <!-- <Badge count="3" class='home_badge'>
                                            <a href="#" class="demo-badge"></a>
                                        </Badge> -->
                                      </div>
                                      <div class="right_">
                                        <p class='p1'>
                                          <span>{{item.uname}}</span>
                                          <em>{{item.time | DataTime}}</em>
                                        </p>
                                        <p class='p2'>
                                          <span v-html='item.content'></span>
                                          <!-- <Tag type="border" color='#fd6e3f'>已回复</Tag> -->
                                        </p>
                                      </div>
                                    </div>
                                  </MenuItem>
                              </Menu>
                              <div slot="trigger"></div>
                          </Sider>
                          <Page :total="60" size="small" class='home_page_' show-elevator :style='{position:"absolute" ,bottom:"30px"}'></Page>
                    </div>
                </Card>
              </Col>
          </Row>

      </template>
  </Content>
</template>

<script>
    import util from '@/libs/util';
    import socket from '@/socket/socket';
    export default {
        data () {
            return {
                searchVal:'',
                clientHeight: util.clientHeight(),
                userList: [],
                textMsg: '',
                pageNum: 1,
                messageList:[
                  {},
                  {},
                  {},
                  {},
                  {},
                ]
            }
        },
        mounted () {
          this.init();
          this.resize();
          this.onSocket();
          const userInfo = {
            name: 'tom',
            id: '12',
            sender_type :1,
            compid: '4e7a7fb494514ec49a158106a2acfce9',
            cuid: 28

          };
          socket.init(userInfo);
        },
        methods: {
          init () {
            this.getData()
          },
          getData () {
            const data = {
              compid: '4e7a7fb494514ec49a158106a2acfce9',
              page: this.pageNum,
              uname: '',
              stime: '',
              etime: ''
            };
            this.api.post('/comp/users', data, res=>{
              if(res.code == 0){
                this.userList = res.msg.users;
              }
            })

          },
          onSocket () {
            socket.addcallback({    //
                'key': 'newMsg', 'value': function (state, data) {
                    console.log(state);
                    console.log(data);
                }
            });
          },
          clickChatList (item) {
            var data = {
              compid: '4e7a7fb494514ec49a158106a2acfce9',
              page: this.pageNum
            };
            if(item.uid){
              data.uid = item.uid
            }else if(item.cuid){
              data.uid = item.cuid
            }
            this.api.post('/comp/msgs', data, res => {
              console.log(res);
            })
          },
          resize () {
            let dom  = document.querySelector('.home_chatbox .ivu-card-body');
            dom.style.height = this.clientHeight - 80 - 100 + 'px';
            this.$refs.chatlist_scroll.style.height = this.clientHeight - 250 + 'px';
          },
          emit () {
            this.sccrollBottom();
            const data = {
              compid: '4e7a7fb494514ec49a158106a2acfce9',
              role: 3,
              cuid: 28,
              content: this.textMsg,
              name: '游客20',
              roletype: 2
            }
            socket.emitMsg('chat', data)
          },
          sccrollBottom () {
            this.$refs.chat_body.scrollTop = this.$refs.chat_body.scrollHeight
          }
        }
    }
</script>
