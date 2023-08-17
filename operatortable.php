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
        <section class="content-header">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1>Operators Data</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="index.php">Home</a></li>
                        <li class="breadcrumb-item active">Operators Table</li>
                    </ol>
                </div>
            </div>
            <!-- /.container-fluid -->
            <div class="card elevation-4">
                <!-- /.card-header -->
                <div class="card-body">
                    <table id="datatablesOp" class="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>USERID</th>
                                <th>NAME</th>
                                <th>EMAIL_ID</th>
                                <th>PHONE_NO</th>
                                <th>ADDRESS</th>
                                <th>CITY</th>
                                <th>STATE</th>
                                <th>PINCODE</th>
                                <th>DOB</th>
                                <th>GENDER</th>
                                <th>STATUS</th>
                                <th>REG_DATE_TIME</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>USERID</th>
                                <th>NAME</th>
                                <th>EMAIL_ID</th>
                                <th>PHONE_NO</th>
                                <th>ADDRESS</th>
                                <th>CITY</th>
                                <th>STATE</th>
                                <th>PINCODE</th>
                                <th>DOB</th>
                                <th>GENDER</th>
                                <th>STATUS</th>
                                <th>REG_DATE_TIME</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            <?php
                            // $data = file_get_contents('http://172.17.87.229/6senses/admin_get_operator_details.php');
                            // $apidata = json_decode($data, true);
                            // $count = count($apidata);


                            ?><?php
                                if ($apidata['error'] === true) {
                                } else {

                                    $datas = $apidata['OP_DATA'];
                                    $counts = count($datas);
                                ?><?php
                                    $i = 0;
                                    while ($i < $counts) { ?>
                            <tr>
                                <td><a href='./profile.php?USER_ID=<?php echo $datas[$i]['USERID'] ?>'><?php echo $datas[$i]['USERID'] ?></a></td>
                                <td><?php echo $datas[$i]['F_NAME'] . " " . $datas[$i]['L_NAME'] ?></td>
                                <td><?php echo $datas[$i]['EMAIL_ID'] ?></td>
                                <td><?php echo $datas[$i]['PHONE_NO'] ?></td>
                                <td><?php echo $datas[$i]['ADDRESS'] ?></td>
                                <td><?php echo $datas[$i]['CITY'] ?></td>
                                <td><?php echo $datas[$i]['STATE'] ?></td>
                                <td><?php echo $datas[$i]['PINCODE'] ?></td>
                                <td><?php echo $datas[$i]['DOB'] ?></td>
                                <td><?php echo $datas[$i]['GENDER'] ?></td>
                                <td><?php echo $datas[$i]['STATUS'] ?></td>
                                <td><?php echo $datas[$i]['REG_DATE_TIME'] ?></td>
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
        </section>
    </div>
</div>

<?php
include('includes/footer.php');
?>