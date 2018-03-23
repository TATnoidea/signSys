<?php
/**
 * Created by PhpStorm.
 * User: Banshee
 * Date: 2018/3/23
 * Time: 9:25
 */
require_once '../functions.php';
header('Access-Control-Allow-Origin: *');
function del_admin() {
    if(empty($_REQUEST['admin_id'])) {
        return "无法获取管理员id";
    }
    $sql = 'delete from admins where id ='.$_REQUEST['admin_id'];
    if(sign_execute($sql)) {
        return '删除成功';
    } else {
        return '删除失败';
    }
};

json_encode(del_admin());