<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP CRUD Application Using jQuery Ajax</title>
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
        include_once 'add.php';
        include_once 'detail.php';
        include_once 'edit.php';
        ?>
        <div class="row mb-3">
            <div class="col-3">
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#taskAddModal" id="addnewbtn">Thêm mới <i class="fa fa-solid fa-plus"></i></button>
            </div>
            <div class="col-9">
                <div class="input-group input-group-lg">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon2"><i class="fa fa-search" aria-hidden="true"></i></span>
                    </div>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder="Từ khoá..." id="searchinput">
                </div>
            </div>
        </div>

        <?php
        include_once 'taskstable.php';
        ?>
        <nav id="pagination">
        </nav>
        <input type="hidden" name="currentpage" id="currentpage" value="1">
    </div>
    <!-- <div id="overlay" style="display:none;">
        <div class="spinner-border text-danger" style="width: 3rem; height: 3rem;"></div>
        <br />
        Loading...
    </div> -->
</body>

</html>