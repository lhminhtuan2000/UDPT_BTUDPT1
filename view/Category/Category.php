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
            <h2 class="text-primary text-center">QUẢN LÝ LOẠI CÔNG VIỆC</h2>
        </div>
        <div class="alert alert-success text-center message" role="alert">
        </div>

        <?php
        include_once 'addCategory.php';
        include_once 'detailCategory.php';
        include_once 'editCategory.php';
        ?>
        <div class="row mb-3">
            <div class="col-2">
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#addCategoryModal" id="addNewCategoryButton">Thêm mới <i class="fa fa-solid fa-plus"></i></button>
            </div>
            <div class="col-4">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon2"><i class="fa fa-search" aria-hidden="true"></i></span>
                    </div>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder="Từ khoá..." id="searchCategoryInput">
                </div>
            </div>
            <div class="col-5">
                <div class="btn-group">
                    <button type="button" id="deleteSelectedCategoriesButton" class="btn btn-danger">Xoá tuỳ chọn</button>
                    <button type="button" id="deleteAllCategoriesButton" class="btn btn-danger">Xoá hết</button>
                </div>
            </div>

            <?php
            include_once 'categoriestable.php';
            ?>
            <nav id="paginationCategory"></nav>
            <input type="hidden" name="currentpageCategory" id="currentpageCategory" value="1">
        </div>
</body>

</html>