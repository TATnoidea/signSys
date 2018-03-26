var url = "http://localhost/signsys/api/"; //api地址
var tplUrl = "http://localhost/signsys/admin/tpl/"; //模板地址
//获取管理员名称
$(function () {
    var admin_id = $.cookie('admin_id') || null;
    $.ajax({
        url: url + 'getAdminById.php',
        type: 'get',
        data: {
            admin_id: admin_id
        },
        dataType: 'json',
        success: function (data) {
            if (typeof data != 'object') {
                alert('管理员id错误，请重新登录');
                window.location = 'login.html'
            } else {
                $('#admin_name').text(data.adminname)
            }
        }
    })
})
//渲染功能==============================================================
//渲染管理员
$(function () {
    renderData('getAdmins', '#admin', 'tpl-admin')
})

//渲染管理员
$(function () {
    $('#btn_admin').on("click", function () {
        renderData('getAdmins', "#admin", "tpl-admin")
    })
})
//渲染教师
$(function () {
    $('#btn_teacher').on("click", function () {
        renderData('getTeachers', "#teacher", "tpl-teacher")
    })
})

//渲染学生
$(function () {
    $("#btn_student").on("click", function () {
        renderData('getStudents', "#student", "tpl-student")
    })
})

//渲染课程
$(function () {
    $("#btn_course").on("click", function () {
        renderData('getCourses', "#course", "tpl-course")
    })
})

//渲染系
$(function () {
    $("#btn_dept").on("click", function () {
        renderData('getDepts', "#dept", "tpl-dept")
    })
})
//添加功能=========================================================================
//渲染添加管理员
$(function () {
    renderAdd("#admin", "#addAdmin", "tpl-addAdmin", function (response) {
        $("#admin").html(response)
    })
})
//渲染添加系
$(function () {
    renderAdd("#dept", "#addDept", "tpl-addDept", function (response) {
        $("#dept").html(response)
    })
})
//渲染添加课程
$(function () {
    $("#course").on("click", "#addCourse", function () {

        $.ajax({
            url: tplUrl + "tpl-addCourse",
            dataType: "html",
            success: function (response) {
                // console.log(response)
                $("#course").html(response)
                //获取周
                $.ajax({
                    url: url + "getWeeks",
                    dataType: "json",
                    success: function (response) {
                        var str = ""
                        for (let i = 0; i < response.length; i++) {
                            str += "<li data-id='" + response[i].w_id + "'><a herf='#'>" + response[i].week + "</li>"
                        }
                        $("#addC_week").html(str)
                            .on('click', 'li', function () {
                                var id = $(this).data("id")
                                $("#ac_week")
                                    .data("id", id)
                                    .text($(this).find('a').text())
                            })
                    }
                })
                //获取时间
                $.ajax({
                    url: url + "getTimes",
                    dataType: "json",
                    success: function (response) {
                        var str = ""
                        for (let i = 0; i < response.length; i++) {
                            str += "<li data-id='" + response[i].time_id + "'><a herf='#'>" + response[i].time_name + "</li>"
                        }
                        $("#addC_time").html(str)
                            .on('click', 'li', function () {
                                var id = $(this).data("id")
                                $("#ac_time")
                                    .data("id", id)
                                    .text($(this).find('a').text())
                            })
                    }
                })
                //获取系
                $.ajax({
                    url: url + "getDepts",
                    dataType: "json",
                    success: function (response) {
                        var str = ""
                        for (let i = 0; i < response.length; i++) {
                            str += "<li data-id='" + response[i].d_id + "'><a herf='#'>" + response[i].d_name + "</li>"
                        }
                        $("#addC_dept").html(str)
                            .on("click", "li", function () {
                                var id = $(this).data("id")
                                $("#ac_dept")
                                    .data("id", id)
                                    .text($(this).find('a').text())
                                //获取教师模板
                                $.ajax({
                                    url: tplUrl + "tpl-listTea",
                                    dataType: "html",
                                    success: function (response) {
                                        //获取教师数据
                                        $.ajax({
                                            url: url + "getTeachersByDeptId",
                                            dataType: "json",
                                            data: {
                                                d_id: id
                                            },
                                            success: function (data) {
                                                var render = template.compile(response);
                                                var html = render({
                                                    data: data
                                                })
                                                $("#listTea").html(html)
                                                    .on('click', 'li', function () {
                                                        var id = $(this).data("id")
                                                        $("#ac_teacher")
                                                            .data("id", id)
                                                            .text($(this).find('a').text())
                                                    })
                                            }
                                        })
                                    }
                                })
                            })
                    }
                })
            }
        })
    })
})
//渲染添加老师
$(function () {
    renderAdd("#teacher", "#addTeacher", "tpl-addTeacher", function (response) {
        $("#teacher").html(response)
        $.ajax({
            url: url + "getDepts",
            dataType: "json",
            success: function (response) {
                var str = ""
                for (let i = 0; i < response.length; i++) {
                    str += "<li data-id='" + response[i].d_id + "'><a herf='#'>" + response[i].d_name + "</li>"
                }
                $("#addT_dept").html(str)
                .on("click", "li", function() {
                    var id = $(this).data("id")
                    $("#at_dept")
                    .data("id", id)
                    .text($(this).find('a').text())
                })
                
            }
        })
    })
})
//渲染添加学生
$(function() {
    renderAdd("#student", "#addStudent", "tpl-addStudent",function(response) {
        $("#student").html(response)
        $("#addS_sex").on("click", "li", function() {
            var id = $(this).data("id")
            $("#as_sex")
            .data("id", id)
            .text($(this).find('a').text())
        })
        $.ajax({
            url: url + "getDepts",
            dataType: "json",
            success: function (response) {
                var str = ""
                for (let i = 0; i < response.length; i++) {
                    str += "<li data-id='" + response[i].d_id + "'><a herf='#'>" + response[i].d_name + "</li>"
                }
                $("#addS_dept").html(str)
                .on("click", "li", function() {
                    var id = $(this).data("id")
                    $("#as_dept")
                    .data("id", id)
                    .text($(this).find('a').text())
                })
                
            }
        })
    })
})
//删除功能==============================================================================

