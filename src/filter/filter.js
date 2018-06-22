module.exports = {
  Time:function(dateTimeStamp){
    var minute = 1000 * 60,result;
    var hour = minute * 60;
    var day = hour * 24;
    var halfamonth = day * 15;
    var month = day * 30;
    var now = new Date().getTime();
    var dateTimeStamp=dateTimeStamp*1000;
    var diffValue = now - dateTimeStamp;
    if(diffValue < 0){return;}
    var dayC =diffValue/day;
    var hourC =diffValue/hour;
    var minC =diffValue/minute;
    if(dayC>1){
      result=new Date(dateTimeStamp).toLocaleString();
      result=result.split(' ')[0];
      result=result.split('/');
      if(result[1].length==1){
        result[1]='0'+result[1]
      };
      if(result[2].length==1){
        result[2]='0'+result[2];
      }
      result=result[1]+'-'+result[2]
    }else if(hourC>=1){
      result=""+ parseInt(hourC) +"小时前";
    }else if(minC>=1){
      result=""+ parseInt(minC) +"分钟前";
    }else{
      result="刚刚";
    }
    return result;
  },
  DataTime:function(res){
    var data=new Date(parseInt(res)*1000).toString();
    var data1=new Date(parseInt(res)*1000).toLocaleString();
    data=data.split(' ')[4];
    data=data.split(':')[0]+':'+data.split(':')[1];
    data1=data1.split(' ')[0];
    var m=data1.split('/')[1];
    var d=data1.split('/')[2];
    if(m.length==1){
      m='0'+m;
    }
    if(d.length==1){
      d='0'+d;
    }
    return m+"-"+d+' '+data
  }
}
