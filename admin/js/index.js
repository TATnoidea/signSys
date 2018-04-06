var url = "http://localhost/signsys/api/"; //api地址
var tplUrl = "http://localhost/signsys/admin/tpl/"; //模板地址
//获取管理员名称
$(function() {
  var admin_id = $.cookie("admin_id") || null;
  $.ajax({
    url: url + "getAdminById.php",
    type: "get",
    data: {
      admin_id: admin_id
    },
    dataType: "json",
    success: function(data) {
      if (typeof data != "object") {
        alert("管理员id错误，请重新登录");
        window.location = "login.html";
      } else {
        $("#index_admin_name").text(data.adminname);
      }
    }
  });
});
//渲染功能==============================================================
//渲染管理员
$(function() {
  renderData("getAdmins", "#admin", "tpl-admin");
});

//渲染管理员
$(function() {
  $("#btn_admin").on("click", function() {
    renderData("getAdmins", "#admin", "tpl-admin");
  });
});
//渲染教师
$(function() {
  $("#btn_teacher").on("click", function() {
    renderData("getTeachers", "#teacher", "tpl-teacher");
  });
});

//渲染学生
$(function() {
  $("#btn_student").on("click", function() {
    renderData("getStudents", "#student", "tpl-student");
  });
});

//渲染课程
$(function() {
  $("#btn_course").on("click", function() {
    renderData("getCourses", "#course", "tpl-course");
  });
});

