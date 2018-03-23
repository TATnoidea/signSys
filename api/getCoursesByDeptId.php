<?php
/**
 * Created by PhpStorm.
 * User: Banshee
 * Date: 2018/3/22
 * Time: 15:46
 */
require_once "../functions.php";
header('Access-Control-Allow-Origin: *');
function getCoursesByDeptId() {
    if(empty($_REQUEST['dept_id'])) {
        return "请输入系的id";
    }
    $sql = "select * from courses where c_dept_id =".$_REQUEST['dept_id'];
    return sign_fetch_all($sql);
}

echo json_encode(getCoursesByDeptId());