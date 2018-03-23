<?php
/**
 * Created by PhpStorm.
 * User: Banshee
 * Date: 2018/3/23
 * Time: 11:36
 */
require_once '../functions.php';
header('Access-Control-Allow-origin: *');
function login() {
    if(empty($_REQUEST['admin_name'])) {
        return '请填写管理员姓名';
    }
    if(empty($_REQUEST['admin_pwd'])) {
        return '请填写管理员密码';
    }
    $sql = "select * from admins where adminname = '".$_REQUEST['admin_name']."' and password = '".$_REQUEST['admin_pwd']."'";
    if(sign_fetch_all($sql)) {
        return sign_fetch_one($sql);
    } else {
        return "用户名或密码错误";
    }
}

echo json_encode(login());