<?php
/**
 * Created by PhpStorm.
 * User: CZC
 * Date: 2018/3/7
 * Time: 14:51
 */
require_once '../functions.php';
header('Access-Control-Allow-Origin: *');
echo json_encode(sign_fetch_all("select * from courses inner join week, times, teachers, depts where c_dept_id = d_id and c_time_id = time_id and c_week_id = w_id and c_teacher_id = t_id"));