//渲染系
$(function() {
  $("#btn_dept").on("click", function() {
    renderData("getDepts", "#dept", "tpl-dept");
  });
});
//添加功能=========================================================================
//渲染添加页面====================================================================
//渲染添加管理员
$(function() {
  renderAdd("#admin", "#addAdmin", "tpl-addAdmin", function(response) {
    $("#admin").html(response);
    $(".saveBtn").on("click", function(e) {
      e.preventDefault();
      addCallBack(["#admin_name", "#admin_pwd"], [], "addAdmin", function() {
        renderData("getAdmins", "#admin", "tpl-admin");
      });
    });
    bindReset(["#admin_name", "#admin_pwd"]);
  });
});
//渲染添加系
$(function() {
  renderAdd("#dept", "#addDept", "tpl-addDept", function(response) {
    $("#dept").html(response);
    bindReset(["#d_name"]);
    $(".saveBtn").on("click", function(e) {
      e.preventDefault();
      addCallBack(["#d_name"], [], "addDept", function() {
        renderData("getDepts", "#dept", "tpl-dept");
      });
    });
  });
});
//渲染添加课程
$(function() {
  $("#course").on("click", "#addCourse", function() {
    $.ajax({
      url: tplUrl + "tpl-addCourse",
      dataType: "html",
      success: function(response) {
        // console.log(response)
        $("#course").html(response);
        //获取周
        $.ajax({
          url: url + "getWeeks",
          dataType: "json",
          success: function(response) {
            var str = "";
            for (let i = 0; i < response.length; i++) {
              str +=
                "<li data-id='" +
                response[i].w_id +
                "'><a herf='#'>" +
                response[i].week +
                "</li>";
            }
            $("#addC_week")
              .html(str)
              .on("click", "li", function() {
                var id = $(this).data("id");
                $("#c_week_id")
                  .data("id", id)
                  .text(
                    $(this)
                      .find("a")
                      .text()
                  );
              });
          }
        });
        //获取时间
        $.ajax({
          url: url + "getTimes",
          dataType: "json",
          success: function(response) {
            var str = "";
            for (let i = 0; i < response.length; i++) {
              str +=
                "<li data-id='" +
                response[i].time_id +
                "'><a herf='#'>" +
                response[i].time_name +
                "</li>";
            }
            $("#addC_time")
              .html(str)
              .on("click", "li", function() {
                var id = $(this).data("id");
                $("#c_time_id")
                  .data("id", id)
                  .text(
                    $(this)
                      .find("a")
                      .text()
                  );
              });
          }
        });
        //获取系
        $.ajax({
          url: url + "getDepts",
          dataType: "json",
          success: function(response) {
            var str = "";
            for (let i = 0; i < response.length; i++) {
              str +=
                "<li data-id='" +
                response[i].d_id +
                "'><a herf='#'>" +
                response[i].d_name +
                "</li>";
            }
            $("#addC_dept")
              .html(str)
              .on("click", "li", function() {
                var id = $(this).data("id");
                $("#c_dept_id")
                  .data("id", id)
                  .text(
                    $(this)
                      .find("a")
                      .text()
                  );
                //获取教师模板
                $.ajax({
                  url: tplUrl + "tpl-listTea",
                  dataType: "html",
                  success: function(response) {
                    //获取教师数据
                    $.ajax({
                      url: url + "getTeachersByDeptId",
                      dataType: "json",
                      data: {
                        d_id: id
                      },
                      success: function(data) {
                        var render = template.compile(response);
                        var html = render({
                          data: data
                        });
                        $("#listTea")
                          .html(html)
                          .on("click", "li", function() {
                            var id = $(this).data("id");
                            console.log(id);
                            console.log($(this));
                            $("#c_teacher_id")
                              .data("id", id)
                              .text(
                                $(this)
                                  .find("a")
                                  .text()
                              );
                          });
                        bindReset(
                          ["#c_name"],
                          [
                            "#c_week_id",
                            "#c_time_id",
                            "#c_dept_id",
                            "#c_teacher_id"
                          ]
                        );
                        $(".saveBtn").on("click", function(e) {
                          e.preventDefault();
                          addCallBack(
                            ["#c_name"],
                            [
                              "#c_dept_id",
                              "#c_time_id",
                              "#c_week_id",
                              "#c_teacher_id"
                            ],
                            "addCourse",
                            function() {
                              renderData("getCourses", "#course", "tpl-course");
                            }
                          );
                        });
                      }
                    });
                  }
                });
              });
            bindReset(["#c_name"], ["#c_week_id", "#c_time_id", "#c_dept_id"]);
          }
        });
      }
    });
  });
});
//渲染添加老师
$(function() {
  renderAdd("#teacher", "#addTeacher", "tpl-addTeacher", function(response) {
    $("#teacher").html(response);
    $.ajax({
      url: url + "getDepts",
      dataType: "json",
      success: function(response) {
        var str = "";
        for (let i = 0; i < response.length; i++) {
          str +=
            "<li data-id='" +
            response[i].d_id +
            "'><a herf='#'>" +
            response[i].d_name +
            "</li>";
        }
        $("#addT_dept")
          .html(str)
          .on("click", "li", function() {
            var id = $(this).data("id");
            $("#t_dept_id")
              .data("id", id)
              .text(
                $(this)
                  .find("a")
                  .text()
              );
          });
        bindReset(["#t_name"], ["#t_dept_id"]);
        $(".saveBtn").on("click", function(e) {
          e.preventDefault();
          addCallBack(["#t_name"], ["#t_dept_id"], "addTeacher", function() {
            renderData("getTeachers", "#teacher", "tpl-teacher");
          });
        });
      }
    });
  });
});
//渲染添加学生
$(function() {
  renderAdd("#student", "#addStudent", "tpl-addStudent", function(response) {
    $("#student").html(response);
    $("#addS_sex").on("click", "li", function() {
      var id = $(this).data("id");
      $("#s_sex")
        .data("id", id)
        .text(
          $(this)
            .find("a")
            .text()
        );
    });
    $.ajax({
      url: url + "getDepts",
      dataType: "json",
      success: function(response) {
        var str = "";
        for (let i = 0; i < response.length; i++) {
          str +=
            "<li data-id='" +
            response[i].d_id +
            "'><a herf='#'>" +
            response[i].d_name +
            "</li>";
        }
        $("#addS_dept")
          .html(str)
          .on("click", "li", function() {
            var id = $(this).data("id");
            $("#s_dept_id")
              .data("id", id)
              .text(
                $(this)
                  .find("a")
                  .text()
              );
          });
        bindReset(["#s_name", "#s_class"], ["#s_sex", "#s_dept_id"]);
        $(".saveBtn").on("click", function(e) {
          e.preventDefault();
          addCallBack(
            ["#s_name", "#s_class"],
            ["#s_dept_id", "#s_sex"],
            "addStudent",
            function() {
              renderData("getStudents", "#student", "tpl-student");
            }
          );
        });
      }
    });
  });
});
//修改功能==============================================================================
//管理员修改
$(function() {
  $(".tab-content").on("click", ".editAdmin", function() {
    var $that = $(this);
    var id_name = "admin_id";
    var id = $that.data("id");
    // console.log($that.data('id'))
    $.ajax({
      url: url + "getAdminById",
      dataType: "json",
      type: "get",
      data: {
        [id_name]: $that.data("id")
      },
      success: function(data) {
        $.ajax({
          url: tplUrl + "tpl-editAdmin",
          dataType: "html",
          success: function(response) {
            var render = template.compile(response);
            var html = render({
              data: data
            });
            $("#admin").html(html);
            bindReset(["#admin_name", "#admin_pwd"]);
            $("#admin").on("click", ".editBtn", function(e) {
              e.preventDefault();
              addCallBack(
                ["#admin_name", "#admin_pwd"],
                [],
                "editAdmin?admin_id=" + id,
                function() {
                  renderData("getAdmins", "#admin", "tpl-admin");
                }
              );
            });
          }
        });
      }
    });
  });
});
//教师修改
$(function() {
  $(".tab-content").on("click", ".editTeacher", function() {
    var id = $(this).data("id");
    $.ajax({
      url: tplUrl + "tpl-editTeacher",
      dataType: "html",
      success: function(response) {
        $.ajax({
          url: url + "getTeacherById",
          data: {
            t_id: id
          },
          dataType: "json",
          success: function(data) {
            console.log(data);
            var render = template.compile(response);
            var html = render({
              data: data
            });
            $("#teacher").html(html);
               //获取系的下拉列表
        $.ajax({
          url: url + "getDepts",
          dataType: "json",
          success: function(response) {
            var str = "";
            for (let i = 0; i < response.length; i++) {
              str +=
                "<li data-id='" +
                response[i].d_id +
                "'><a herf='#'>" +
                response[i].d_name +
                "</li>";
            }
            //点击下拉列表填充内容并获取id
            $("#addT_dept")
              .html(str)
              .on("click", "li", function() {
                var id = $(this).data("id");
                $("#t_dept_id")
                  .data("id", id)
                  .text(
                    $(this)
                      .find("a")
                      .text()
                  );
              });
            bindReset(["#t_name"], ["#t_dept_id"]);
            $(".saveBtn").on("click", function(e) {
              e.preventDefault();
              addCallBack(
                ["#t_name"],
                ["#t_dept_id"],
                "editTeacher?t_id=" + id,
                function() {
                  renderData("getTeachers", "#teacher", "tpl-teacher");
                }
              );
            });
          }
        });
          }
        });
     
      }
    });
  });
});
//删除功能==============================================================================

