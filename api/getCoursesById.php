<?php
/**
 * Created by PhpStorm.
 * User: Banshee
 * Date: 2018/3/23
 * Time: 9:41
 */
require_once '../functions.php';
header('Access-Control-Allow-origin: *');
function get_course_by_id() {
    if(empty($_REQUEST['c_id'])) {
        return '无法获取课程id';
    }
    $sql = 'select * from courses inner join times where c_id = '.$_REQUEST['c_id'].' and c_time_id = time_id';
    return sign_fetch_one($sql);
}

echo json_encode(get_course_by_id());