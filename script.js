// task subfunction
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
              <a href="#" class="btn btn-info mr-3 detailtask" data-toggle="modal" data-target="#taskViewModal"
                title="Detail" data-id="${task.id}"><i class="fa fa-address-card-o" aria-hidden="true"></i></a>
              <a href="#" class="btn btn-warning mr-3 edittask" data-toggle="modal" data-target="#taskEditModal"
                title="Edit" data-id="${task.id}"><i class="fa fa-pencil-square-o fa-lg"></i></a>
              <a href="#" class="btn btn-danger deletetask" title="Delete" data-id="${task.id}"><i
                  class="fa fa-trash-o fa-lg"></i></a>
            </td>
            <td class="align-middle">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="${task.id}">
                </div>
            </td>
          </tr>`;
    }
    return taskRow;
}

// get tasks list
function gettasks() {
    var pageno = $("#currentpage").val();
    $.ajax({
        url: "../../controller/TaskController.php",
        type: "GET",
        dataType: "json",
        data: { page: pageno, action: "getTasks" },
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
                $("#taskstable tbody").html(taskslist);
                let totaltasks = rows.count;
                let totalpages = Math.ceil(parseInt(totaltasks) / 4);
                const currentpage = $("#currentpage").val();
                pagination(totalpages, currentpage);
                $("#overlay").fadeOut();
            }
        },
        error: function (req, err) {
            console.log("error message: " + err + req);
        },
    });
}

// get tasks filter by status
function gettasksbystatus(status) {
    $.ajax({
        url: "../../controller/TaskController.php",
        type: "GET",
        dataType: "json",
        data: { filterQuery: status, action: "filterTask" },
        success: function (tasks) {
            if (tasks) {
                var taskslist = "";
                $.each(tasks, function (index, task) {
                    taskslist += gettaskrow(task);
                });
                $("#taskstable tbody").html(taskslist);
                $("#pagination").hide();
            }
        },
        error: function (req, err) {
            console.log("error message: " + err + req);
        },
    });
}

// category subfunction
// get pagination category
function paginationCategory(totalpages, currentpage) {
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

    $("#paginationCategory").html(pagelist);
}

// get category row
function getcategoryrow(category) {
    var categoryRow = "";
    if (category) {
        categoryRow = `<tr>
            <td class="align-middle">${category.name}</td>
            <td class="align-middle">${category.date_created}</td>
            <td class="align-middle">
              <a href="#" class="btn btn-info mr-3 detailcategory" data-toggle="modal" data-target="#categoryViewModal"
                title="Detail" data-id="${category.id}"><i class="fa fa-address-card-o" aria-hidden="true"></i></a>
              <a href="#" class="btn btn-warning mr-3 editcategory" data-toggle="modal" data-target="#categoryEditModal"
                title="Edit" data-id="${category.id}"><i class="fa fa-pencil-square-o fa-lg"></i></a>
              <a href="#" class="btn btn-danger deletecategory" title="Delete" data-id="${category.id}"><i
                  class="fa fa-trash-o fa-lg"></i></a>
            </td>
            <td class="align-middle">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="${category.id}">
                </div>
            </td>
          </tr>`;
    }
    return categoryRow;
}

// get categories list
function getcategories() {
    var pageno = $("#currentpageCategory").val();
    $.ajax({
        url: "../../controller/CategoryController.php",
        type: "GET",
        dataType: "json",
        data: { page: pageno, action: "getCategories" },
        success: function (rows) {
            console.log(rows);
            if (rows.categories) {
                var categorieslist = "";
                $.each(rows.categories, function (index, category) {
                    categorieslist += getcategoryrow(category);
                });
                $("#categoriestable tbody").html(categorieslist);
                let totalcategories = rows.count;
                let totalpages = Math.ceil(parseInt(totalcategories) / 4);
                const currentpage = $("#currentpageCategory").val();
                paginationCategory(totalpages, currentpage);
            }
        },
        error: function (req, err) {
            console.log("error message: " + err + req);
        },
    });
}

//EVENT HANDLE
$(document).ready(function () {
    // load page Task
    if (document.location.pathname.match("/view/Task/Task.php")) {
        // add task
        $(document).on("submit", "#addTaskForm", function (event) {
            event.preventDefault();
            var formData = {
                name: $("#task_name").val(),
                description: $("#task_description").val(),
                start_date:
                    $("#task_start_date").val() +
                    " " +
                    $("#task_start_time").val(),
                due_date:
                    $("#task_due_date").val() + " " + $("#task_due_time").val(),
                category_id: $("#task_category_id").val(),
                action: "addTask",
            };

            var alertmsg = "New task has been added successfully!";
            $.ajax({
                url: "../../controller/TaskController.php",
                type: "POST",
                data: formData,
                beforeSend: function () {
                    $("#overlay").fadeIn();
                },
                success: function (response) {
                    console.log(response);
                    if (response) {
                        $("#taskAddModal").modal("hide");
                        $("#addTaskForm")[0].reset();
                        $(".message")
                            .html(alertmsg)
                            .fadeIn()
                            .delay(3000)
                            .fadeOut();
                        gettasks();
                        $("#overlay").fadeOut();
                    }
                },
                error: function (req, err) {
                    console.log("error message: " + err + req);
                },
            });
        });

        // edit task
        $(document).on("submit", "#editTaskForm", function (event) {
            event.preventDefault();
            var pid = $(this).data("id");
            // alert($("#task_edit_status").val());
            var formData = {
                id: pid,
                name: $("#task_edit_name").val(),
                description: $("#task_edit_description").val(),
                start_date:
                    $("#task_edit_start_date").val() +
                    " " +
                    $("#task_edit_start_time").val(),
                due_date:
                    $("#task_edit_due_date").val() +
                    " " +
                    $("#task_edit_due_time").val(),
                category_id: $("#task_edit_category_id").val(),
                status: $("#task_edit_status").val(),
                action: "editTask",
            };

            var alertmsg = "Task has been updated successfully!";
            $.ajax({
                url: "../../controller/TaskController.php",
                type: "POST",
                data: formData,
                beforeSend: function () {
                    $("#overlay").fadeIn();
                },
                success: function (response) {
                    console.log(response);
                    if (response) {
                        $("#taskEditModal").modal("hide");
                        $("#editTaskForm")[0].reset();
                        $(".message")
                            .html(alertmsg)
                            .fadeIn()
                            .delay(3000)
                            .fadeOut();
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

        //  get task
        $(document).on("click", "a.edittask", function () {
            var pid = $(this).data("id");

            $.ajax({
                url: "../../controller/TaskController.php",
                type: "GET",
                data: { id: pid, action: "getTask" },
                beforeSend: function () {
                    $("#overlay").fadeIn();
                },
                success: function (response) {
                    if (response) {
                        const task = JSON.parse(response);
                        $("#editTaskForm").data("id", task.id); // pass id to editTaskForm
                        $("#task_edit_name").val(task.name);
                        $("#task_edit_description").val(task.description);
                        $("#task_edit_category_id").val(task.category_id);
                        $("#task_edit_status").val(task.status);

                        let text_start_date = task.start_date;
                        const start_date = text_start_date.split(" ");
                        $("#task_edit_start_date").val(start_date[0]);
                        $("#task_edit_start_time").val(start_date[1]);
                        let text_due_date = task.due_date;
                        const due_date = text_due_date.split(" ");
                        $("#task_edit_due_date").val(due_date[0]);
                        $("#task_edit_due_time").val(due_date[1]);
                    }
                    $("#overlay").fadeOut();
                },
                error: function (req, err) {
                    console.log("error message: " + err + req);
                },
            });
        });

        // delete task
        $(document).on("click", "a.deletetask", function (e) {
            e.preventDefault();
            var pid = $(this).data("id");
            if (confirm("Are you sure want to delete this?")) {
                var alertmsg = "Task has been deleted successfully!";
                $.ajax({
                    url: "../../controller/TaskController.php",
                    type: "GET",
                    dataType: "json",
                    data: { id: pid, action: "deleteTask" },
                    beforeSend: function () {
                        $("#overlay").fadeIn();
                    },
                    success: function (res) {
                        if (res.deleted == 1) {
                            $(".message")
                                .html(alertmsg)
                                .fadeIn()
                                .delay(3000)
                                .fadeOut();
                            gettasks();
                            $("#overlay").fadeOut();
                        }
                    },
                    error: function (req, err) {
                        console.log("error message: " + err + req);
                    },
                });
            }
        });

        // get detail task
        $(document).on("click", "a.detailtask", function () {
            var pid = $(this).data("id");
            $.ajax({
                url: "../../controller/TaskController.php",
                type: "GET",
                dataType: "json",
                data: { id: pid, action: "getTask" },
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
                        $("#detailTask").html(detail_body);
                    }
                },
                error: function (req, err) {
                    console.log("error message: " + err + req);
                },
            });
        });

        // search task
        $("#searchTaskInput").on("keyup", function () {
            const searchText = $(this).val();
            if (searchText.length > 1) {
                $.ajax({
                    url: "../../controller/TaskController.php",
                    type: "GET",
                    dataType: "json",
                    data: { searchQuery: searchText, action: "searchTask" },
                    success: function (tasks) {
                        if (tasks) {
                            var taskslist = "";
                            $.each(tasks, function (index, task) {
                                taskslist += gettaskrow(task);
                            });
                            $("#taskstable tbody").html(taskslist);
                            $("#pagination").hide();
                        }
                    },
                    error: function (req, err) {
                        console.log("error message: " + err + req);
                    },
                });
            } else {
                gettasks();
                $("#pagination").show();
            }
        });

        // filter
        $("#filterValueTODO").on("click", function () {
            gettasksbystatus("TODO");
        });
        $("#filterValueINPROGRESS").on("click", function () {
            gettasksbystatus("IN PROGRESS");
        });
        $("#filterValueFINISHED").on("click", function () {
            gettasksbystatus("FINISHED");
        });
        $("#filterResetButton").on("click", function () {
            gettasks();
            $("#pagination").show();
        });

        //delete selected tasks
        $("#deleteSelectedTasksButton").on("click", function () {
            const selectedID = [];
            $(":checkbox:checked").each(function (key) {
                selectedID[key] = $(this).val();
            });
            if (selectedID.length === 0) {
                alert("Chưa chọn công việc!!!");
            } else {
                if (confirm("Bạn có chắc muốn xoá công việc này?")) {
                    var alertmsg = "Tasks have been deleted successfully!";
                    $.ajax({
                        url: "../../controller/TaskController.php",
                        type: "POST",
                        dataType: "json",
                        data: { id: selectedID, action: "deleteSelectedTasks" },
                        beforeSend: function () {
                            $("#overlay").fadeIn();
                        },
                        success: function (res) {
                            if (res.deleted == 1) {
                                $(".message")
                                    .html(alertmsg)
                                    .fadeIn()
                                    .delay(3000)
                                    .fadeOut();
                                gettasks();
                                $("#overlay").fadeOut();
                            }
                        },
                        error: function (req, err) {
                            console.log("error message: " + err + req);
                        },
                    });
                }
            }
        });

        //delete all tasks
        $("#deleteAllTasksButton").on("click", function () {
            if (confirm("Bạn có chắc muốn xoá hết công việc?")) {
                var alertmsg = "All tasks have been deleted successfully!";
                $.ajax({
                    url: "../../controller/TaskController.php",
                    type: "POST",
                    dataType: "json",
                    data: { action: "deleteAllTasks" },
                    beforeSend: function () {
                        $("#overlay").fadeIn();
                    },
                    success: function (res) {
                        if (res.deleted == 1) {
                            $(".message")
                                .html(alertmsg)
                                .fadeIn()
                                .delay(3000)
                                .fadeOut();
                            gettasks();
                            $("#overlay").fadeOut();
                        }
                    },
                    error: function (req, err) {
                        console.log("error message: " + err + req);
                    },
                });
            }
        });

        // load tasks
        gettasks();
    }

    // load page Category
    if (document.location.pathname.match("/view/Category/Category.php")) {
        // add category
        $(document).on("submit", "#addCategoryForm", function (event) {
            event.preventDefault();
            var formData = {
                name: $("#category_name").val(),
                action: "addCategory",
            };

            var alertmsg = "New category has been added successfully!";
            $.ajax({
                url: "../../controller/CategoryController.php",
                type: "POST",
                data: formData,
                success: function (response) {
                    console.log(response);
                    if (response) {
                        $("#addCategoryModal").modal("hide");
                        $("#addCategoryForm")[0].reset();
                        $(".message")
                            .html(alertmsg)
                            .fadeIn()
                            .delay(3000)
                            .fadeOut();
                        getcategories();
                    }
                },
                error: function (req, err) {
                    console.log("error message: " + err + req);
                },
            });
        });

        // edit category
        $(document).on("submit", "#editCategoryForm", function (event) {
            event.preventDefault();
            var pid = $(this).data("id");
            var formData = {
                id: pid,
                name: $("#category_edit_name").val(),
                action: "editCategory",
            };

            var alertmsg = "Category has been updated successfully!";
            $.ajax({
                url: "../../controller/CategoryController.php",
                type: "POST",
                data: formData,
                success: function (response) {
                    console.log(response);
                    if (response) {
                        $("#categoryEditModal").modal("hide");
                        $("#editCategoryForm")[0].reset();
                        $(".message")
                            .html(alertmsg)
                            .fadeIn()
                            .delay(3000)
                            .fadeOut();
                        getcategories();
                    }
                },
                error: function (req, err) {
                    console.log("error message: " + err + req);
                },
            });
        });

        // pagination category
        $(document).on("click", "ul.pagination li a", function (e) {
            e.preventDefault();
            var $this = $(this);
            const pagenum = $this.data("page");
            $("#currentpageCategory").val(pagenum);
            getcategories();
            $this.parent().siblings().removeClass("active");
            $this.parent().addClass("active");
        });

        //  get category
        $(document).on("click", "a.editcategory", function () {
            var pid = $(this).data("id");

            $.ajax({
                url: "../../controller/CategoryController.php",
                type: "GET",
                data: { id: pid, action: "getCategory" },
                success: function (response) {
                    if (response) {
                        const category = JSON.parse(response);
                        $("#editCategoryForm").data("id", category.id); // pass id to editCategoryForm
                        $("#category_edit_name").val(category.name);
                    }
                },
                error: function (req, err) {
                    console.log("error message: " + err + req);
                },
            });
        });

        // get detail category
        $(document).on("click", "a.detailcategory", function () {
            var pid = $(this).data("id");
            $.ajax({
                url: "../../controller/CategoryController.php",
                type: "GET",
                dataType: "json",
                data: { id: pid, action: "getCategory" },
                success: function (category) {
                    if (category) {
                        const detail_body = `<div class="row">
                    <div class="col p-3 mb-2 bg-info text-white" class="p-3 mb-2 bg-info text-white">Tên loại công việc</div>
                    <div class="col p-3 mb-2 bg-info text-white">${category.name}</div>
                    <div class="w-100"></div>
                    <div class="col">Ngày tạo</div>
                    <div class="col">${category.date_created}</div>
                    <div class="w-100"></div>
                </div>`;
                        $("#detailCategory").html(detail_body);
                    }
                },
                error: function (req, err) {
                    console.log("error message: " + err + req);
                },
            });
        });

        // delete category
        $(document).on("click", "a.deletecategory", function (e) {
            e.preventDefault();
            var pid = $(this).data("id");
            if (confirm("Are you sure want to delete this?")) {
                var alertmsg = "Category has been deleted successfully!";
                $.ajax({
                    url: "../../controller/CategoryController.php",
                    type: "GET",
                    dataType: "json",
                    data: { id: pid, action: "deleteCategory" },
                    success: function (res) {
                        if (res.deleted == 1) {
                            $(".message")
                                .html(alertmsg)
                                .fadeIn()
                                .delay(3000)
                                .fadeOut();
                            getcategories();
                        }
                    },
                    error: function (req, err) {
                        console.log("error message: " + err + req);
                    },
                });
            }
        });

        // search categories
        $("#searchCategoryInput").on("keyup", function () {
            const searchText = $(this).val();
            if (searchText.length > 1) {
                $.ajax({
                    url: "../../controller/CategoryController.php",
                    type: "GET",
                    dataType: "json",
                    data: {
                        searchQuery: searchText,
                        action: "searchCategories",
                    },
                    success: function (categories) {
                        if (categories) {
                            var categorieslist = "";
                            $.each(categories, function (index, category) {
                                categorieslist += getcategoryrow(category);
                            });
                            $("#categoriestable tbody").html(categorieslist);
                            $("#paginationCategory").hide();
                        }
                    },
                    error: function (req, err) {
                        console.log("error message: " + err + req);
                    },
                });
            } else {
                getcategories();
                $("#paginationCategory").show();
            }
        });

        //delete selected categories
        $("#deleteSelectedCategoriesButton").on("click", function () {
            const selectedID = [];
            $(":checkbox:checked").each(function (key) {
                selectedID[key] = $(this).val();
            });
            if (selectedID.length === 0) {
                alert("Chưa chọn loại công việc!!!");
            } else {
                if (confirm("Bạn có chắc muốn xoá loại công việc này?")) {
                    var alertmsg = "Categories have been deleted successfully!";
                    $.ajax({
                        url: "../../controller/CategoryController.php",
                        type: "POST",
                        dataType: "json",
                        data: {
                            id: selectedID,
                            action: "deleteSelectedCategories",
                        },
                        success: function (res) {
                            if (res.deleted == 1) {
                                $(".message")
                                    .html(alertmsg)
                                    .fadeIn()
                                    .delay(3000)
                                    .fadeOut();
                                getcategories();
                            }
                        },
                        error: function (req, err) {
                            console.log("error message: " + err + req);
                        },
                    });
                }
            }
        });

        //delete all categories
        $("#deleteAllCategoriesButton").on("click", function () {
            if (confirm("Bạn có chắc muốn xoá hết loại công việc?")) {
                var alertmsg = "All categories have been deleted successfully!";
                $.ajax({
                    url: "../../controller/CategoryController.php",
                    type: "POST",
                    dataType: "json",
                    data: { action: "deleteAllCategories" },
                    success: function (res) {
                        if (res.deleted == 1) {
                            $(".message")
                                .html(alertmsg)
                                .fadeIn()
                                .delay(3000)
                                .fadeOut();
                            getcategories();
                        }
                    },
                    error: function (req, err) {
                        console.log("error message: " + err + req);
                    },
                });
            }
        });

        // load categories
        getcategories();
    }
});
