<?php
/**
 * Created by PhpStorm.
 * User: Banshee
 * Date: 2018/3/23
 * Time: 9:30
 */
require_once '../functions.php';
header('Access-Control-Allow-Origin: *');
function del_course() {
    if(empty($_REQUEST['c_id'])) {
        return "无法获取课程id";
    }
    $sql = 'delete from courses where c_id ='.$_REQUEST['c_id'];
    if(sign_execute($sql)) {
        return '删除成功';
    } else {
        return '删除失败';
    }
};

echo json_encode(del_course());