<?php
    include('conn.php');

    // $name = $_GET["name"];
    // $password = $_GET["password"];

    // $login_query = "SELECT * FROM `Student` WHERE name='$name' AND password='$password'";
    // $user = $conn->query($login_query);

    // //authenticating user.
    // if (mysqli_num_rows($user) > 0) {
    //     echo "logged in.";
    // } else {
    //     echo "incorrect credentials";
    //     return;
    // }

    // echo ("<br/>");
    // echo ("<br/>");

    $sql = "SELECT * FROM `Student`;";
    $result = $conn->query($sql);

    //student list.
    if (mysqli_num_rows($result) > 0) {

        while ($data = mysqli_fetch_assoc($result)) {
            ?>
            <tr>
                <td><?php echo $data['id']; ?></td>
                <td><?php echo $data['name']; ?></td>
                <td><?php echo $data['age']; ?></td>    
                <td><a href="signupForm.php?id=<?php echo $data['id'];?>">Edit</a></td>
                <td><a href="delete.php?id=<?php echo $data['id']; ?>">Delete</a></td>
            </tr>
            <br/>
            <?php	
        }
    } else {
        echo "0 results";
    }
?>
