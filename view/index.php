<!DOCTYPE html>
<html>

<head>
    <link rel="stylesheet" href="/css/style.css">
</head>

<body>

    <h1>Quản lý</h1>
    <div>
        <p></p>
        <button id="btn_congviec" class="button" onClick="redirectPage(this)">CÔNG VIỆC</button>
    </div>
    <div>
        <p></p>
        <button id="btn_loaicongviec" class="button" onClick="redirectPage(this)">LOẠI CÔNG VIỆC</button>
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