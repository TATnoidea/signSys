//通过cookie获取管理员名称
var url = "http://localhost/signsys/api/";
var tplUrl = "http://localhost/signsys/admin/tpl/";
//获取管理员名称
$(function() {
    var admin_id = $.cookie('admin_id') || null;
    $.ajax({
        url: url + 'getAdminById.php',
        type: 'get',
        data: {
            admin_id: admin_id
        },
        dataType: 'json',
        success: function(data) {
            if(typeof data != 'object') {
                alert('管理员id错误，请重新登录');
                window.location = 'login.html'
            } else {
                $('#admin_name').text(data.adminname)
            }
        }
    })
})

//渲染管理员
$(function() {
    renderData('getAdmins', '#admin', 'tpl-admin')
})

//渲染教师
$(function() {
    $('#btn_teacher').on("click", function() {
        renderData('getTeachers', "#teacher", "tpl-teacher")
    })
})

//渲染学生
$(function() {
    $("#btn_student").on("click", function() {
        renderData('getStudents', "#student", "tpl-student")
    })
})

//渲染课程
$(function() {
    $("#btn_course").on("click", function() {
        renderData('getCourses', "#course", "tpl-course")
    })
})

//渲染系
$(function() {
    $("#btn_dept").on("click", function() {
        renderData('getDepts', "#dept", "tpl-dept")
    })
})

//删除管理员 
$(function() {
    $("#admin").on('click', ".delAdmin",function() {
        console.log("i")
        $.ajax({
            url: url + "delAdmin",
            data: {
                admin_id: $(this).data('id')
            },
            type: 'post',
            dataType: 'json',
            success: function(response) {
                alert(response)
                renderData('getAdmins', '#admin', 'tpl-admin')
            }
        })
    })
})
//删除老师
$(function() {
    $("#teacher").on('click', ".delTeacher",function() {
        console.log("i")
        $.ajax({
            url: url + "delTeacher",
            data: {
                t_id: $(this).data('id')
            },
            type: 'post',
            dataType: 'json',
            success: function(response) {
                alert(response)
                renderData('getTeachers', '#teacher', 'tpl-teacher')
            }
        })
    })
})
//删除学生
$(function() {
    $("#student").on('click', ".delStu",function() {
        console.log("i")
        $.ajax({
            url: url + "delStudent",
            data: {
                s_id: $(this).data('id')
            },
            type: 'post',
            dataType: 'json',
            success: function(response) {
                alert(response)
                renderData('getStudents', '#student', 'tpl-student')
            }
        })
    })
})
//删除课程
$(function() {
    $("#course").on('click', ".delCourse",function() {
        $.ajax({
            url: url + "delCourse",
            data: {
                c_id: $(this).data('id')
            },
            type: 'post',
            dataType: 'json',
            success: function(response) {
                alert(response)
                renderData('getCourses', "#course", "tpl-course")
            }
        })
    })
})
//删除系
$(function() {
    $("#dept").on('click', ".delDept",function() {
        $.ajax({
            url: url + "delDept",
            data: {
                dept_id: $(this).data('id')
            },
            type: 'post',
            dataType: 'json',
            success: function(response) {
                alert(response)
                renderData('getDepts', "#dept", "tpl-dept")
            }
        })
    })
})
//渲染列表
function renderData(link,selector,tpllink) {
    $.ajax({
        url: url + link,
        type: 'get',
        dataType: 'json',
        success: function(data) {
            if(typeof data != 'object') {
                $(selector).text('获取管理员数据失败')
            } else {
                $.ajax({
                    url: tplUrl + tpllink,
                    datatype: 'html',
                    type: 'get',
                    data: data,
                    success: function(response) {
                        var render = template.compile(response);
                        var html = render({data: data});
                        $(selector).html(html)
                    }
                })
            }
        }
    })
}


