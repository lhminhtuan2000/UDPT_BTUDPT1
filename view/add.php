<!-- add form modal -->
<html>

<head>

</head>

<body>
    <div class="modal fade" id="taskAddModal" tabindex="-1" role="dialog" aria-labelledby="userModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Thêm công việc<i aria-hidden="true"></i></h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <form id="addform" method="POST">
                    <div class="modal-body">
                        <div class="form-group">
                            <label class="col-form-label">Tên công việc</label>
                            <div class="input-group mb-3">
                                <!-- <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1"><i class="fa fa-user-circle-o" aria-hidden="true"></i>
                                </div> -->
                                <input type="text" class="form-control" id="task_name" name="task_name" value="test" required="required">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-form-label">Mô tả</label>
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" id="task_description" name="task_description" value="test" required="required">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label">Ngày bắt đầu</label>
                            <div class="datetimepicker">
                                <input type="date" id="task_start_date" name="task_start_date" value="2023-05-05">
                                <span></span>
                                <input type="time" id="task_start_time" name="task_start_time" value="01:23">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label">Ngày kết thúc</label>
                            <div class="datetimepicker">
                                <input type="date" id="task_due_date" name="task_due_date" value="2023-05-07">
                                <span></span>
                                <input type="time" id="task_due_time" name="task_due_time" value="12:34">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label">Loại</label>
                            <select class="form-select" data-style="btn-success" name="task_category_id" id="task_category_id">
                                <option value=1>Công việc</option>
                                <option value=2>Cá nhân</option>
                            </select>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Đóng</button>
                        <button type="submit" class="btn btn-success" id="addButton">Tạo</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!-- add form modal end -->
</body>

</html>