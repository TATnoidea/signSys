<?php
/**
 * Created by PhpStorm.
 * User: CZC
 * Date: 2018/3/7
 * Time: 12:51
 */
header("Access-Control-Allow-Origin: *");
require_once '../functions.php';
print_r(sign_fetch_all("select * from teachers"));
