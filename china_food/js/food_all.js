//超链接传值到details界面
$('#food_items_list').on('click','img',function () {
    var img_name = $(this).attr('src').split('/')[3];
    var val = img_name.split('.')[0];
    location.href='food_details.html?'+val;
});
//实现数据在八大菜系之间切换
$("#btn_food").on("click","a", function (e) {
    e.preventDefault();
    //实现异步加载当前标签的数据
        var pstyle = $(this).attr("href");
        product_select(1,pstyle);//默认加载菜系第一页
        change_collection();//更改收藏图标
    //实现点击后左侧导航栏改变背景色，，离开当前页面返回原来颜色
        change_bgcolor('.food_nav>ul>li>a');
        $(this).css('background','gray');
    //实现food_show的切换，即：页面内导航
        var $list =  $("#food_items_list").children("div");
        for(var i =0;i<$list.length;i++) {
            if ($(this).attr("href") === $list[i].id) {
                if ($list[i].className !== "food_show") {
                    for(var j = 0;j<$list.length;j++){
                        $list[j].className = "food_hidden";
                    }
                    $list[i].className = "food_show";
                }
            }
        }
        return false; //阻止href跳转
    });
//实现点击后左侧导航栏改变背景色，，离开当前页面返回原来颜色的函数
function change_bgcolor(position) {
    $(position).each(function () {
        if ($(this).css('background-color') === 'rgb(128, 128, 128)') {
            $(this).css('background', 'wheat');
        }
    });
}
//实现收藏功能
$('#food_items_list').on('click','.collection',function () {
//首先判断是否登陆
    if(sessionStorage.getItem('login_name') === null){
        clear_login_form();
        $('.login').css("display", "block");
        $('.login_box').css('animation','opi 1s');
        return;
    }
    //更改收藏图标
    $(this).css({
        "background":"url(images/coll_2.png) no-repeat right",
        "color":"#ff646c"
    });
    //////////
    var cname = $(this).parent().html().split('<a')[0];
    var cpic = $(this).parent().prev().attr("src");
    var username = sessionStorage.getItem('login_name');
    data = {username:username,cname:cname,cpic:cpic};
    $.ajax({
        type:'POST',
        url:'php/collection.php',
        data:data,
        success:function (result) {
            if(result.code === 1){
                console.log(result.msg);
            }else{
                alert(result.msg);
            }
        },
        error:function (msg) {
            console.log("响应成功但又问题");
            console.log(msg);
        }
    });
});
