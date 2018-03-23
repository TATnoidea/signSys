<?php
/**
 * Created by PhpStorm.
 * User: Banshee
 * Date: 2018/3/22
 * Time: 15:56
 */
require_once "../functions.php";
header('Access-Control-Allow-Origin: *');
function getCoursesByTeacherId() {
    if(empty($_REQUEST['teacher_id'])) {
        return "请输入教师的id";
    }
    $sql = "select * from courses where c_teacher_id =".$_REQUEST['teacher_id'];
    return sign_fetch_all($sql);
}

echo json_encode(getCoursesByTeacherId());