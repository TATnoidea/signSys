<?php
require_once '../functions.php';
header('Access-Control-Allow-Origin: *');
function add_student() {
    if(empty($_REQUEST['s_name'])) {
        $mes = "请填写学生姓名";
        return $mes;
    }
    if(empty($_REQUEST['s_class'])) {
        $mes = "请填写学生班级";
        return $mes;
    }
    if(empty($_REQUEST['s_sex'])) {
        $mes = "请填写学生性别";
        return $mes;
    }
    if(empty($_REQUEST['s_dept_id'])) {
        $mes = "请选择学生所属的系";
        return $mes;
    }
    $sql = "insert into students (s_name, s_class, s_sex, s_dept_id) values ('".$_REQUEST['s_name']."','".$_REQUEST['s_class']."','".$_REQUEST['s_sex']."','".$_REQUEST['s_dept_id']."')";
//    echo $sql;
    if(sign_execute($sql)){
        return "添加成功";
    }
    return "添加失败";
}
echo json_encode(add_student());