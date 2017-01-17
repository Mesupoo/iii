<?php
    header('Content-Type: application/json;charset=UTF-8');

    @$name = $_REQUEST['register_name'] or die ('{"code":3,"msg":"请填写用户名"}');
    @$upwd = $_REQUEST['register_upwd'] or die ('{"code":4,"msg":"请填写密码"}');

    require('init.php');
    $sql = "INSERT INTO userInfo values ('$name','$upwd')";
    $result = mysqli_query($conn,$sql);
    if ($result === false){
        $output = ['code' => 2,'msg' => '用户名已存在'];
    }else{
        $output = ['code' => 1,'register_name' => $name,'register_upwd' => $upwd];
    }
    echo json_encode( $output );


