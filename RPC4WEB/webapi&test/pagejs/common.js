/**
 * Created by gexiangtong on 2018/7/26.
 */


function GetQueryString(name)
{
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null){
        return unescape(r[2]);
    }else {
        return null;
    }
}

function changeNull(name) {
    if (name==null || name=="null"){
        return "0";
    }else {
        return name;
    }
}

function getStringValue(name) {
    if (name==null || name=="null"){
        return "";
    }else {
        return name;
    }
}

//精确至天
function getDateWithDayValue(date) {
    var newDate=/\d{4}-\d{1,2}-\d{1,2}/g.exec(date);
    return newDate;
}

function addcookie(name,value,expireHours){
    var cookieString=name+"="+encodeURIComponent(value)+"; path=/";
    //判断是否设置过期时间
    if(expireHours>0){
        var date=new Date();
        date.setTime(date.getTime+expireHours*3600*1000);
        cookieString=cookieString+"; expire="+date.toGMTString();
    }
    document.cookie=cookieString;
}

function getcookie(name){
    var strcookie=document.cookie;
    var arrcookie=strcookie.split("; ");
    for(var i=0;i<arrcookie.length;i++){
        var arr=arrcookie[i].split("=");
        if(arr[0]==name)return decodeURIComponent(arr[1]); //增加对特殊字符的解析
    }
    return "";
}

function delCookie(name){//删除cookie
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval=getcookie(name);
    if(cval!=null) document.cookie= name + "="+cval+"; path=/;expires="+exp.toGMTString();
}