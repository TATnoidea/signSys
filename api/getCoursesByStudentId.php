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
    if(empty($_REQUEST['s_id'])) {
        return '无法获取学生id';
    }
    $sql = 'select * from courses inner join selects where sel_s_id = '.$_REQUEST['s_id'].' and sel_c_id = c_id';
    return sign_fetch_all($sql);
}

echo json_encode(get_course_by_id());