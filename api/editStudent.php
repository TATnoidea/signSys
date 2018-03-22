<?php
require_once '../functions.php';
function edit_student() {
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
    $sql = "update students set s_name = '".$_REQUEST['s_name']."',s_class = '".$_REQUEST['s_class']."', s_sex = '".$_REQUEST['s_sex']."', s_dept_id = '".$_REQUEST['s_dept_id']."' where s_no = '".$_REQUEST['s_no']."'";
    echo $sql;
    if(sign_execute($sql)){
        return "修改成功";
    }
    return "修改失败";
}
print_r(edit_student());