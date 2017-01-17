<?php
    header('Content-Type:application/json;charset=utf-8');
    @$username = $_REQUEST['username'] or die("{'code':4,'msg':'username required'}");

    require('init.php');
    $sql = "SELECT * FROM collection WHERE userName = $username";
    $result = mysqli_query($conn, $sql);
    if($result === false){
        $output = ['code' => 3,'msg' => '检查sql语句'];
    }
    $list = mysqli_fetch_all($result,MYSQLI_ASSOC);
    if($list === null){
        $output = ['code' => 2,'msg' => '目前还没有收藏任何东西'];
    }else{
        $output = ['code' => 1,'data' => $list];
    }
    echo json_encode($output);


    