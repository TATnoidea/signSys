<?php
/**
 * Created by PhpStorm.
 * User: Banshee
 * Date: 2018/3/26
 * Time: 16:35
 */
require_once '../functions.php';
header('Access-Control-Allow-Origin: *');
function getTeachersByDeptId() {
    if(empty($_REQUEST['d_id'])) {
        return "无法获取系id";
    }
    $sql = "select * from teachers inner join depts on t_dept_id = d_id where d_id = ".$_REQUEST['d_id'];
    return sign_fetch_all($sql);
}
echo json_encode(getTeachersByDeptId());