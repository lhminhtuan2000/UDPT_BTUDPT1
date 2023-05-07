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
                <form id="editform" method="POST">
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="task-name" class="col-form-label">Tên công việc</label>
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" id="task_name" name="task_name" required="required">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="message-text" class="col-form-label">Mô tả</label>
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" id="description" name="description" required="required">
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
                            <select class="selectpicker_type" data-style="btn-success" name="task_type" id="task_type">
                                <option value=1>Công việc</option>
                                <option value=2>Cá nhân</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label class="control-label">Trạng thái</label>
                            <select class="selectpicker_status" data-style="btn-success" name="task_status" id="task_status">
                                <option value="TO DO">TO DO</option>
                                <option value="IN PROGRESS">IN PROGRESS</option>
                                <option value="FINISHED">FINISHED</option>
                            </select>
                        </div>
                        <script type="text/javascript">
                            // document.getElementById("task_name").innerHTML = $("#task_name").data;
                            // document.getElementById("description").innerHTML = $("#description").text;

                            $(document).ready(function() {
                                $(".selectpicker_type").click(function() {
                                    $("#options").text($(this).text());
                                });
                            });
                            $(document).ready(function() {
                                $(".selectpicker_status").click(function() {
                                    $("#options").text($(this).text());
                                });
                            });
                        </script>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Đóng</button>
                        <button type="submit" class="btn btn-success" id="addButton">Cập nhật</button>
                        <input type="hidden" name=action id=action value="edittask">
                        <input type="hidden" name="taskid" id="taskid" value="">
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!-- add form modal end -->
</body>

</html>