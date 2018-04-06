<?php
require_once '../functions.php';
header('Access-Control-Allow-Origin: *');
function edit_dept() {
    if(empty($_REQUEST['d_id'])) {
        $mes = "id错误";
        return $mes;
    }
    if(empty($_REQUEST['d_name'])) {
        $mes = "请填写系的名称";
        return $mes;
    }
    $sql = "update depts set d_name = '".$_REQUEST['d_name']."' where d_id = '".$_REQUEST['d_id']."'";

    if(sign_execute($sql)){
        return "修改成功";
    }
}
echo json_encode(edit_dept());