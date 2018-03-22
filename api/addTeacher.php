<?php
require_once '../functions.php';
function add_teacher() {
    if(empty($_REQUEST['t_id'])) {
        $mes = "请填写教师编号";
        return $mes;
    }
    if(empty($_REQUEST['t_name'])) {
        $mes = "请填写教师姓名";
        return $mes;
    }
    if(empty($_REQUEST['t_dept_id'])) {
        $mes = "请选择教师所属的系";
        return $mes;
    }
    $sql = "insert into teachers (t_id, t_name, t_dept_id) values ('".$_REQUEST['t_id']."','".$_REQUEST['t_name']."','".$_REQUEST['t_dept_id']."')";
//    echo $sql;
    if(sign_execute($sql)){
        return "添加成功";
    }
    return "添加失败";
}
echo json_encode(add_teacher());