import io_ from './socket.io.js';
import {socketUrl} from '../libs/env.js';
var callbackList={};
var userInfo;
var io;
export default{
  emitMsg:function(name,json){
    io.emit(name, json);
  },
  con:function(){
    if (io === undefined || io === null){
      io = io_.connect(socketUrl);
    }
  },
  init:function(_userInfo){
    userInfo = _userInfo;
    this.con();
    this.emitMsg("login",_userInfo);
    var that = this;
    io.on('connect', function () {
        
    });
    io.on("newMsg",function(result){  //聊天室
      var state={code:result.code};
      if(callbackList && callbackList['newMsg']){
        callbackList['newMsg'](state,result.msg);
      }
    });

  },
  addcallback:function(callback){
    if(callback){
      callbackList[callback.key]=callback.value;
    }
  },
  removecallback:function(key){
    if(callbackList && callbackList[key]){
      callbackList[key]=null;
    }
  }

}
