<?php
    include('conn.php');

    $id = $_GET["id"];
    $name = $_GET["name"];
    $age = $_GET["age"];
    $password = $_GET["password"];

    if ($id) {
        $update_query = "UPDATE Student SET name='$name', age='$age', password='$password' WHERE id='$id'";

        if ($conn->query($update_query) === TRUE) {
            echo "Record updated successfully";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    } else {
        $signup_query = "INSERT INTO Student(name, age, password) VALUES('$name', '$age', '$password')";
    
        if ($conn->query($signup_query) === TRUE) {
            echo "New record created successfully";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    }


?>