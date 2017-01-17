<?php
    header('Content-Type:application/json;charset = utf-8');

    @$username = $_REQUEST['username'] or die('{"code":3,"msg":"请登录先"}');
    @$title = $_REQUEST['title'] or die('{"code":4,"msg":"标题不能为空"}');
    @$content = $_REQUEST['content'] or die('{"code":5,"msg":"内容不能为空"}');

    require('init.php');
    $sql = "INSERT INTO forum VALUES('$username','$title','$content')";
    $result = mysqli_query($conn,$sql);

    if($result === false){
        $output = ['code' => 2,'msg' => '失败'];
    }else{
        $output = ['code' => 1,'msg' => '成功'];
    }
    echo json_encode($output);