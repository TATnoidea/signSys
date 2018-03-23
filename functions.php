<?php
/**
 * Created by PhpStorm.
 * User: CZC
 * Date: 2018/3/7
 * Time: 12:47
 */
require_once "configs/configs.php";
function sign_fetch_all ($sql) {
    $conn = mysqli_connect(DB_HOST, DB_USER, DB_PWD, DB_NAME);
    if (!$conn) {
        exit('连接失败');
    }

    $query = mysqli_query($conn, $sql);
    if (!$query) {
        // 查询失败
        return false;
    }

    $result = array();

    while ($row = mysqli_fetch_assoc($query)) {
        $result[] = $row;
    }
    return $result;
}

function sign_fetch_one($sql) {
    $conn = mysqli_connect(DB_HOST, DB_USER, DB_PWD, DB_NAME);
    if (!$conn) {
        exit('连接失败');
    }

    $query = mysqli_query($conn, $sql);
    if (!$query) {
        // 查询失败
        return false;
    }
    $row = mysqli_fetch_assoc($query);
    return $row;
}

function sign_execute ($sql) {
    $conn = mysqli_connect(DB_HOST, DB_USER, DB_PWD, DB_NAME);
    if (!$conn) {
        exit('连接失败');
    }
    $query = mysqli_query($conn, $sql);
    if (!$query) {
        // 查询失
        return false;
    }
    // 对于增删修改类的操作都是获取受影响行数
    $affected_rows = mysqli_affected_rows($conn);

    return $affected_rows;
}