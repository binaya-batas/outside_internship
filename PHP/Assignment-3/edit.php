<?php
    include('conn.php');

    $id = $_GET["id"];
    $name = $_GET["name"];
    $age = $_GET["age"];
    $password = $_get["password"];

    $update_query = "UPDATE Student SET name='$name', age='$age', password='$password' WHERE id='$id'";

    if ($conn->query($update_query) === TRUE) {
        echo "Record updated successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
?>
