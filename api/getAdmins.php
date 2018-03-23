<?php
require_once "../functions.php";
header('Access-Control-Allow-Origin: *');
echo json_encode(sign_fetch_all("select * from admins"));