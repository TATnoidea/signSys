<?php
/**
 * Created by PhpStorm.
 * User: Banshee
 * Date: 2018/3/22
 * Time: 16:24
 */
require_once '../functions.php';
function getTeachersByCourseId() {
    if(empty($_REQUEST['c_id'])) {
        return "无法获取课程id";
    }
    $sql = "select * from teachers inner join courses on c_teacher_id = t_id where c_id = ".$_REQUEST['c_id'];
    return sign_fetch_all($sql);
}
echo json_encode(getTeachersByCourseId());