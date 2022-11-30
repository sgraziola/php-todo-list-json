<?php

$todoList = [
    "HTML",
    "CSS",
    "Responsive Design",
    "Javascript",
    "PHP",
    "Laravel",
    "MySql"
];

header('Content-Type: application/json');
echo json_encode($todoList);
