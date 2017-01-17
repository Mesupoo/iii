<?php
    header('Content-Type:application/json;charset=utf-8');
    @$username = $_REQUEST['username'] or die("{'code':4,'msg':'请登录先'}");


    require('init.php');
    $sql = "SELECT * FROM forum WHERE userName = $username";
    $result = mysqli_query($conn, $sql);
    if($result === false){
        $output = ['code' => 3,'msg' => '检查sql语句'];
    }
    $list = mysqli_fetch_all($result,MYSQLI_ASSOC);
    if($list === null){
        $output = ['code' => 2,'msg' => '目前您还没有任何言论'];
    }else{
        $output = ['code' => 1,'data' => $list];
    }
    echo json_encode($output);