//删除管理员 
$(function () {
    $("#admin").on('click', ".delAdmin", function () {
        console.log("i")
        $.ajax({
            url: url + "delAdmin",
            data: {
                admin_id: $(this).data('id')
            },
            type: 'post',
            dataType: 'json',
            success: function (response) {
                alert(response)
                renderData('getAdmins', '#admin', 'tpl-admin')
            }
        })
    })
})
//删除老师
$(function () {
    $("#teacher").on('click', ".delTeacher", function () {
        console.log("i")
        $.ajax({
            url: url + "delTeacher",
            data: {
                t_id: $(this).data('id')
            },
            type: 'post',
            dataType: 'json',
            success: function (response) {
                alert(response)
                renderData('getTeachers', '#teacher', 'tpl-teacher')
            }
        })
    })
})
//删除学生
$(function () {
    $("#student").on('click', ".delStu", function () {
        console.log("i")
        $.ajax({
            url: url + "delStudent",
            data: {
                s_id: $(this).data('id')
            },
            type: 'post',
            dataType: 'json',
            success: function (response) {
                alert(response)
                renderData('getStudents', '#student', 'tpl-student')
            }
        })
    })
})
//删除课程
$(function () {
    $("#course").on('click', ".delCourse", function () {
        $.ajax({
            url: url + "delCourse",
            data: {
                c_id: $(this).data('id')
            },
            type: 'post',
            dataType: 'json',
            success: function (response) {
                alert(response)
                renderData('getCourses', "#course", "tpl-course")
            }
        })
    })
})
//删除系
$(function () {
    $("#dept").on('click', ".delDept", function () {
        $.ajax({
            url: url + "delDept",
            data: {
                dept_id: $(this).data('id')
            },
            type: 'post',
            dataType: 'json',
            success: function (response) {
                alert(response)
                renderData('getDepts', "#dept", "tpl-dept")
            }
        })
    })
})
//============================================================================
//渲染列表
function renderData(link, selector, tpllink) {
    $.ajax({
        url: url + link,
        type: 'get',
        dataType: 'json',
        success: function (data) {
            if (typeof data != 'object') {
                $(selector).text('获取相关数据失败')
            } else {
                $.ajax({
                    url: tplUrl + tpllink,
                    datatype: 'html',
                    type: 'get',
                    data: data,
                    success: function (response) {
                        var render = template.compile(response);
                        var html = render({
                            data: data
                        });
                        $(selector).html(html)
                    }
                })
            }
        }
    })
}

//渲染添加页面
function renderAdd(selector, btn, url, cb) {
    $(selector).on("click", btn, function () {
        $.ajax({
            url: tplUrl + url,
            dataType: "html",
            success: cb
        })
    })
}

//按钮重置功能
(function() {
    $(".tab-content").on("click", ".resetInfo", function() {
        $(this).preventDefault();
        console.log(1)
    })
})