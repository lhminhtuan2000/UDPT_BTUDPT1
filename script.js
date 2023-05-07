// get pagination
function pagination(totalpages, currentpage) {
    var pagelist = "";
    if (totalpages > 1) {
        currentpage = parseInt(currentpage);
        pagelist += `<ul class="pagination justify-content-center">`;
        const prevClass = currentpage == 1 ? " disabled" : "";
        pagelist += `<li class="page-item${prevClass}"><a class="page-link" href="#" data-page="${
            currentpage - 1
        }">Previous</a></li>`;
        for (let p = 1; p <= totalpages; p++) {
            const activeClass = currentpage == p ? " active" : "";
            pagelist += `<li class="page-item${activeClass}"><a class="page-link" href="#" data-page="${p}">${p}</a></li>`;
        }
        const nextClass = currentpage == totalpages ? " disabled" : "";
        pagelist += `<li class="page-item${nextClass}"><a class="page-link" href="#" data-page="${
            currentpage + 1
        }">Next</a></li>`;
        pagelist += `</ul>`;
    }

    $("#pagination").html(pagelist);
}

// get task row
function gettaskrow(task) {
    var taskRow = "";
    if (task) {
        taskRow = `<tr>
            <td class="align-middle">${task.name}</td>
            <td class="align-middle">${task.description}</td>
            <td class="align-middle">${task.start_date}</td>
            <td class="align-middle">${task.due_date}</td>
            <td class="align-middle">${task.category_id}</td>
            <td class="align-middle">${task.finished_date}</td>
            <td class="align-middle">${task.status}</td>
            <td class="align-middle">
              <a href="#" class="btn btn-success mr-3 profile" data-toggle="modal" data-target="#taskViewModal"
                title="Detail" data-id="${task.id}"><i class="fa fa-address-card-o" aria-hidden="true"></i></a>
              <a href="#" class="btn btn-warning mr-3 edituser" data-toggle="modal" data-target="#taskEditModal"
                title="Edit" data-id="${task.id}"><i class="fa fa-pencil-square-o fa-lg"></i></a>
              <a href="#" class="btn btn-danger deleteuser" title="Delete" data-id="${task.id}"><i
                  class="fa fa-trash-o fa-lg"></i></a>
            </td>
          </tr>`;
    }
    return taskRow;
}
// get tasks list
function gettasks() {
    var pageno = $("#currentpage").val();
    $.ajax({
        url: "../controller/ajax.php",
        type: "GET",
        dataType: "json",
        data: { page: pageno, action: "gettasks" },
        beforeSend: function () {
            $("#overlay").fadeIn();
        },
        success: function (rows) {
            console.log(rows);
            if (rows.tasks) {
                var taskslist = "";
                $.each(rows.tasks, function (index, task) {
                    taskslist += gettaskrow(task);
                });
                $("#userstable tbody").html(taskslist);
                let totaltasks = rows.count;
                let totalpages = Math.ceil(parseInt(totaltasks) / 4);
                const currentpage = $("#currentpage").val();
                pagination(totalpages, currentpage);
                $("#overlay").fadeOut();
            }
        },
        error: function () {
            console.log("something went wrong");
        },
    });
}

