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
                            <label for="task-name" class="col-form-label">Tên công việc</label>
                            <div class="input-group mb-3">
                                <!-- <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1"><i class="fa fa-user-circle-o" aria-hidden="true"></i>
                                </div> -->
                                <input type="text" class="form-control" id="task_name" name="task_name" value="test" required="required">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="message-text" class="col-form-label">Mô tả</label>
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" id="description" name="description" value="test" required="required">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label">Ngày bắt đầu</label>
                            <div class="datetimepicker">
                                <input type="date" id="start_date" name="start_date" value="2023-05-07">
                                <span></span>
                                <input type="time" id="start_time" name="start_time" value="12:34">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label">Ngày kết thúc</label>
                            <div class="datetimepicker">
                                <input type="date" id="due_date" name="due_date" value="2023-05-07">
                                <span></span>
                                <input type="time" id="due_time" name="due_time" value="12:34">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label">Loại</label>
                            <select class="selectpicker" data-style="btn-success" name="task_type" id="task_type">
                                <option value=1>Công việc</option>
                                <option value=2>Cá nhân</option>
                            </select>
                        </div>
                        <script type="text/javascript">
                            $(document).ready(function() {
                                $(".selectpicker").click(function() {
                                    $("#options").text($(this).text());
                                });
                            });
                        </script>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Đóng</button>
                        <button type="submit" class="btn btn-success" id="addButton">Tạo</button>
                        <input type="hidden" name=action id=action value="addtask">
                        <input type="hidden" name="taskid" id="taskid" value="">
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!-- add form modal end -->
</body>

</html>