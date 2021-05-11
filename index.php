<?php

include 'controllers/routing/routes.php';

$uri = $_SERVER['REQUEST_URI'];
$pageUri = new Routes($uri);
$pageUri -> loadPage();