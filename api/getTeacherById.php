<?php
/**
 * Created by PhpStorm.
 * User: Banshee
 * Date: 2018/3/23
 * Time: 9:41
 */
require_once '../functions.php';
header('Access-Control-Allow-origin: *');
function get_teacher_by_id() {
    if(empty($_REQUEST['t_id'])) {
        return '无法获取教师id';
    }
    $sql = 'select * from teachers where t_id = '.$_REQUEST['t_id'];
    return sign_fetch_one($sql);
}

echo json_encode(get_teacher_by_id());