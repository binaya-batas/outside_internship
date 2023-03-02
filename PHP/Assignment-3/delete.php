<?php
    include('conn.php');

    $id = $_GET["id"];

    $delete_query = "DELETE FROM Student where id='$id';";

    if ($conn->query($delete_query) === TRUE) {
        echo "Record deleted successfully";
        ?>
        <a href="login.php">Back to student list.</a>
        <?php
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
?>