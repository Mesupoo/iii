<?php
/*
    接受客户端提交的pageNum，向客户端输出该页中所有的产品信息，以json格式
    {
        productCount:36, //满足条件的记录的总数
        pageSize:8,  //页面大小
        pageCount:5, //总的页面
        pageNum:3,   //当前显示的页号
        data:[{},{}....{}]  //当前页中的数据
    }
*/
header('Content-Type:application/json;charset = UTF-8');
@$pstyle = $_REQUEST['pstyle'];
@$pageNum = $_REQUEST['pageNum'];

//如果客户端未提交就默认为1
if($pageNum === null){
    $pageNum = 1;
}else{
    // intval 将字符串解析为整数
    $pageNum = intval($pageNum);
}
if($pstyle ===null){
    $pstyle = 'food_chuan';
}
//将要向客户端输出的分页数据
$output = [
    "productCount" => 0,
    "pageSize" => 8,
    "pageCount" => 0,
    "pageNum" => $pageNum,
    "data" => null
];

require('init.php');

$sql = "SELECT COUNT(*) FROM foodProduct WHERE pstyle = '$pstyle' ";
$result = mysqli_query($conn,$sql);
$output['productCount'] = intval(mysqli_fetch_row($result)[0]);
$output['pageCount'] = ceil($output['productCount']/$output['pageSize']);

//查询出pageNum中的数据,,使用sql中的limit限制条件
$start = ($output['pageNum']-1)*$output['pageSize'];
$count = $output['pageSize'];
$sql = "SELECT * FROM foodProduct WHERE pstyle='$pstyle' LIMIT $start,$count";
$result = mysqli_query($conn,$sql);
$output['data'] = mysqli_fetch_all($result,1);


if($output['productCount'] === 0){
    $out = ['pageCount' => 0];
    echo json_encode($out);
}else{
    echo json_encode($output);
}








