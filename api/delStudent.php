<?php
/**
 * Created by PhpStorm.
 * User: Banshee
 * Date: 2018/3/23
 * Time: 9:29
 */
require_once '../functions.php';
header('Access-Control-Allow-Origin: *');
function del_student() {
    if(empty($_REQUEST['s_id'])) {
        return "无法获取学生id";
    }
    $sql = 'delete from students where s_no ='.$_REQUEST['s_id'];
    if(sign_execute($sql)) {
        return '删除成功';
    } else {
        return '删除失败';
    }
};

echo json_encode(del_student());