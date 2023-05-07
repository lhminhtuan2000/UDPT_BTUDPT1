<?php
if (isset($_REQUEST['action'])) {
    $action = $_REQUEST['action'];
}
if (!empty($action)) {
    require_once '../model/Task.php';
    $obj = new Task();
}

if ($action == 'addtask' && !empty($_POST)) {
    $name = $_POST['name'];
    $description = $_POST['description'];
    $start_date = $_POST['start_date'];
    $due_date = $_POST['due_date'];
    $category_id = $_POST['category_id'];

    $taskData = [
        'name' => $name,
        'description' => $description,
        'start_date' => $start_date,
        'due_date' => $due_date,
        'category_id' => $category_id,
        'status' => "TODO",
    ];

    $taskId = $obj->add($taskData);
    if (!empty($taskId)) {
        $task = $obj->getRow('id', $taskId);
        echo json_encode($task);
        exit();
    }
}

if ($action == 'edittask' && !empty($_POST)) {
    $id = $_POST['id'];
    $name = $_POST['name'];
    $description = $_POST['description'];
    $start_date = $_POST['start_date'];
    $due_date = $_POST['due_date'];
    $category_id = $_POST['category_id'];
    $finished_date = $_POST['finished_date'];
    $status = $_POST['status'];

    $taskData = [
        'name' => $name,
        'description' => $description,
        'start_date' => $start_date,
        'due_date' => $due_date,
        'category_id' => $category_id,
        'finished_date' => $finished_date,
        'status' => $status,
    ];
    if (!empty($$id)) {
        $obj->update($taskData, $id);
        $task = $obj->getRow('id', $id);
        echo json_encode($task);
        exit();
    }
}

if ($action == "gettasks") {
    $page = (!empty($_GET['page'])) ? $_GET['page'] : 1;
    $limit = 4;
    $start = ($page - 1) * $limit;

    $tasks = $obj->getRows($start, $limit);
    if (!empty($tasks)) {
        $taskslist = $tasks;
    } else {
        $taskslist = [];
    }
    $total = $obj->getCount();
    $taskArr = ['count' => $total, 'tasks' => $taskslist];
    echo json_encode($taskArr);
    exit();
}

if ($action == "gettask") {
    $taskId = (!empty($_GET['id'])) ? $_GET['id'] : '';
    if (!empty($taskId)) {
        $task = $obj->getRow('id', $taskId);
        echo json_encode($task);
        exit();
    }
}

if ($action == "deletetask") {
    $taskId = (!empty($_GET['id'])) ? $_GET['id'] : '';
    if (!empty($taskId)) {
        $isDeleted = $obj->deleteRow($taskId);
        if ($isDeleted) {
            $message = ['deleted' => 1];
        } else {
            $message = ['deleted' => 0];
        }
        echo json_encode($message);
        exit();
    }
}

if ($action == 'search') {
    $queryString = (!empty($_GET['searchQuery'])) ? trim($_GET['searchQuery']) : '';
    $results = $obj->searchTask($queryString);
    echo json_encode($results);
    exit();
}
