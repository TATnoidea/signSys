<?php
/**
 * Created by PhpStorm.
 * User: Banshee
 * Date: 2018/3/22
 * Time: 16:08
 */
require_once '../functions.php';
function getStudentsByCoursesId() {
    if(empty($_REQUEST['c_id'])) {
        return '无法获取课程id';
    }
    $sql = "select * from students inner join selects on s_no = sel_s_id where sel_c_id =".$_REQUEST['c_id'];
    return sign_fetch_all($sql);
}

echo json_encode(getStudentsByCoursesId());