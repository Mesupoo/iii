<?php
    header('Content-Type:application/json;charset=utf-8');

    require('init.php');
    $sql = "SELECT * FROM forum";
    $result = mysqli_query($conn, $sql);
    if($result === false){
        $output = ['code' => 3,'msg' => '检查sql语句'];
    }
    $list = mysqli_fetch_all($result,MYSQLI_ASSOC);
    if($list === null){
        $output = ['code' => 2,'msg' => '目前还没有任何文章'];
    }else{
        $output = ['code' => 1,'data' => $list];
    }
    echo json_encode($output);



    