//首先判断是否有登录
if(sessionStorage.getItem('login_name') === null){
    clear_login_form();
    $('.login').css("display", "block");
    $('.login_box').css('animation','opi 1s');
}
//点击我的收藏
$('#my_collection').click(function () {
    if(sessionStorage.getItem('login_name') === null){
        alert('您还未登陆，无数据');
    }else {
        get_collection();
        $('.my_collection').show();
        $('.my_forum').hide();
    }
});
//点击我的论坛
$('#my_forum').click(function () {
    if(sessionStorage.getItem('login_name') === null){
        alert('您还未登陆，无数据');
    }else {
        get_my_forum();
        $('.my_forum').show();
        $('.my_collection').hide();
    }
});
//实现我的收藏内容的点击功能
$('.my_collection').on('click','img',function () {
    var img_name = $(this).attr('src').split('/')[3];
    var val = img_name.split('.')[0];
    location.href='food_details.html?'+val;
});
//获取收藏的全部内容
function get_collection() {
    var username = sessionStorage.getItem('login_name');
    var data = {username:username};
    $.ajax({
        type:'GET',
        url:'php/get_collection.php',
        data:data,
        success:function (result) {
            if (result.code === 3){
                console.log(result.msg);
            }else if(result.code === 4){
                console.log(result.msg);
            }else if(result.code === 2){
                console.log(result.msg);
            }else{
                var html='';
                $.each(result.data,function (i,c) {
                    html += `
                        <li><img src="${c.cpic}" alt="${c.cname}" ><div>${c.cname}</div></li>
                    `;
                    $('.my_collection').html(html);
                })
            }
        },
        error:function (msg) {
            console.log(msg);
        }
    });
}
//获取所有自己的论谈
function get_my_forum() {
    var username = sessionStorage.getItem('login_name');
    var data = {username:username};
    $.ajax({
        type:'POST',
        url:'php/get_my_forum.php',
        data:data,
        success:function (result) {
            if (result.code === 3){
                console.log(result.msg);
            }else if(result.code === 4){
                console.log(result.msg);
            }else if(result.code === 2){
                console.log(result.msg);
            }else{
                var html='';
                $.each(result.data,function (i,f) {
                    html += `
                        <li>
                            <p><a>${username}:</a>${f.title}</p>
                            <p>${f.content}</p>
                        </li>
                        `;
                    $('.my_forum').html(html);
                })
            }
        },
        error:function (msg) {
            console.log(msg);
        }
    });
}