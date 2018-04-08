<?php
/**
 * Created by PhpStorm.
 * User: Banshee
 * Date: 2018/3/23
 * Time: 9:41
 */
require_once '../functions.php';
header('Access-Control-Allow-origin: *');
function get_student_by_id() {
    if(empty($_REQUEST['s_id'])) {
        return '无法获取课程id';
    }
    $sql = 'select * from students inner join depts where s_no = '.$_REQUEST['s_id'].' and s_dept_id = d_id';
    return sign_fetch_one($sql);
}

echo json_encode(get_student_by_id());