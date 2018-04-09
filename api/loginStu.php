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
    if(empty($_REQUEST['user'])) {
        return '请填写学生姓名';
    }
    if(empty($_REQUEST['pwd'])) {
        return '请填写学生密码';
    }
    $sql = "select * from students where s_no = '".$_REQUEST['user']."' and s_password = '".$_REQUEST['pwd']."'";
    if(sign_fetch_all($sql)) {
        return sign_fetch_one($sql);
    } else {
        return "用户名或密码错误";
    }
}

echo json_encode(login());