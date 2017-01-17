//接受location.href传来的数据
$('#foot').load('php/footer.php');
var thisurl = document.URL;
var val = thisurl.split('?')[1];
//eval()函数可将字符串"gongbaojiding"转化为变量gongbaojiding；
$('.details').html(eval(val));