<?php
/**
 * Created by PhpStorm.
 * User: Banshee
 * Date: 2018/3/23
 * Time: 9:28
 */

require_once '../functions.php';
header('Access-Control-Allow-Origin: *');
function del_dept() {
    if(empty($_REQUEST['dept_id'])) {
        return "无法获取系id";
    }
    $sql = 'delete from depts where d_id ='.$_REQUEST['dept_id'];
    if(sign_execute($sql)) {
        return '删除成功';
    } else {
        return '删除失败';
    }
};

json_encode(del_dept());