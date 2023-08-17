<div class="loader_bg">
    <div class="loader"></div>
</div>

<?php
include('includes/header.php');
include('includes/topbar.php');
include('includes/sidebar.php');
?>

<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1>Profile</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="index.php">Home</a></li>
                        <li class="breadcrumb-item active">Operators Profile</li>
                    </ol>
                </div>
            </div>
        </div><!-- /.container-fluid -->
    </section>

    <!-- apis -->
    <?php
    $datafromApi =  htmlspecialchars($_GET["USER_ID"]);

    $opData = file_get_contents('http://172.17.87.229/6senses/admin_get_operator_details_by_id.php?USER_ID=' . $datafromApi);
    $opDataResult = json_decode($opData, true);

    if ($opDataResult['error'] === true) {
    ?> <center>
            <div class="error-page">
                <h2 class="headline text-warning"> 404</h2>

                <div class="error-content">
                    <h3><i class="fas fa-exclamation-triangle text-warning"></i> Oops! Page not found.</h3>

                    <p>
                        We could not find the page you were looking for.
                        Meanwhile, you may <a href="index.php">return to dashboard</a> or try using the search form.
                    </p>
                    <form class="search-form">
                </div>
                <!-- /.input-group -->
                </form>
            </div>
        </center>
    <?php
    } else {
    ?>

        <!-- Main content -->
        <section class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">

                        <!-- Profile Image -->
                        <div class="card card-primary  elevation-3">
                            <div class="card-body box-profile">
                                <div class="text-center">


                                    <img class="profile-user-img img-fluid img-circle" style="width: 140px; height: 140px;" src="
                                    <?php echo "http://172.17.87.229/6senses/images/" . $opDataResult['OP_DATA'][0]['DP_FILE'] ?>">
                                </div>


                                <h3 class="profile-username text-center"> <?php echo $opDataResult['OP_DATA'][0]['F_NAME'] . "  " . $opDataResult['OP_DATA'][0]['L_NAME'] ?></h3>


                                <div class="text-center">
                                    <strong>
                                        <h6 class="text-center">Registration Date</h>
                                    </strong>

                                    <p class="text-muted text-center">
                                        <?php echo $opDataResult['OP_DATA'][0]['REG_DATE_TIME'] ?>
                                    </p>
                                </div>

                                <ul class="list-group list-group-unbordered mb-3">
                                    <li class="list-group-item">

                                        <b>Active Appointment</b> <a class="float-right"><?php echo $opDataResult['APPT_COUNT'][0]['ACCEPTED_APPT_COUNT'] ?> </a>
                                    </li>
                                    <li class="list-group-item">

                                        <b>Pending Appointment</b> <a class="float-right"> <?php echo $opDataResult['APPT_COUNT'][0]['PENDING_APPT_COUNT'] ?></a>
                                    </li>
                                    <li class="list-group-item">

                                        <b>Completed Appointment</b> <a class="float-right"><?php echo $opDataResult['APPT_COUNT'][0]['COMPLETED_APPT_COUNT'] ?></a>
                                    </li>
                                    <li class="list-group-item">

                                        <b>Toatal Accuracy Rating</b> <a class="float-right"><?php echo $opDataResult['OP_RATING'][0]['TOTAL_ACCURACY'] ?></a>
                                    </li>
                                    <li class="list-group-item">

                                        <b>Toatal Behaviour Rating</b> <a class="float-right"><?php echo $opDataResult['OP_RATING'][0]['TOTAL_BEHAVIOUR'] ?></a>
                                    </li>
                                </ul>
                                <!-- <li class="list-group-item"> -->


                                <br>

                                </li>

                                <!-- <a id="button" class="btn btn-block bg-gray"><b id="button">Block</b></a> -->

                            </div>
                            <!-- /.card-body -->
                        </div>
                        <!-- /.card -->
                        <!-- About Me Box -->
                        <div class="card card-primary  elevation-3">
                            <div class="card-header bg-gray">
                                <h3 class="card-title">About Me</h3>
                            </div>
                            <!-- /.card-header -->
                            <div class="card-body">
                                <strong><i class="fas fa-map-marker-alt mr-1"></i>Birth-Date</strong>

                                <p class="text-muted">

                                    <?php echo $opDataResult['OP_DATA'][0]['GENDER'] ?>

                                </p>

                                <hr>

                                <strong><i class="fas fa-map-marker-alt mr-1"></i>Birth-Date</strong>

                                <p class="text-muted">

                                    <?php echo $opDataResult['OP_DATA'][0]['DOB'] ?>

                                </p>
                                <hr>
                                <strong><i class="far fa-file-alt mr-1"></i>Phone No</strong>

                                <p class="text-muted">
                                    <?php echo $opDataResult['OP_DATA'][0]['PHONE_NO'] ?>
                                </p>

                                <hr>

                                <strong><i class="fas fa-map-marker-alt mr-1"></i>Address</strong>

                                <p class="text-muted">
                                    <?php echo $opDataResult['OP_DATA'][0]['ADDRESS'] ?>
                                </p>

                                <hr>

                                <strong><i class="fas fa-map-marker-alt mr-1"></i>City</strong>

                                <p class="text-muted">

                                    <?php echo $opDataResult['OP_DATA'][0]['CITY'] ?>

                                </p>

                                <hr>

                                <strong><i class="fas fa-map-marker-alt mr-1"></i>State</strong>

                                <p class="text-muted">

                                    <?php echo $opDataResult['OP_DATA'][0]['STATE'] ?>

                                </p>

                                <hr>

                                <strong><i class="fas fa-map-marker-alt mr-1"></i>Pincode</strong>

                                <p class="text-muted">

                                    <?php echo $opDataResult['OP_DATA'][0]['PINCODE'] ?>

                                </p>

                            </div>
                            <!-- /.card-body -->
                        </div>
                        <!-- /.card -->
                    </div>
                    <!-- /.col -->
                    <div class="col-md-9">

                        <div class="card  elevation-3">

                            <div class="card-body">
                                <table id="datatablesCom" class="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                            <th>OP_ATTENDENCE</th>
                                            <th>ATTEND_DATE</th>


                                        </tr>
                                    </thead>

                                    <tbody>
                                        <?php

                                        ?><?php
                                            if (empty($opDataResult['ATTENDANCE'])) {
                                            } else {

                                                $datas = $opDataResult['ATTENDANCE'];
                                                $counts = count($datas);
                                            ?><?php
                                                $i = 0;
                                                while ($i < $counts) { ?>
                                        <tr>
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


                        <div class="card  elevation-4">
                            <div class="card-header bg-gray">
                                <h1 class="card-title">Review</h1>
                            </div>
                            <div class="card-body">
                                <div class="tab-content">

                                    <?php
                                    if (empty($opDataResult['REVIEWS'])) {
                                    ?><a><b> NO REVIEWS FOUND</b> </a><?php
                                                                    } else {

                                                                        $datas = $opDataResult['REVIEWS'];
                                                                        $counts = count($datas);
                                                                        ?><?php
                                                                            $i = 0;
                                                                            while ($i < $counts) { ?>

                                        <hr style="border:2px solid #f1f1f1">
                                        <a><b><?php echo $datas[$i]['F_NAME'] . "  " . $datas[$i]['L_NAME'] ?></b> </a>

                                        <p>
                                            <?php echo $datas[$i]['COMMENTS']  ?>
                                        </p>
                                    <?php
                                                                                $i++;
                                                                            }
                                    ?>
                                <?php
                                                                    } ?>




                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
</div>
</div>
</div>
</div>
</div>
<!-- /.row -->
</div><!-- /.container-fluid -->
</section> <?php } ?>
<!-- /.content -->
</div>

<?php
include('includes/footer.php');
?>