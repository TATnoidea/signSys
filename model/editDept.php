<?php
require_once '../functions.php';
function edit_teacher() {
    if(empty($_REQUEST['d_name'])) {
        $mes = "请填写系的名称";
        return $mes;
    }
    $sql = "update depts set d_name = '".$_REQUEST['d_name']."' where d_id = '".$_REQUEST['d_id']."'";

    if(sign_execute($sql)){
        return "修改成功";
    }
}
print_r(edit_teacher());