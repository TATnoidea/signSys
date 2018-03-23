<?php
/**
 * Created by PhpStorm.
 * User: CZC
 * Date: 2018/3/7
 * Time: 14:11
 */
require_once '../functions.php';
header('Access-Control-Allow-Origin: *');
echo json_encode(sign_fetch_all("select * from students inner join depts where s_dept_id = d_id"));