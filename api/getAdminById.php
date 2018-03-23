<?php
require_once '../functions.php';
header('Access-Control-Allow-origin: *');
function get_admin_by_id() {
    if(empty($_REQUEST['admin_id'])) {
        return '无法获取管理员id';
    }
    $sql = 'select * from admins where id = '.$_REQUEST['admin_id'];
    return sign_fetch_one($sql);
}

echo json_encode(get_admin_by_id());