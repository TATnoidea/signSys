<?php
/**
 * Created by PhpStorm.
 * User: CZC
 * Date: 2018/3/7
 * Time: 14:29
 */
require_once '../functions.php';
header('Access-Control-Allow-Origin: *');
function add_dept() {
    if(empty($_REQUEST['d_name'])) {
        $mes = "请填写系的名称";
        return $mes;
    }
    $sql = "insert into depts (d_name) values ('".$_REQUEST['d_name']."')";
//    echo $sql;
    if(sign_execute($sql)){
        return "添加成功";
    }
    return "添加失败";
}
echo json_encode(add_dept());