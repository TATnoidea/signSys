<?php
/**
 * Created by PhpStorm.
 * User: Banshee
 * Date: 2018/3/26
 * Time: 14:59
 */
require_once "../functions.php";
header('Access-Control-Allow-Origin: *');
echo json_encode(sign_fetch_all("select * from times"));