$(document).ready(function () {
    // add
    $(document).on("submit", "#addform", function (event) {
        event.preventDefault();
        var formData = {
            name: $("#task_name").val(),
            description: $("#description").val(),
            start_date: $("#start_date").val() + " " + $("#start_time").val(),
            due_date: $("#due_date").val() + " " + $("#due_time").val(),
            category_id: $("#task_type").val(),
            action: "addtask",
        };

        var alertmsg =
            $("#taskid").val().length > 0
                ? "task has been updated Successfully!"
                : "New task has been added Successfully!";
        $.ajax({
            url: "../controller/ajax.php",
            type: "POST",
            data: formData,
            beforeSend: function () {
                $("#overlay").fadeIn();
            },
            success: function (response) {
                console.log(response);
                if (response) {
                    $("#taskAddModal").modal("hide");
                    $("#addform")[0].reset();
                    $(".message").html(alertmsg).fadeIn().delay(3000).fadeOut();
                    gettasks();
                    $("#overlay").fadeOut();
                }
            },
            error: function (req, err) {
                console.log("error message: " + err + req);
            },
        });
    });
    // edit
    $(document).on("submit", "#editform", function (event) {
        event.preventDefault();
        var pid = $(this).data("taskid");
        alert("Handler for `submit` called: " + pid);
        var today = new Date();
        var date =
            today.getFullYear() +
            "-" +
            (today.getMonth() + 1) +
            "-" +
            today.getDate();
        var time =
            today.getHours() +
            ":" +
            today.getMinutes() +
            ":" +
            today.getSeconds();
        var dateTime = date + " " + time;
        var formData = {
            id: pid,
            name: $("#task_name").val(),
            description: $("#description").val(),
            start_date: $("#start_date").val() + " " + $("#start_time").val(),
            due_date: $("#due_date").val() + " " + $("#due_time").val(),
            category_id: $("#task_type").val(),
            finished_date: dateTime,
            status: $("#task_status").val(),
            action: "edittask",
        };

        var alertmsg =
            $("#taskid").val().length > 0
                ? "Task has been updated Successfully!"
                : "New task has been added Successfully!";
        $.ajax({
            url: "../controller/ajax.php",
            type: "POST",
            data: formData,
            beforeSend: function () {
                $("#overlay").fadeIn();
            },
            success: function (response) {
                console.log(response);
                if (response) {
                    $("#taskEditModal").modal("hide");
                    $("#editform")[0].reset();
                    $(".message").html(alertmsg).fadeIn().delay(3000).fadeOut();
                    gettasks();
                    $("#overlay").fadeOut();
                }
            },
            error: function (req, err) {
                console.log("error message: " + err + req);
            },
        });
    });
    // pagination
    $(document).on("click", "ul.pagination li a", function (e) {
        e.preventDefault();
        var $this = $(this);
        const pagenum = $this.data("page");
        $("#currentpage").val(pagenum);
        gettasks();
        $this.parent().siblings().removeClass("active");
        $this.parent().addClass("active");
    });
    // form add reset on new button
    $("#addnewbtn").on("click", function () {
        $("#addform")[0].reset();
        $("#taskid").val("");
    });
    //  get user

    $(document).on("click", "a.edituser", function () {
        var pid = $(this).data("id");

        // alert("Handler for `submit` called: " + pid);
        // var check_value = $(check_data).data("task_type");

        $.ajax({
            url: "../controller/ajax.php",
            type: "GET",
            data: { id: pid, action: "gettask" },
            beforeSend: function () {
                $("#overlay").fadeIn();
            },
            success: function (response) {
                if (response) {
                    const task = JSON.parse(response);
                    $("#task_id").val(pid);
                    $("#task_name").val(task.name);
                    $("#description").val(task.description);
                    $("#task_type").val(task.category_id);
                    $("#task_status").val(task.status);

                    let text_start_date = task.start_date;
                    const start_date = text_start_date.split(" ");
                    $("#start_date").val(start_date[0]);
                    $("#start_time").val(start_date[1]);
                    let text_due_date = task.due_date;
                    const due_date = text_due_date.split(" ");
                    $("#due_date").val(due_date[0]);
                    $("#due_time").val(due_date[1]);
                }
                $("#overlay").fadeOut();
            },
            error: function (req, err) {
                console.log("error message: " + err + req);
            },
        });
    });

    // delete task
    $(document).on("click", "a.deleteuser", function (e) {
        e.preventDefault();
        var pid = $(this).data("id");
        if (confirm("Are you sure want to delete this?")) {
            $.ajax({
                url: "../controller/ajax.php",
                type: "GET",
                dataType: "json",
                data: { id: pid, action: "deletetask" },
                beforeSend: function () {
                    $("#overlay").fadeIn();
                },
                success: function (res) {
                    if (res.deleted == 1) {
                        $(".message")
                            .html("task has been deleted successfully!")
                            .fadeIn()
                            .delay(3000)
                            .fadeOut();
                        gettasks();
                        $("#overlay").fadeOut();
                    }
                },
                error: function () {
                    console.log("something went wrong");
                },
            });
        }
    });
    // get detail

    $(document).on("click", "a.profile", function () {
        var pid = $(this).data("id");
        $.ajax({
            url: "../controller/ajax.php",
            type: "GET",
            dataType: "json",
            data: { id: pid, action: "gettask" },
            success: function (task) {
                if (task) {
                    var task_type =
                        task.category_id == 1 ? "Cá nhân" : "Công việc";
                    const detail_body = `<div class="row">
                    <div class="col p-3 mb-2 bg-info text-white" class="p-3 mb-2 bg-info text-white">Tên công việc</div>
                    <div class="col p-3 mb-2 bg-info text-white">${task.name}</div>
                    <div class="w-100"></div>
                    <div class="col">Mô tả</div>
                    <div class="col">${task.description}</div>
                    <div class="w-100"></div>
                    <div class="col p-3 mb-2 bg-info text-white">Ngày bắt đầu</div>
                    <div class="col p-3 mb-2 bg-info text-white">${task.start_date}</div>
                    <div class="w-100"></div>
                    <div class="col">Ngày kết thúc</div>
                    <div class="col">${task.due_date}</div>
                    <div class="w-100"></div>
                    <div class="col p-3 mb-2 bg-info text-white">Loại</div>
                    <div class="col p-3 mb-2 bg-info text-white">${task_type}</div>
                    <div class="w-100"></div>
                    <div class="col">Ngày hoàn thành</div>
                    <div class="col">${task.finished_date}</div>
                    <div class="w-100"></div>
                    <div class="col p-3 mb-2 bg-info text-white">Trạng thái</div>
                    <div class="col p-3 mb-2 bg-info text-white">${task.status}</div> 
                </div>`;
                    $("#detail").html(detail_body);
                }
            },
            error: function () {
                console.log("something went wrong");
            },
        });
    });

    // searching
    $("#searchinput").on("keyup", function () {
        const searchText = $(this).val();
        if (searchText.length > 1) {
            $.ajax({
                url: "../controller/ajax.php",
                type: "GET",
                dataType: "json",
                data: { searchQuery: searchText, action: "search" },
                success: function (tasks) {
                    if (tasks) {
                        var taskslist = "";
                        $.each(tasks, function (index, task) {
                            taskslist += gettaskrow(task);
                        });
                        $("#userstable tbody").html(taskslist);
                        $("#pagination").hide();
                    }
                },
                error: function () {
                    console.log("something went wrong");
                },
            });
        } else {
            gettasks();
            $("#pagination").show();
        }
    });
    // load tasks
    gettasks();
});
