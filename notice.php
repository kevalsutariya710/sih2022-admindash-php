<div class="loader_bg">
    <div class="loader"></div>
</div>

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
                        <h1 class="m-0 text-dark">Completed Appointments</h1>
                    </div><!-- /.col -->
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="index.php">Home</a></li>
                            <li class="breadcrumb-item active">Completed Appointments</li>
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
                            <th>F_NAME</th>
                            <th>L_NAME</th>
                            <th>REQUEST_ID</th>
                            <th>U_PINCODE</th>
                            <th>U_PHONE_NO</th>


                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th>F_NAME</th>
                            <th>L_NAME</th>
                            <th>REQUEST_ID</th>
                            <th>U_PINCODE</th>
                            <th>U_PHONE_NO</th>


                        </tr>
                    </tfoot>
                    <tbody>
                        <?php
                        $data = file_get_contents('http://172.17.87.229/6senses/admin_get_update_where_no_op.php');
                        $apidata = json_decode($data, true);
                        $count = count($apidata);
                        ?>
                        <?php
                            if ($apidata['error'] === true) {
                            } else {

                                $datas = $apidata['NO_OP_AREA'];
                                $counts = count($datas);
                            ?><?php
                                $i = 0;
                                while ($i < $counts) { ?>
                        <tr>
                            <td><?php echo $datas[$i]['F_NAME'] ?></td>
                            <td><?php echo $datas[$i]['L_NAME'] ?></td>
                            <td><?php echo $datas[$i]['REQUEST_ID'] ?></td>
                            <td><?php echo $datas[$i]['U_PINCODE'] ?></td>
                            <td><?php echo $datas[$i]['U_PHONE_NO'] ?></td>

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

        <section class="content">
            <div class="container-fluid">
                <!-- Small boxes (Stat box) -->


            </div>
        </section>
    </div>
</div>

<?php
include 'includes/footer.php';
?>