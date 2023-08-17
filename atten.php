<?php
session_start();
error_reporting(0);

$user = $_SESSION['email'];

if ($user == null) {
    echo "request forbidden!!!";
} else {


?>

    <?php
    include('includes/header.php');
    include('includes/topbar.php');
    include('includes/sidebar.php');
    ?>

    <div class="content-wrapper">
        <div class="container-fluid">
            <!-- Content Header (Page header) -->
            <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1 class="m-0 text-dark">Attendance</h1>
                        </div><!-- /.col -->
                        <div class="col-sm-6">
                            <ol class="breadcrumb float-sm-right">
                                <li class="breadcrumb-item"><a href="index.php">Home</a></li>
                                <li class="breadcrumb-item active">Attendance</li>
                            </ol>
                        </div><!-- /.col -->
                    </div><!-- /.row -->
                </div><!-- /.container-fluid -->
            </div>
            <!-- /.content-header -->

            <div class="card elevation-4">
                <!-- /.card-header -->
                <div class="card-body">
                    <table id="datatablesCom" class="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>OP_ID</th>
                                <th>OP_ATTENDENCE</th>
                                <th>ATTEND_DATE</th>


                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>OP_ID</th>
                                <th>OP_ATTENDENCE</th>
                                <th>ATTEND_DATE</th>



                            </tr>
                        </tfoot>
                        <tbody>
                            <?php
                            $data = file_get_contents('');
                            $apidata = json_decode($data, true);
                            $count = count($apidata);


                            ?><?php
                                if ($apidata['error'] === true) {
                                } else {

                                    $datas = $apidata['Appointments'];
                                    $counts = count($datas);
                                ?><?php
                                    $i = 0;
                                    while ($i < $counts) { ?>
                            <tr>
                                <td><?php echo $datas[$i]['OP_ID'] ?></td>
                                <td><?php echo $datas[$i]['OP_ATTENDENCE'] ?></td>
                                <td><?php echo $datas[$i]['ATTEND_DATE'] ?></td>

                            <?php
                                        $i++;
                                    }
                            ?>
                            </tr><?php
                                } ?>
                        </tbody>
                    </table>
                </div>
            </div>


        <?php
        include('includes/footer.php');
    }
        ?>