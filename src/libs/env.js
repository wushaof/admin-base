const env = process.env.NODE_ENV;
var httpUrl, socketUrl;
  if(env == 'development'){  //开发
    httpUrl = 'http://192.168.1.38:3001';
    socketUrl = 'http://192.168.1.38:3001/legal/';
  }else if(env == 'production'){   //生产

  }

module.exports = {
  httpUrl,
  socketUrl
}