//删除管理员
$(function() {
  $("#admin").on("click", ".delAdmin", function() {
    console.log("i");
    $.ajax({
      url: url + "delAdmin", //链接地址
      data: {
        admin_id: $(this).data("id") //数据
      },
      type: "post", //请求类型
      dataType: "json", //返回数据类型
      success: function(response) {
        //请求成功以后的回调函数
        $("#modal-info").text(response); //模态框提示文本
        $("btn_confirm").on(
          "click", //给确认按钮绑定点击事件，点击后重新渲染页面
          renderData("getAdmins", "#admin", "tpl-admin")
        );
      }
    });
  });
});
//删除老师
$(function() {
  $("#teacher").on("click", ".delTeacher", function() {
    console.log("i");
    $.ajax({
      url: url + "delTeacher",
      data: {
        t_id: $(this).data("id")
      },
      type: "post",
      dataType: "json",
      success: function(response) {
        $("#modal-info").text(response);
        $("btn_confirm").on(
          "click",
          renderData("getTeachers", "#teacher", "tpl-teacher")
        );
      }
    });
  });
});
//删除学生
$(function() {
  $("#student").on("click", ".delStu", function() {
    console.log("i");
    $.ajax({
      url: url + "delStudent",
      data: {
        s_id: $(this).data("id")
      },
      type: "post",
      dataType: "json",
      success: function(response) {
        $("#modal-info").text(response);
        $("btn_confirm").on(
          "click",
          renderData("getStudents", "#student", "tpl-student")
        );
      }
    });
  });
});
//删除课程
$(function() {
  $("#course").on("click", ".delCourse", function() {
    $.ajax({
      url: url + "delCourse",
      data: {
        c_id: $(this).data("id")
      },
      type: "post",
      dataType: "json",
      success: function(response) {
        $("#modal-info").text(response);
        $("btn_confirm").on(
          "click",
          renderData("getCourses", "#course", "tpl-course")
        );
      }
    });
  });
});
//删除系
$(function() {
  $("#dept").on("click", ".delDept", function() {
    $.ajax({
      url: url + "delDept",
      data: {
        dept_id: $(this).data("id")
      },
      type: "post",
      dataType: "json",
      success: function(response) {
        $("#modal-info").text(response);
        $("btn_confirm").on(
          "click",
          renderData("getDepts", "#dept", "tpl-dept")
        );
      }
    });
  });
});
//============================================================================
//渲染列表
function renderData(link, selector, tpllink) {
  $.ajax({
    url: url + link,
    type: "get",
    dataType: "json",
    success: function(data) {
      if (typeof data != "object") {
        $(selector).text("获取相关数据失败");
      } else {
        $.ajax({
          url: tplUrl + tpllink,
          datatype: "html",
          type: "get",
          data: data,
          success: function(response) {
            // console.log(data);
            var render = template.compile(response);
            var html = render({
              data: data
            });
            $(selector).html(html);
          }
        });
      }
    }
  });
}

