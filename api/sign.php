<?php
require_once '../functions.php';
header('Access-Control-Allow-Origin: *');
function sign() {
  if(empty($_REQUEST['s_no'])) {
    $mes = "获取学生id失败";
    return $mes;
  }
  if(empty($_REQUEST['sign_time'])) {
    $mes = "获取时间失败";
    return $mes;
  }
  if(empty($_REQUEST['cou_id'])) {
    $mes = "获取课程失败";
    return $mes;
  }
  if(empty($_REQUEST['date'])) {
    $mes = "获取日期失败";
    return $mes;
  }
  $sql = "insert into signs (stu_id, cou_id, sign_time, date) values (".$_REQUEST['s_no'].", ".$_REQUEST['cou_id'].", '".$_REQUEST['sign_time'].", '".$_REQUEST['date']."'"."')";
  if(sign_execute($sql)){
    return "签到成功";
}
return "签到失败";

}
echo json_encode(sign());