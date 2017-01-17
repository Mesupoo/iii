//实现展开全部
$('.forum_content_middle').on('click','.forum_open',function () {
    $(this).css({
        color:'#666',
        overflow:'visible',
        height:'auto',
        width:'auto'
    });
});
$('.forum_content_middle').on('click','.content_last',function () {
    $(this).hide();
});
//显示写文章界面
$('.forum_content_top').on('click','a',function () {
    if (sessionStorage.getItem('login_name') === null) {
        $('.login').css("display", "block");
    } else {
        $('.question').css("display", "block");
        $('#question_title').val('');
        $('#question_content').val('');
    }
});
// $('.forum_article').click(function () {
//
// });
// 写文章退出功能
$('#question_exit').click(function () {
    $('.question').css("display", "none");
});
// 异步实现保存写文章内容
$('#publish').click(function () {
    var title = $('#question_title').val();
    var content = $('#question_content').val();
    var username = sessionStorage.getItem('login_name');
    data = {username:username,title:title,content:content};
    $.ajax({
        type:'POST',
        url:'php/my_forum.php',
        data:data,
        success:function (result) {
            if (result.code === 1){
                console.log(result.msg);
            }else{
                console.log(result.msg);
            }
        },
        error:function (msg) {
            console.log(msg);
        }
    });
   location.href = 'my_forum.html';
});
//实现将数据库内容显示在界面上
get_forum();
function get_forum() {
    $.ajax({
        type:'POST',
        url:'php/get_forum.php',
        success:function (result) {
            if (result.code === 1){
                var html ='';
                $.each(result.data,function (i,p) {
                    if(p.content.length >83){
                        var content = p.content.slice(0,83);
                        var content1 = p.content.slice(83);
                        html = `
                        <li class="forum_content_list">
                            <dt class="forum_content_title"><a href="#">${p.userName}:</a>${p.title}</dt>
                            <dd class="forum_content_article">
                                <span> ${content}</span>
                                <span class="forum_open">
                                    <span class="content_last">&nbsp;&nbsp;...&nbsp;&nbsp;展开全部</span>
                                    <span>
                                        ${content1}
                                    </span>
                                </span>
                            </dd>
                        </li>
                        `;
                    }else{
                       html = `
                            <li class="forum_content_list">
                                <dt class="forum_content_title"><a href="#">${p.userName}:</a>${p.title}</dt>
                                <dd class="forum_content_article">${p.content}</dd>
                            </li>
                        `;
                    }
                   $('.forum_content_middle').prepend(html);
                });
            }
        },
        error:function (msg) {
            alert(msg);
        }
    });
}
























