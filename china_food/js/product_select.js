//默认界面为分页1和川菜
product_select(1,"food_chuan");
change_collection();
//实现分页导航的点击事件 通过on事件代理 必须通过e.preventDefault取消a元素的默认事件
$('.product_nav').on('click','a',function(e){
    e.preventDefault();

    var pageNum = $(this).attr("href");
    var pstyle = $('.food_show').attr('id');
    product_select(pageNum,pstyle);
    change_collection();
});
//异步加载数据库数据实现导航且分页的函数 ---- 参数为当前页和菜类型
function product_select(pageNum,pstyle) {
    $.ajax({
        type:'POST',
        url:'php/product_select.php',
        data:{pageNum:pageNum,pstyle:pstyle},
        success:function (result) {
            if (result.pageCount === 0){
                $('.product_nav').html("<h1>抱歉，目前没有内容</h1>");
            }else{
            var html = "";
            //遍历返回结果中的数据
            $.each(result.data,function (i,p) {
                html+=`
                    <ul class="food_list">
                        <li>
                            <img src="${p.pic}" />
                            <div class="info_item" title="${p.pname}">${p.pname}<a class="collection">收藏</a></div>
                        </li>
                    </ul>
                `;
            });
            $('#'+result.data[0].pstyle).html(html);

            //产品导航条，，下面的
            var html = '';
            if(result.pageCount===1){
                html += `<li><a href="1">1</a></li>`;
            }else if(result.pageCount===2){
                html += `<li><a href="1">1</a></li>`;
                html += `<li><a href="2">2</a></li>`;
            }else if(result.pageCount===3){
                html += `<li><a href="1">1</a></li>`;
                html += `<li><a href="2">2</a></li>`;
                html += `<li><a href="3">3</a></li>`;
            }else if(result.pageCount===4){
                html += `<li><a href="1">1</a></li>`;
                html += `<li><a href="2">2</a></li>`;
                html += `<li><a href="3">3</a></li>`;
                html += `<li><a href="4">4</a></li>`;
            }else if(result.pageCount>4&& result.pageNum<3){
                html += `<li><a href="1">1</a></li>`;
                html += `<li><a href="2">2</a></li>`;
                html += `<li><a href="3">3</a></li>`;
                html += `<li><a href="4">4</a></li>`;
                html += `<li><a href="5">5</a></li>`;
            }else if(result.pageCount>4&&result.pageNum>=3&&result.pageNum+2<=result.pageCount){
                html += `<li><a href="${result.pageNum-2}">${result.pageNum-2}</a></li>`;
                html += `<li><a href="${result.pageNum-1}">${result.pageNum-1}</a></li>`;
                html += `<li><a href="${result.pageNum}">${result.pageNum}</a></li>`;
                html += `<li><a href="${result.pageNum+1}">${result.pageNum+1}</a></li>`;
                html += `<li><a href="${result.pageNum+2}">${result.pageNum+2}</a></li>`;
            }else if(result.pageCount>4&&result.pageNum>=3&&result.pageNum+2>result.pageCount){
                html += `<li><a href="${result.pageCount-4}">${result.pageCount-4}</a></li>`;
                html += `<li><a href="${result.pageCount-3}">${result.pageCount-3}</a></li>`;
                html += `<li><a href="${result.pageCount-2}">${result.pageCount-2}</a></li>`;
                html += `<li><a href="${result.pageCount-1}">${result.pageCount-1}</a></li>`;
                html += `<li><a href="${result.pageCount}">${result.pageCount}</a></li>`;
            }
            $('.product_nav').html(html);
        }},
        error:function (msg) {
            console.log("响应成功但是有问题");
            console.log(msg);
        }
    });
}
//实现自动更改收藏图标
function change_collection() {
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
                $.each(result.data,function (i,c) {
                    $("div[title='"+c.cname+"']").children().css({
                        "background":"url(images/coll_2.png) no-repeat right",
                        "color":"#ff646c"
                    });
                })
            }
        },
        error:function (msg) {
            console.log(msg);
        }
    });
}