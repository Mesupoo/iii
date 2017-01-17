<?php
    header('Content-Type: application/json;charset=UTF-8');

    @$name = $_REQUEST['login_name'] or die('{"code":3,"msg":"请填写用户名"}');
    @$upwd = $_REQUEST['login_upwd'] or die('{"code":4,"msg":"请填写密码"}');

    require('init.php');
    $sql = "SELECT * FROM userInfo WHERE userName = '$name' AND userUpwd = '$upwd'";
    $result = mysqli_query($conn,$sql);

    $list = mysqli_fetch_assoc($result);
    if($list === null){
        $output = ['code'=>2,'msg'=>'用户名或密码错误'];
    }else{
        $output = ['code'=>1,'login_name'=>$name,'login_upwd'=>$upwd];
    }
    echo json_encode( $output );