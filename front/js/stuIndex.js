var url = "http://localhost/signsys/api/"; //api地址
var tplUrl = "http://localhost/signsys/front/tpl/"; //前台链接地址
var jingdu = 115.505713;
var weidu = 38.92512;
//渲染首页
$(function() {
  var s_id = $.cookie("stu_id") || null;
  $.ajax({
    url: url + "getStudentById.php",
    type: "get",
    data: {
      s_id: s_id
    },
    dataType: "json",
    success: function(data) {
      console.log(data);
      if (typeof data != "object") {
        alert("学生id错误，请重新登录");
        window.location = "login.html";
      } else {
        $(".stu_name").text(data.s_name);
        $(".stu_dept").text(data.d_name);
        $(".stu_class").text(data.s_class);
      }
    }
  });
  $.ajax({
    url: url + "getCoursesByStudentId",
    data: {
      s_id: s_id
    },
    dataType: "json",
    success: function(data) {
      console.log(data);
      if (typeof data !== "object" || data === null) {
        $(".content").html("没有选课，请选课");
      } else {
        $.ajax({
          url: tplUrl + "courseList",
          dataType: "html",
          success: function(response) {
            var render = template.compile(response);
            var html = render({
              data: data
            });
            $(".content").html(html);
          }
        });
      }
    }
  });
});
//渲染我要选课
$(function() {
  var s_id = $.cookie("stu_id") || null;
  $(".sel_class").on("click", function() {
    $(".back").show();
    $.ajax({
      url: url + "getCourses",
      dataType: "json",
      success: function(allData) {
        // console.log(data)
        $.ajax({
          url: url + "getCoursesByStudentId",
          dataType: "json",
          data: {
            s_id: s_id
          },
          success: function(selData) {
            $.ajax({
              url: tplUrl + "selCourses",
              dataType: "html",
              success: function(response) {
                var render = template.compile(response);
                var html = render({
                  data: clearClass(allData, selData)
                });
                $(".content").html(html);
              }
            });
          }
        });
      }
    });
  });
});
//返回首页
$(function() {
  var s_id = $.cookie("stu_id") || null;
  $(".back").on("click", function() {
    $(".back").hide();
    $.ajax({
      url: url + "getCoursesByStudentId",
      data: {
        s_id: s_id
      },
      dataType: "json",
      success: function(data) {
        // console.log(data)
        if (typeof data !== "object" || data === null) {
          $(".content").html("没有选课，请选课");
        } else {
          $.ajax({
            url: tplUrl + "courseList",
            dataType: "html",
            success: function(response) {
              var render = template.compile(response);
              var html = render({
                data: data
              });
              $(".content").html(html);
            }
          });
        }
      }
    });
  });
});
//绑定选课按钮
$(function() {
  $(".content").on("click", ".select_this", function() {
    var c_id = $(this).data("id");
    var s_id = $.cookie("stu_id");
    $.ajax({
      url: url + "select",
      data: {
        c_id: c_id,
        s_id: s_id
      },
      dataType: "json",
      success: function(response) {
        alert(response);
        $.ajax({
          url: url + "getCourses",
          dataType: "json",
          success: function(allData) {
            // console.log(data)
            $.ajax({
              url: url + "getCoursesByStudentId",
              dataType: "json",
              data: {
                s_id: s_id
              },
              success: function(selData) {
                $.ajax({
                  url: tplUrl + "selCourses",
                  dataType: "html",
                  success: function(response) {
                    var render = template.compile(response);
                    var html = render({
                      data: clearClass(allData, selData)
                    });
                    $(".content").html(html);
                  }
                });
              }
            });
          }
        });
      }
    });
  });
});
//签到
$(function() {
  $(".content").on("click", ".sign_this", function() {
    var c_id = $(this).data("id");
    var s_no = $.cookie("stu_id") || null;
    $.ajax({
      url: url + "getCoursesById",
      data: {
        c_id: c_id
      },
      dataType: "json",
      success: function(data) {
     
        // console.log(data);
        var date = new Date();
      //   var week = date.getDay();
        var time = date
          .toLocaleTimeString()
          .split("")
          .splice(2)
          .join("");
        
        var limitTime = data.time_name.split("~")[0];
        var limitH = limitTime.split(":")[0];
        var limitMin = limitTime.split(":")[1];
        var h = time.split(":")[0];
        var min = time.split(":")[1];
        var clander = formateDate(date.toString().split(" ").slice(1, 3))
        if (h > limitH) {
          alert("迟到了，无法签到");
        } else if (min > limitMin) {
          alert("迟到了，无法签到");
        } else {
          navigator.geolocation.getCurrentPosition(onSuccess, onError);
          function onSuccess(position) {
            // console.log(position)

            //经度
            var longitude = position.coords.longitude;
            //纬度
            var latitude = position.coords.latitude;
            if (
              (longitude < jingdu + 0.001 || longitude > jingdu - 0.001) &&
              (latitude < weidu + 0.001 || latitude > weidu - 0.001)
            ) {
              $.ajax({
                url: url+ "sign",
                data: {
                  s_no: s_no,
                  cou_id: c_id,
                  sign_time: time,
                  date: clander
                },
                dataType: "json",
                success: function(response) {
                  alert(response)
                }
              })
            } else {
              alert("签到位置不对，无法签到")
            }
          }
          function onError(error) {
            switch (error.code) {
              case 1:
                alert("位置服务被拒绝");
                break;

              case 2:
                alert("暂时获取不到位置信息");
                break;

              case 3:
                alert("获取信息超时");
                break;

              case 4:
                alert("未知错误");
                break;
            }
          }
        }
      }
    });
  });
});
//数据去重
function clearClass(allData, selData) {
  for (var i = 0; i < selData.length; i++) {
    for (var j = 0; j < allData.length; j++) {
      if (selData[i].c_id === allData[j].c_id) {
        allData.splice(j, 1);
      }
    }
  }
  return allData;
}

function formateDate(arr) {
  switch(arr[0]) {
    case "Jan": 
    arr[0] = "1月"
    break;
    case "Apr":
    arr[0] = "4月"
    break;
  }
  arr[1] += "日"
  return arr.join("")
}