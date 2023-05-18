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
        <h3 id="taskButton" class="button" onClick="redirectPage(this)">CÔNG VIỆC</h3>
    </div>
    <div>
        <h3 id="categoryButton" class="button" onClick="redirectPage(this)">LOẠI CÔNG VIỆC</h3>
    </div>
    <script>
        function redirectPage(button) {
            var choice = button.id;
            switch (choice) {
                case "taskButton":
                    window.location.href = "Task/Task.php";
                    break;
                case "categoryButton":
                    window.location.href = "Category/Category.php";
                    break;
                default:
                    return false;
            }
        }
    </script>

</body>

</html>