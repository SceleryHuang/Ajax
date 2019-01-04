function myAjax(url,fnSucc,fnFail) {
    //创建对象
    if (window.XMLHttpRequest){
        var newajax = new XMLHttpRequest();
    }
    else {
        var newajax = new ActiveXObject("Microsoft.XMLHTTP");
    }
    //链接服务器
    newajax.open("GET",url,true);

    //发送
    newajax.send();

    //接收
    newajax.onreadystatechange = function () {
        if(newajax.readyState == 4){
            if(newajax.status == 200){
                fnSucc(newajax.responseText);
            }else {
                if(fnFail) {
                    fnFail();
                }
            }
        }

    }





}