var url = "http://localhost/signsys/api/"; //api地址
var t_id = $.cookie("tea_id") //教师id
//获取教师信息
$(function() {
  $.ajax({
    url: url + "getTeacherById",
    data: {
      t_id: t_id
    },
    dataType: "json",
    success: function(data) {
      $(".tea_name").html(data.t_name)
      $(".tea_dept").html(data.d_name)
    }
  })
})
//获取课程信息
$(function() {
  $.ajax({
    url: url + "getCoursesByTeacherId" ,
    data: {
      teacher_id: t_id
    },
    dataType: "json",
    success: function(data) {
      var html = template("tpl-class", {data: data})
      $(".content").html(html)
    }
  })
})

//点击情况
$(function() {
  $(".content").on("click", ".info", function() {
    window.location = "info.html"
  })
})