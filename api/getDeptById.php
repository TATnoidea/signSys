<?php
/**
 * Created by PhpStorm.
 * User: Banshee
 * Date: 2018/3/23
 * Time: 9:41
 */
require_once '../functions.php';
header('Access-Control-Allow-origin: *');
function get_dept_by_id() {
    if(empty($_REQUEST['d_id'])) {
        return '无法获取系id';
    }
    $sql = 'select * from depts where d_id = '.$_REQUEST['c_id'];
    return sign_fetch_one($sql);
}

echo json_encode(get_dept_by_id());