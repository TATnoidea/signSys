<?php
/**
 * Created by PhpStorm.
 * User: CZC
 * Date: 2018/3/7
 * Time: 12:51
 */
require_once '../functions.php';
echo json_encode(sign_fetch_all("select * from teachers"));
