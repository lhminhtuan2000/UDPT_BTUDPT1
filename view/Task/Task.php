<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="author" content="TuanRose">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP CRUD Application Using PHP-OOP, PDO-MySQL, jQuery, Ajax, Bootstrap 4</title>
    <link rel="stylesheet" href="/css/style.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">

    <!-- JS, Popper.js, and jQuery -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
    <script src="/script.js"></script>
</head>

<body>
    <div class="container">
        <div class="alert alert alert-primary" role="alert">
            <h2 class="text-primary text-center">QUẢN LÝ CÔNG VIỆC</h2>
        </div>
        <div class="alert alert-success text-center message" role="alert">
        </div>

        <?php
        include_once 'addTask.php';
        include_once 'detailTask.php';
        include_once 'editTask.php';
        ?>
        <div class="row mb-3">
            <div class="col-2">
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#taskAddModal" id="addNewTaskButton">Thêm mới <i class="fa fa-solid fa-plus"></i></button>
            </div>
            <div class="col-3">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon2"><i class="fa fa-search" aria-hidden="true"></i></span>
                    </div>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder="Từ khoá..." id="searchTaskInput">
                </div>
            </div>
            <div class="col-3">
                <div class="btn-group">
                    <button type="button" id="filterResetButton" class="btn btn-outline-success">Trạng thái</button>
                    <button type="button" id="filterButton" class="btn btn-outline-success dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true">
                        <i class="fa fa-filter"></i>
                    </button>
                    <ul class="dropdown-menu" id="filterValue">
                        <li class="dropdown-item" id="filterValueTODO" value="TODO">TODO</li>
                        <li class="dropdown-item" id="filterValueINPROGRESS" value="IN PROGRESS">IN PROGRESS</li>
                        <li class="dropdown-item" id="filterValueFINISHED" value="FINISHED">FINISHED</li>
                    </ul>
                </div>
            </div>
            <div class="col-4">
                <div class="btn-group">
                    <button type="button" id="deleteSelectedTasksButton" class="btn btn-danger">Xoá tuỳ chọn</button>
                    <button type="button" id="deleteAllTasksButton" class="btn btn-danger">Xoá hết</button>
                </div>
            </div>

            <?php
            include_once 'taskstable.php';
            ?>
            <nav id="pagination"></nav>
            <input type="hidden" name="currentpage" id="currentpage" value="1">
        </div>
        <!-- <div id="overlay" style="display:none;">
        <div class="spinner-border text-danger" style="width: 3rem; height: 3rem;"></div>
        <br />
        Loading...
    </div> -->
</body>

</html>