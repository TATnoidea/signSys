<?php
require_once '../functions.php';
header('Access-Control-Allow-Origin: *');
function add_course() {
    if(empty($_REQUEST['c_name'])) {
        $mes = "请填写课程名";
        return $mes;
    }
    if(empty($_REQUEST['c_dept_id'])) {
        $mes = "请选择课程所属的系";
        return $mes;
    }
    if(empty($_REQUEST['c_time_id'])) {
        $mes = "请选择时间";
        return $mes;
    }
    if(empty($_REQUEST['c_week_id'])) {
        $mes = "请选择周";
        return $mes;
    }
    if(empty($_REQUEST['c_teacher_id'])) {
        $mes = "请选择老师";
        return $mes;
    }
    $sql = "insert into courses (c_name, c_dept_id, c_time_id, c_week_id, c_teacher_id) values ('".$_REQUEST['c_name']."','".$_REQUEST['c_dept_id']."','".$_REQUEST['c_time_id']."','".$_REQUEST['c_week_id']."','".$_REQUEST['c_teacher_id']."')";
//    echo $sql;
    if(sign_execute($sql)){
        return "添加成功";
    }
    return "添加失败";
}
echo json_encode(add_course());