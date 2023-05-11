<?php

require_once '../model/Task.php';

class TaskController
{
    private $model;

    public function __construct()
    {
        $this->model = new Task();
    }

    public function getAllTasks()
    {
        $page = (!empty($_GET['page'])) ? $_GET['page'] : 1;
        $limit = 4;
        $start = ($page - 1) * $limit;

        $tasks = $this->model->getRows($start, $limit);
        if (!empty($tasks)) {
            $taskslist = $tasks;
        } else {
            $taskslist = [];
        }
        $total = $this->model->getCount();
        $taskArr = ['count' => $total, 'tasks' => $taskslist];
        echo json_encode($taskArr);
        exit();
    }

    public function deleteTask()
    {
        $taskId = (!empty($_GET['id'])) ? $_GET['id'] : '';
        if (!empty($taskId)) {
            $isDeleted = $this->model->deleteRow($taskId);
            if ($isDeleted) {
                $message = ['deleted' => 1];
            } else {
                $message = ['deleted' => 0];
            }
            echo json_encode($message);
            exit();
        }
    }

    public function addTask()
    {
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
        $taskId = $this->model->add($taskData);
        if (!empty($taskId)) {
            $task = $this->model->getRow('id', $taskId);
            echo json_encode($task);
            exit();
        }
    }

    public function getTaskById()
    {
        $taskId = (!empty($_GET['id'])) ? $_GET['id'] : '';
        if (!empty($taskId)) {
            $task = $this->model->getRow('id', $taskId);
            echo json_encode($task);
            exit();
        }
    }

    public function updateTask()
    {
        $id = $_POST['id'];
        $name = $_POST['name'];
        $description = $_POST['description'];
        $start_date = $_POST['start_date'];
        $due_date = $_POST['due_date'];
        $category_id = $_POST['category_id'];
        $status = $_POST['status'];

        $task = $this->model->getRow('id', $id);

        if ($status == "FINISHED") {
            $taskData = [
                'name' => $name,
                'description' => $description,
                'start_date' => $start_date,
                'due_date' => $due_date,
                'category_id' => $category_id,
                'finished_date' => date('Y-m-d H:i:s'),
                'status' => $status,
            ];
        } else {
            $taskData = [
                'name' => $name,
                'description' => $description,
                'start_date' => $start_date,
                'due_date' => $due_date,
                'category_id' => $category_id,
                'status' => $status,
            ];
        }
        if ($task) {
            $this->model->update($taskData, $id);
            echo json_encode($task);
            exit();
        }
    }

    public function searchTasks()
    {
        $queryString = (!empty($_GET['searchQuery'])) ? trim($_GET['searchQuery']) : '';
        $results = $this->model->searchTask($queryString);
        echo json_encode($results);
        exit();
    }
}

$controller = new TaskController();

if (isset($_REQUEST['action'])) {
    switch ($_REQUEST['action']) {
        case 'gettasks':
            $controller->getAllTasks();
            break;
        case 'deletetask':
            $controller->deleteTask();
            break;
        case 'addtask':
            $controller->addTask();
            break;
        case 'edittask':
            $controller->updateTask();
            break;
        case 'gettask':
            $controller->getTaskById();
            break;
        case 'search':
            $controller->searchTasks();
            break;
        default:
            http_response_code(500);
            echo 'Error: Action not matched';
            break;
    }
}
