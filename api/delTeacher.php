<?php
/**
 * Created by PhpStorm.
 * User: Banshee
 * Date: 2018/3/23
 * Time: 9:30
 */
require_once '../functions.php';
header('Access-Control-Allow-Origin: *');
function del_teacher() {
    if(empty($_REQUEST['t_id'])) {
        return "无法获取教师id";
    }
    $sql = 'delete from  where id ='.$_REQUEST['_id'];
    if(sign_execute($sql)) {
        return '删除成功';
    } else {
        return '删除失败';
    }
};

json_encode(del_teacher());