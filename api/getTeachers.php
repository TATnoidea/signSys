<?php
/**
 * Created by PhpStorm.
 * User: CZC
 * Date: 2018/3/7
 * Time: 12:51
 */
require_once '../functions.php';
header('Access-Control-Allow-Origin: *');
echo json_encode(sign_fetch_all("select * from teachers inner join depts where t_dept_id = d_id"));
