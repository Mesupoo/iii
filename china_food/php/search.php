<?php
    header('Content-Type:application/json;charset=utf-8');
   @$input = $_REQUEST['input'] or die('{"code":2,"msg":"请输入搜索内容"}');
   $input1 = substr($input,1);

   require('init.php');
   $sql = "SELECT * FROM foodProduct WHERE pname like '%$input%' or pname like '%$input1%'";
   $result = mysqli_query($conn, $sql);
   if ($result === false){
        $output = ['code' => 3, 'msg' =>'检查sql'];
   }
   $list = mysqli_fetch_all($result,MYSQLI_ASSOC);
   if ($list == null){
        $output = ['code' => 4, 'msg' =>'没有你搜的内容'];
   }else{
        $output = ['code' => 1, 'data' => $list];
   }
   echo json_encode($output);