//渲染添加页面
function renderAdd(selector, btn, url, cb) {
  $(selector).on("click", btn, function() {
    $.ajax({
      url: tplUrl + url,
      dataType: "html",
      success: cb
    });
  });
}

//按钮重置功能
function bindReset(arrInp, arrSel) {
  $(".resetInfo").on("click", function(e) {
    e.preventDefault();
    var arrInput = arrInp || [];
    var arrSelect = arrSel || [];

    for (var i = 0; i < arrInput.length; i++) {
      $(arrInput[i]).val("");
    }
    for (var i = 0; i < arrSelect.length; i++) {
      $(arrSelect[i])
        .html("请选择<span class='caret'></span>")
        .data("id", null);
    }
  });
}

//按钮提交
function addCallBack(arrInput, arrSelect, api, cb) {
  var data = {};
  var arrInp = arrInput || [];
  var arrSel = arrSelect || [];
  for (var i = 0; i < arrInp.length; i++) {
    var id = $(arrInp[i]).get(0).id;
    data[id] = $(arrInp[i]).val();
  }
  for (var i = 0; i < arrSel.length; i++) {
    var id = $(arrSel[i]).get(0).id;
    console.log($(arrSel[i]).data("id"));
    data[id] = $(arrSel[i]).data("id");
  }
  console.log(data);
  $.ajax({
    url: url + api,
    type: "post",
    dataType: "json",
    data: data,
    success: function(response) {
      console.log(response);
      $("#modal-info").text(response);
      cb();
    }
  });
}

// //按钮修改
// function editCallBack(arrInput, arrSelect, api, cb) {
//   var data = {};
//   var arrInp = arrInput || [];
//   var arrSel = arrSelect || [];
//   for (var i = 0; i < arrInp.length; i++) {
//     let id = $(arrInp[i]).get(0).id;
//     data[id] = $(arrInp[i]).val();
//   }
//   for (var i = 0; i < arrSel.length; i++) {
//     let id = $(arrSel[i]).get(0).id;
//     // console.log($(arrSel[i]).data("id"));
//     data[id] = $(arrSel[i]).data("id");
//   }
//   // data[str] = id
//   console.log(data);
//   $.ajax({
//     url: url + api,
//     type: "post",
//     dataType: "json",
//     data: data,
//     success: function (response) {
//       console.log(response)
//       $("#modal-info").text(response);
//       cb();
//     }
//   });
// }
