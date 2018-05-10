/**
 * Created by Administrator on 2018/5/9/009.
 */
let backTop = document.getElementById("backTop");
window.onscroll = scroll;
function scroll() {
    let scrollTop = 0;
    if(document.documentElement&&document.documentElement.scrollTop){
        scrollTop=document.documentElement.scrollTop;
    }else if(document.body){
        scrollTop=document.body.scrollTop;
    }
    if(scrollTop!==0){
        backTop.style.bottom = "10px";
    }else{
        backTop.style.bottom = "-150px";
    }
}
backTop.onclick = function () {
    let time = setInterval(function () {
        if(document.documentElement.scrollTop>10){
            document.documentElement.scrollTop -= 50;
        }else if(document.documentElement.scrollTop<10&&document.documentElement.scrollTop>0){
            document.documentElement.scrollTop = 0;
        }else if(document.documentElement.scrollTop === 0){
            clearTimeout(time);
        }
    },16.6666);
}