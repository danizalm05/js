<?php
/**
 * Filename: user.php
 * Author: Yusuf Shakeel
 * Date: 2017-02-26 Sunday
 * Description: This file contains user api.
 *
 * Copyright (c) 2017 Yusuf Shakeel
 * https://github.com/yusufshakeel
 * https://www.youtube.com/yusufshakeel
 *
 * MIT License
 *
 * Note! This is only for demo purpose.
 * DO NOT USE IN PRODUCTION ENVIRONMENT
 */

// setting header
 header('Access-Control-Allow-Origin: *');
 header('Content-Type: application/json');

// Database credentials
 
define('DB_NAME', 'mydb');
define ('DB_HOST' , 'localhost'); 
define ('DB_USER' , 'root');  
define ('DB_PASS' , '');   
// Get connection
$mysqli = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
if(!$mysqli){
  die("Connection failed: " . $mysqli->error);
}

// Get parameter
$page = isset($_GET['page']) ? intval($_GET['page']) : 1;
$pagelimit = isset($_GET['pagelimit']) ? intval($_GET['pagelimit']) : 10;
$id = isset($_GET['id']) ? $_GET['id'] : null;

if ($page < 1) {
  $page = 1;
}

if ($pagelimit < 0) {
  $pagelimit = 10;
}

$offset = $page * $pagelimit - $pagelimit;

// Query to get data from the table
$query = sprintf("SELECT id, firstname, lastname, lastmodified, created FROM user");

if (isset($id)) {
  $query .= sprintf(" WHERE id = '%s'", $id);
}

$query .= sprintf(" ORDER BY id");
$query .= sprintf(" LIMIT %d, %d", $offset, $pagelimit);

// Execute query
$result = $mysqli->query($query);

// Loop through the returned data
$data = array();
foreach ($result as $row) {
  $data[] = $row;
}

//free memory associated with result
$result->close();

// If no data
if (count($data) === 0) {
  $data = array(
    "error" => "No data"
  );
}
else {

  // Query total record
  $query = sprintf("SELECT COUNT(id) AS total_user FROM user");
  
  // Execute query
  $result = $mysqli->query($query);
  
  $totalrecord = 0;
  
  // Loop through the returned data
  foreach ($result as $row) {
    $totalrecord = intval($row['total_user']);
  }

  // Free memory associated with result
  $result->close();
  
  $data = array(
    "success" => array(
      "data" => $data,
      "page" => $page,
      "pagelimit" => $pagelimit,
      "fetched" => count($data),
      "totalrecord" => $totalrecord
    )
  );
  
}

// Close connection
$mysqli->close();

// Now print the data
print json_encode($data);