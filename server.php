<?php

$getDataString = file_get_contents('todoList.json');

$todoList = json_decode($getDataString);

if (isset($_POST['todo'])) {
    $todo = $_POST['todo'];
    array_push($todoList, $todo);

    $json_todoList = json_encode($todoList);
    file_put_contents('todoList.json', $json_todoList);
}

header('Content-Type: application/json');
echo json_encode($todoList);
