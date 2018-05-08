// javascript 

$('document').ready(function(){
    var width = (window.innerWidth > 0)? window.innerWidth : screen.width;
    var font = width/375 * 50;
    document.documentElement.style.fontSize = font + "px";

    // //数量增减
    $('.numbox .add').on('click',function(){
        var num = $(".numbox-input").eq($(this).index('.add')).val();
        if( num<10 ){
            num++
            $(".numbox-input").eq($(this).index('.add')).val(num);
        }else{
            return;
        }
    });

    $('.numbox .subt').on("click",function(){
        var num = $(".numbox-input").eq($(this).index('.subt')).val();
        if( num > 1){
            num --;
            $(".numbox-input").eq($(this).index('.subt')).val(num);
        }else{
            return;
        }
    });

    // 订单页面切换
    $('.order-content .order-tit li').on('click',function(){
        $(this).addClass('on').siblings().removeClass('on');
        $('.order-tab').eq($(this).index('.order-tit li')).show().siblings().hide();
    });

});