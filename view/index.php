<!DOCTYPE html>
<html>

<head>
    <link rel="stylesheet" href="/css/style.css">
</head>

<body>
    <div>
        <h1>QUẢN LÝ</h1>
    </div>
    <div>
        <h3 id="btn_congviec" class="button" onClick="redirectPage(this)">CÔNG VIỆC</h3>
    </div>
    <div>
        <h3 id="btn_loaicongviec" class="button" onClick="redirectPage(this)">LOẠI CÔNG VIỆC</h3>
    </div>
    <script>
        function redirectPage(button) {
            var choice = button.id;
            switch (choice) {
                case "btn_congviec":
                    window.location.href = "congviec.php";
                    break;
                case "btn_loaicongviec":
                    window.location.href = "loaicongviec.php";
                    break;
                default:
                    return false;
            }
        }
    </script>

</body>

</html>