<?php
session_start();
if (!isset($_SESSION['username']) && !isset($_SESSION['id'])) {   ?>
    <!DOCTYPE html>
    <html>

    <head>

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
    </head>

    <body>
        <div class="card elevation-5">

            <div class="container d-flex justify-content-center align-items-center" style="min-height: 100vh;">


                <form class="border shadow p-3 rounded" action="chek-login.php" method="post" style="width: 450px;">
                    <h1 class="text-center p-3">LOGIN</h1>
                    <?php if (isset($_GET['error'])) { ?>
                        <div class="alert alert-danger" role="alert">
                            <?= $_GET['error'] ?>
                        </div>
                    <?php } ?>
                    <div class="mb-3">
                        <label for="username" class="form-label">User name</label>
                        <input type="text" class="form-control" name="username" id="username">
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" name="password" class="form-control" id="password">
                    </div>
                    <div class="mb-1">
                        <label class="form-label">Select User Type</label>
                    </div>
                    <select class="form-select mb-3" name="role" aria-label="Default select example">

                        <option value="admin">Admin</option>
                        <option selected value="user">Helpline</option>
                    </select>
                    <center>
                        <button type="submit" class="btn btn-primary">LOGIN</button>
                    </center>
                </form>
            </div>
        </div>
    </body>

    </html>


    <style>
        .bg {
            background-color: gray;


        }
    </style>
    </body>

<?php } else {
    header("Location: index.php");
} ?>