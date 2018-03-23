<?php
/**
 * Created by PhpStorm.
 * User: Banshee
 * Date: 2018/3/23
 * Time: 9:22
 */
require_once '../functions.php';
header('Access-Control-Allow-Origin: *');
function add_admin() {
    if(empty($_REQUEST['admin_name'])) {
        $mes = "请填写管理员名称";
        return $mes;
    }
    if(empty($_REQUEST['admin_pwd'])) {
        $mes = "请填写管理员密码";
        return $mes;
    }
    $sql = "insert into admins (admin_name, password) values ('".$_REQUEST['admin_name']."','".$_REQUEST['admin_pwd']."')";
    echo $sql;
    if(sign_execute($sql)){
        return "添加成功";
    }
    return "添加失败";
}
echo json_encode(add_admin());