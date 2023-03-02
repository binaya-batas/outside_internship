<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div class="signup">
        <form action="signup.php" method="get">
            <label for="email">Name: </label>
            <input type="text" name="name" id="name">

            <br/>
            <br/>

            <label for="age">Age: </label>
            <input type="number" name="age" id="age">

            <br/>
            <br/>

            <label for="password">Password: </label>
            <input type="text" name="password" id="password">

            <br/>
            <br/>

            <input type="hidden" id="id" name="id" value=<?php echo $_GET["id"]; ?>>

            <br/>
            <br/>

            <input name="Submit" type="submit" value="Submit" />
            <div class="">Already have an account? <span><a href="index.html">Log in</a></span></div>
        </form>
    </div>
</body>
</html>