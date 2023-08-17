<?php
session_start();
error_reporting(0);

$user = $_SESSION['email'];

if ($user == null) {
    echo "  <center><h1> 403 request forbidden!!!</h1>";
} else {
?>
    <div class="loader_bg">
        <div class="loader"></div>
    </div><?php
            include('includes/header.php');
            include('includes/topbar.php');
            include('includes/sidebar.php');
            ?>
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class=" text-dark">Dashboard-Telangana</h1>
                    </div><!-- /.col -->
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <label for="dog-names">
                                <h4>Choose State : </h4>
                            </label>
                            <br>
                            <select name="state-names" id="s1" onchange=" SelectRedirect();">
                                <option value="INDIA">INDIA</option>
                                <!-- <option value="ANDAMAN_AND_NICOBAR">ANDAMAN_AND_NICOBAR</option>
                                <option value="ANDHRA_PRADESH">ANDHRA_PRADESH</option>
                                <option value="ARUNACHAL_PRADESH">ARUNACHAL_PRADESH</option> -->
                                <option value="ASSAM">ASSAM</option>
                                <!-- <option value="BIHAR">BIHAR</option>
                                <option value="CHANDIGARH">CHANDIGARH</option>
                                <option value="CHATTISGARH">CHATTISGARH</option>
                                <option value="DADRA_AND_NAGAR_HAVELI">DADRA_AND_NAGAR_HAVELI</option>
                                <option value="DAMAN_AND_DIU">DAMAN_AND_DIU</option>
                                <option value="DELHI">DELHI</option>
                                <option value="GOA">GOA</option> -->
                                <option value="Telangana">Telangana</option>
                                <option value="Gujarat">Gujarat</option>
                                <!-- <option value="HARYANA">HARYANA</option>
                                <option value="HIMACHAL_PRADESH">HIMACHAL_PRADESH</option>
                                <option value="MAHARASHTRA">MAHARASHTRA</option>
                                <option value="JAMMU_AND_KASHMIR">JAMMU_AND_KASHMIR</option>
                                <option value="JHARKHAND">JHARKHAND</option>
                                <option value="KARNATAKA">KARNATAKA</option>
                                <option value="KERALA">KERALA</option>
                                <option value="LAKSHADWEEP">LAKSHADWEEP</option>
                                <option value="MADHYA_PRADESH">MADHYA_PRADESH</option>
                                <option value="MANIPUR">MANIPUR</option>
                                <option value="MEGHALAYA">MEGHALAYA</option>
                                <option value="MIZORAM">MIZORAM</option>
                                <option value="NAGALAND">NAGALAND</option>
                                <option value="ODISHA">ODISHA</option>
                                <option value="PONDICHERRY">PONDICHERRY</option>
                                <option value="PUNJAB">PUNJAB</option>
                                <option value="RAJASTHAN">RAJASTHAN</option>
                                <option value="SIKKIM">SIKKIM</option>
                                <option value="TAMIL_NADU">TAMIL_NADU</option>
                                <option value="TELANGANA">TELANGANA</option>
                                <option value="TRIPURA">TRIPURA</option>
                                <option value="UTTAR_PRADESH">UTTAR_PRADESH</option>
                                <option value="UTTARAKHAND">UTTARAKHAND</option>
                                <option value="WEST_BENGAL">WEST_BENGAL</option> -->
                            </select>
                        </ol>
                    </div>
                </div><!-- /.row -->
            </div><!-- /.container-fluid -->
        </div>
        <!-- /.content-header -->

        <!-- Main content -->

        <section class="content">
            <div class="container-fluid">
                <!-- Small boxes (Stat box) -->

                <div class="row">
                    <div class="col-lg-3 col-6">
                        <!-- small box -->
                        <div class="small-box bg-info elevation-5">
                            <?php
                            $data = file_get_contents('http://172.17.87.229/6senses/admin_get_state_wise_data.php?STATE=Telangana');
                            $apicomp = json_decode($data, true);
                            ?>
                            <div class="inner">
                                <h3> <?php echo $apicomp['STATUS_COUNT'][0]["PENDING_APPT"] ?></h3>
                                <p>Total Pending Appointments</p>
                            </div>
                            <div class="icon">
                                <i class="ion ion-bag"></i>
                            </div>
                        </div>
                    </div>
                    <!-- ./col -->
                    <div class="col-lg-3 col-6">
                        <!-- small box -->
                        <div class="small-box bg-warning elevation-5">
                            <?php
                            $data = file_get_contents("http://172.17.87.229/6senses/admin_get_state_wise_data.php?STATE=Telangana");
                            $apiop = json_decode($data, true);
                            ?>
                            <div class="inner">
                                <h3><?php echo $apiop['STATUS_COUNT'][0]["ACTIVE_APPT"] ?></h3>
                                <p>Total Active Appointments</p>
                            </div>
                            <div class="icon">
                                <i class="ion ion-stats-bars"></i>
                            </div>
                        </div>
                    </div>
                    <!-- ./col -->
                    <div class="col-lg-3 col-6">
                        <!-- small box -->
                        <div class="small-box bg-success elevation-5">
                            <?php
                            $datas = file_get_contents('http://172.17.87.229/6senses/admin_get_state_wise_data.php?STATE=Telangana');
                            $apiop = json_decode($datas, true);
                            ?>

                            <div class="inner">
                                <h3> <?php echo $apiop['STATUS_COUNT'][0]["COMPLETED_APPT"] ?></h3>

                                <p>Total Completed Appointments</p>
                            </div>
                            <div class="icon">
                                <i class="ion ion-pie-graph"></i>
                            </div>
                        </div>
                    </div>
                    <!-- ./col -->

                    <div class="col-lg-3 col-6">
                        <!-- small box -->
                        <div class="small-box bg-danger elevation-5">
                            <?php
                            $datas = file_get_contents('http://172.17.87.229/6senses/admin_get_state_wise_data.php?STATE=Telangana');
                            $apiop = json_decode($datas, true);
                            ?>
                            <div class="inner">
                                <h3> <?php echo $apiop['TOTAL_OP'][0]['COUNT'] ?></h3>

                                <p>Total Operators</p>
                            </div>
                            <div class="icon">
                                <i class="ion ion-person"></i>
                            </div>
                        </div>
                    </div>
                    <!-- ./col -->
                </div>
                <!-- /.row -->
            </div><!-- /.container-fluid -->
        </section>
        <!-- /.chart -->

        <div class="container-fluid">
            <div class="row">
                <div class="col-md-6">

                    <div class="card  elevation-3">
                        <div class="card-header bg-gray">
                            <i class="fas fa-chart-area me-1"></i>
                            Monthly Data
                        </div>
                        <div class="card-body"><canvas id="gujAreaChart" style="min-height: 250px; height: 100%; max-height: 100%; max-width: 100%;"></canvas></div>
                    </div>

                </div>
                <div class="col-md-6">
                    <div class="card elevation-3">
                        <div class="card-header bg-gray">
                            <i class="fas fa-chart-pie me-1"></i>
                            Gender Data
                        </div>
                        <div class="card-body"><canvas id="gujpieChart" style="min-height: 250px; height: 100%; max-height: 100%; max-width: 100%;"></canvas></div>
                    </div>
                </div>
            </div>



            <!-- table -->
            <div class="card elevation-3">
                <!-- /.card-header -->
                <div class="card-body">
                    <table id="datatablesIndex" class="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>APNT_ID</th>
                                <th>USERID</th>
                                <th>F_NAME</th>
                                <th>L_NAME</th>
                                <th>U_PHONE_NO</th>
                                <th>U_ADDRESS</th>
                                <th>U_CITY</th>
                                <th>U_STATE</th>
                                <th>U_PINCODE</th>
                                <th>APNT_DETAIL</th>
                                <th>APNT_STATUS</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>APNT_ID</th>
                                <th>USERID</th>
                                <th>F_NAME</th>
                                <th>L_NAME</th>
                                <th>U_PHONE_NO</th>
                                <th>U_ADDRESS</th>
                                <th>U_CITY</th>
                                <th>U_STATE</th>
                                <th>U_PINCODE</th>
                                <th>APNT_DETAIL</th>
                                <th>APNT_STATUS</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            <?php
                            $data = file_get_contents('http://172.17.87.229/6senses/admin_get_all_today_appt_details.php');
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
                                <td><?php echo $datas[$i]['APNT_ID'] ?></td>
                                <td><?php echo $datas[$i]['USERID'] ?></td>
                                <td><?php echo $datas[$i]['F_NAME'] ?></td>
                                <td><?php echo $datas[$i]['L_NAME'] ?></td>
                                <td><?php echo $datas[$i]['U_PHONE_NO'] ?></td>
                                <td><?php echo $datas[$i]['U_ADDRESS'] ?></td>
                                <td><?php echo $datas[$i]['U_CITY'] ?></td>
                                <td><?php echo $datas[$i]['U_STATE'] ?></td>
                                <td><?php echo $datas[$i]['U_PINCODE'] ?></td>
                                <td><?php echo $datas[$i]['APNT_DETAIL'] ?></td>
                                <td><?php echo $datas[$i]['APNT_STATUS'] ?></td>
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
        </div>
    </div>
    <script>
        getData();
        async function getData() {
            const response = await fetch('http://172.17.87.229/6senses/admin_get_state_wise_data.php?STATE=Telangana');
            const data = await response.json();

            //console.log(data);
            length = data.MONTHLY_DATA.length;
            console.log(length);
            labels = [];
            values = [];
            for (i = 0; i < length; i++) {
                labels.push(data.MONTHLY_DATA[i].DATE);
                values.push(data.MONTHLY_DATA[i].COUNT);
            }
            new Chart(document.getElementById("gujAreaChart"), {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [{
                        label: "TOTAL APPOINTMENTS",
                        lineTension: 0.3,
                        backgroundColor: "rgba(2,117,216,0.2)",
                        borderColor: "rgba(2,117,216,1)",
                        pointRadius: 5,
                        pointBackgroundColor: "rgba(2,117,216,1)",
                        pointBorderColor: "rgba(255,255,255,0.8)",
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(2,117,216,1)",
                        pointHitRadius: 50,
                        pointBorderWidth: 2,
                        data: values
                    }]
                },
                options: {
                    options: {
                        scales: {
                            xAxes: [{
                                time: {
                                    unit: 'date'
                                },
                                gridLines: {
                                    display: false
                                },
                                ticks: {
                                    maxTicksLimit: 15
                                }
                            }],
                            yAxes: [{
                                ticks: {
                                    min: 0,
                                    max: 100,
                                    maxTicksLimit: 11
                                },
                                gridLines: {
                                    color: "rgba(0, 0, 0, .125)",
                                }
                            }],
                        },
                        legend: {
                            display: false
                        }
                    }
                }
            });
        }
    </script>
    <script>
        getData();
        async function getData() {
            const response = await fetch('http://172.17.87.229/6senses/admin_get_state_wise_data.php?STATE=Telangana');
            const data = await response.json();
            //console.log(data);
            length = data.GENDER_DATA.length;
            //console.log(length);
            labels = [];
            values = [];
            for (i = 0; i < length; i++) {
                labels.push(data.GENDER_DATA[i].GENDER);
                values.push(data.GENDER_DATA[i].COUNT);
            }
            new Chart(document.getElementById("gujpieChart"), {
                type: 'pie',
                data: {
                    labels: labels,
                    datasets: [{

                        label: false,
                        backgroundColor: ["#3a90cd",
                            "#8e5ea2",
                            "#3bba9f"
                        ],
                        data: values
                    }]
                },
                options: {

                    legend: {
                        display: true
                    },
                    title: {
                        display: false
                    }
                }
            });
        }
    </script>
    <script language="javascript">
        function SelectRedirect() {
            // ON selection of section this function will work
            //alert( document.getElementById('s1').value);

            switch (document.getElementById('s1').value) {
                case "INDIA":
                    window.location = "index.php";
                    break;

                case "ASSAM":
                    window.location = "assam.php";
                    break;

                case "Telangana":
                    window.location = "telangana.php";
                    break;
                case "Gujarat":
                    window.location = "gujarat.php";
                    break;


                    /// Can be extended to other different selections of SubCategory //////
                default:
                    window.location = "index.php"; // if no selection matches then redirected to home page
                    break;
            } // end of switch 
        }
        ////////////////// 
    </script>
<?php
    include('includes/footer.php');
}
?>