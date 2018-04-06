<?php
/**
 * Created by PhpStorm.
 * User: CZC
 * Date: 2018/4/5
 * Time: 11:21
 */
require_once '../functions.php';
header('Access-Control-Allow-Origin: *');
function edit_dept() {
    if(empty($_REQUEST['admin_id'])) {
        $mes = "id错误";
        return $mes;
    }
    if(empty($_REQUEST['admin_name'])) {
        $mes = "请填写管理员的名称";
        return $mes;
    }
    if(empty($_REQUEST['admin_pwd'])) {
        $mes = "请填写管理员的密码";
        return $mes;
    }
    $sql = "update admins set adminname = '".$_REQUEST['admin_name']."',password = '".$_REQUEST['admin_pwd']."' where id = '".$_REQUEST['admin_id']."'";
//    echo $sql;
    if(sign_execute($sql)){
        return "修改成功";
    }
}
echo json_encode(edit_dept());