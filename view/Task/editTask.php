<!-- add form modal -->
<html>

<head>

</head>

<body>
    <div class="modal fade" id="taskEditModal" tabindex="-1" role="dialog" aria-labelledby="userModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Cập nhật công việc<i aria-hidden="true"></i></h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <form id="editTaskForm" method="POST" data-id="">
                    <div class="modal-body">
                        <div class="form-group">
                            <label class="col-form-label">Tên công việc</label>
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" id="task_edit_name" name="task_edit_name" required="required">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-form-label">Mô tả</label>
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" id="task_edit_description" name="task_edit_description" required="required">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label">Ngày bắt đầu</label>
                            <div class="datetimepicker">
                                <input type="date" id="task_edit_start_date" name="task_edit_start_date" value="2023-05-07">
                                <span></span>
                                <input type="time" id="task_edit_start_time" name="task_edit_start_time" value="12:34">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label">Ngày kết thúc</label>
                            <div class="datetimepicker">
                                <input type="date" id="task_edit_due_date" name="task_edit_due_date" value="2023-05-07">
                                <span></span>
                                <input type="time" id="task_edit_due_time" name="task_edit_due_time" value="12:34">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label">Loại</label>
                            <select class="form-select" data-style="btn-success" name="task_edit_category_id" id="task_edit_category_id">
                                <option value=1>Công việc</option>
                                <option value=2>Cá nhân</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label class="control-label">Trạng thái</label>
                            <select class="form-select" data-style="btn-success" name="task_edit_status" id="task_edit_status">
                                <option value="TODO">TODO</option>
                                <option value="IN PROGRESS">IN PROGRESS</option>
                                <option value="FINISHED">FINISHED</option>
                            </select>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Đóng</button>
                        <button type="submit" class="btn btn-success" id="editTaskButton">Cập nhật</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!-- add form modal end -->
</body>

</html>