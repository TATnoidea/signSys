<?php
/**
 * Created by PhpStorm.
 * User: Banshee
 * Date: 2018/3/22
 * Time: 15:58
 */
require_once '../functions.php';
header('Access-Control-Allow-Origin: *');
function select() {
    if(empty($_REQUEST['s_id'])) {
        return "学生id为空，无法选课";
    }
    if(empty($_REQUEST['c_id'])) {
        return '课程id为空，无法选课';
    }
    $sql = 'insert into selects (sel_s_id, sel_c_id) values ('.$_REQUEST['s_id'].",".$_REQUEST['c_id'].')';
    if(sign_execute($sql)){
        return "选课成功";
    }
    return "选课失败";
}

echo json_encode(select());