//实现搜索功能
$('#btn_search').click(function () {
    var input = $('#input_search').val();
    var data = {input:input};
    $.ajax({
        type:'POST',
        url:'php/search.php',
        data:data,
        success(result){
            var html = '';
            if(result.code === 2){
                $('#input_search').val(result.msg);
            }else if (result.code === 3){
                console.log(result.msg);
            }else if (result.code ===4){
                $('.search').css('display','block');
                $('.search_panel').css('display','block');
                $('#search_result').html('<h3>'+result.msg+'</h3>');
            }else if (result.code ===1){
                $('.search').css('display','block');
                $('.search_panel').css('display','block');
                $.each(result.data,function (i,r) {
                    html += `
                    <li>
                        <img src="${r.pic}" alt="未加载">
                        <span>${r.pname}</span>
                    </li>
                    `;
                });
                $('#search_result').html(html);
            }
        }
    });

});
//超链接传值到details界面
$('#search_result').on('click','li',function () {
    console.log($(this).find('img'));
    var img_name = $(this).find('img').attr('src').split('/')[3];
    var val = img_name.split('.')[0];
    location.href='food_details.html?'+val;
});
$('.search').click(function () {
    $('.search').css('display','none');
    $('.search_panel').css('display','none');
    $('#input_search').val('');
});
// 登录功能所有元素都为php加载，，需使用父元素代理操作on方法
//加载foot.php
$('#foot_php').load('php/footer.php');
//判断sessionsstorge是否有数据
if (sessionStorage.getItem('login_name') !== null) {
    login_success(sessionStorage.getItem('login_name'));
}
//点击my_resume的退出实现
$('.my_resume_exit').click(function () {
    sessionStorage.removeItem("login_name");
    sessionStorage.removeItem("login_upwd");
});
//实现×事件register-close
$('#head_php').on('click', '.dialog_close', function () {
    $(this).parent().css("display", "none");
});
//点击注册按钮出现注册界面,并清空表单内容
$('#head_php').on('click', '#regist', function () {
    clear_register_form();                //清空注册表单
    $('.register').css("display", "block");
    //注册动画
    $('.register_box').css('animation','opii 1s');
});
//点击登录按钮出现登录界面，并清空表单内容
$('#head_php').on('click', '#login', function () {
    clear_login_form();                 //清空登录表单
    $('.login').css("display", "block");
    //登录界面出现动画
    $('.login_box').css('animation','opi 1s');
});
//已经有账号了
$('#head_php').on('click', '.already_id', function () {
    clear_login_form();                 //清空登录表单
    $('.register').css("display", "none");//跳转到登录界面
    $('.login').css("display", "block");
});
// 实现异步注册功能
$('#head_php').on('click', '#btn_register', function () {
    // 收集用户输入的数据
    var data = $('#register_form').serialize();
    //ajax异步处理
    $.ajax({
        type: 'POST',
        url: 'php/register.php',
        data: data,
        success: function (result) {
            console.log('响应完成且成功');
            console.log(result);
            if (result.code === 2) {
                $('p.dialog_alert').html(result.msg);
                return;
            } else if (result.code === 3) {
                $('#require_name').addClass("isblock");
                $('#register_name').focus(function () {
                    $('#require_name').removeClass("isblock");
                });
                return;
            } else if (result.code === 4) {
                $('#require_upwd').addClass("isblock");
                $('#register_upwd').focus(function () {
                    $('#require_upwd').removeClass("isblock");
                });
                return;
            } else {
                //注册成功
                $('p.dialog_alert').html("注册成功");
                //动画
                $('.register_box').css('animation','opi_success 1s');
                setTimeout(function () {
                    $('.register').css("display", "none");//跳转到登录界面
                    $('.login').css("display", "block");
                    $('.login_box').css('animation','opi 1s');
                    clear_login_form();             //清空登录表单
                }, 1000);
            }
        },
        error: function () {
            alert('响应成功但是有问题');
            console.log(arguments);
        }
    });
});
//实现异步登录功能
$('#head_php').on('click', '#btn_login', function () {
    // 收集用户输入的数据
    var data1 = $('#login_form').serialize();
    //ajax异步处理
    $.ajax({
        type: 'POST',
        url: 'php/login.php',
        data: data1,
        success: function (result) {
            console.log('响应完成且成功');
            console.log(result);
            if (result.code === 2) {
                $('p.dialog_alert1').html(result.msg);
                return;
            } else if (result.code === 3) {
                $('#require_name1').addClass("isblock");
                $('#login_name').focus(function () {
                    $('#require_name1').removeClass("isblock");
                });
                return;
            } else if (result.code === 4) {
                $('#require_upwd1').addClass("isblock");
                $('#login_upwd').focus(function () {
                    $('#require_upwd1').removeClass("isblock");
                });
                return;
            } else {
                //登录成功
                $('p.dialog_alert1').html("登录成功");
                setTimeout(function () {
                    $('.login').css("display", "none");

                }, 1500);
                //实现将登录注册链接换成我的主页将数据存到sessionstorge
                sessionStorage.setItem("login_name", result.login_name);
                sessionStorage.setItem("login_upwd", result.login_upwd);
                login_success(sessionStorage.getItem('login_name'));
            }
        },
        error: function () {
            console.log('响应成功但是有问题');
            console.log(arguments);
        }
    });
});
//清空登录表单
function clear_login_form() {
    $("#login_name").val("");
    $("#login_upwd").val("");
    $('.dialog_alert1').html("");
}
//清空注册表单
function clear_register_form() {
    $("#register_name").val("");
    $("#register_upwd").val("");
    $('.dialog_alert').html("");
}
//登录成功后执行
//实现将登录注册链接换成我的主页将数据存到sessionstorge
//必须传入log_name参数
function login_success(login_name) {
    $('#regist').remove();
    $('#login').remove();
    $('#my_resume').css("display", "block");
    $('#my_resume>a>span').html(login_name);
    $('.login').css('animation','opi_success 1.5s');
}
