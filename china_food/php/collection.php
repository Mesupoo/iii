<?php
    header("Content-Type:application/json;charset = utf-8");

    @$username = $_REQUEST['username'] or die('{"code":5,"msg":"username required"}');
    @$cname = $_REQUEST['cname'] or die('{"code":3,"msg":"cname required"}');
    @$cpic = $_REQUEST['cpic'] or die('{"code":4,"msg":"cpic required"}');

    require('init.php');
    $sql = "INSERT INTO collection VALUES('$username','$cname','$cpic')";
    $result = mysqli_query($conn,$sql);

    if($result === false){
        $output = ['code' => 2,'msg' => '之前已经收藏了'];
    }else{
        $output = ['code' => 1,'msg' => '收藏成功'];
    }
    echo json_encode($output);