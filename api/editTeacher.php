<?php
require_once '../functions.php';
function edit_teacher() {
    if(empty($_REQUEST['t_name'])) {
        $mes = "请填写教师姓名";
        return $mes;
    }
    if(empty($_REQUEST['t_dept_id'])) {
        $mes = "请选择教师所属的系";
        return $mes;
    }
    $sql = "update teachers set t_name = '".$_REQUEST['t_name']."',t_dept_id = '".$_REQUEST['t_dept_id']."' where t_id = '".$_REQUEST['t_id']."'";
    echo $sql;
    if(sign_execute($sql)){
        return "修改成功";
    }
}
echo json_encode(edit_teacher());