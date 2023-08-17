<?php
session_start();
error_reporting(0);

$user = $_SESSION['email'];

if ($user == null) {
    echo "Request Forbidun!!!";
}

?>


<div class="loader_bg">
    <div class="loader"></div>
</div>

<?php
// include('auth.php');
include('includes/header.php');
include('includes/topbar.php');
include('includes/sidebar.php');
?>

<div class="content-wrapper">
    <div class="container-fluid">
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class=" text-dark">Operators Resign </h1>
                    </div><!-- /.col -->
                    <!-- <div class="col-sm-6">
           <ol class="breadcrumb float-sm-right">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item active">Dashboard</li>
          </ol>
        </div>      /.col -->
                </div><!-- /.row -->
            </div><!-- /.container-fluid -->
        </div>

        <div class="card elevation-3">
            <!-- /.card-header -->
            <div class="card-body">
                <table class="table table-striped projects">
                    <thead>
                        <tr>
                            <th style="width: 1%">
                                Op_Id
                            </th>
                            <th style="width: 25%">
                                Operator Name
                            </th>
                            <th style="width: 30%">
                                Operator Picture
                            </th>
                            <!-- <th style="width: 30%">
                                Resign Details
                            </th> -->
                        </tr>
                    </thead>
                    <tbody>
                        <?php
                        $data = file_get_contents('http://172.17.87.229/6senses/admin_get_resign_request.php');
                        $apidata = json_decode($data, true);
                        $count = count($apidata);


                        ?><?php
                            if ($apidata['error'] === true) { ?>

                        <tr>
                            <td colspan="6">
                                <center><b><?php echo "No data found"; ?></b></center>
                            </td>
                        </tr>
                        <?php
                            } else {

                                $datas = $apidata['RESIGN_REQUESTS'];
                                $counts = count($datas);
                        ?><?php
                                $i = 0;
                                while ($i < $counts) { ?>
                        <tr>
                            <td><?php echo $datas[$i]['OP_ID'] ?></td>
                            <td>
                                <a>
                                    <?php echo $datas[$i]['F_NAME'] . " " . $datas[$i]['L_NAME'] ?>
                                </a>
                                <br />
                                <small>
                                    <b>Joining Date:</b> <?php echo $datas[$i]['REG_DATE_TIME'] ?>
                                </small>
                                <br>
                                <small>
                                    <b>Resign Request Date:</b> <?php echo $datas[$i]['RESIGN_ADD_DATE'] ?>
                                </small>
                            </td>
                            <td>
                                <ul class="list-inline">

                                    <li class="list-inline-item">
                                        <img class="table-avatar" style="width: 80px; height: 80px;" src="<?php echo "http://172.17.87.229/6senses/images/" . $datas[$i]['DP_FILE'] ?>">
                                    </li>
                                </ul>
                            </td>
                            <td>
                                <?php echo $datas[$i]['RESIGN_REASON'] ?>
                            </td>
                            <td class=" project-actions text-right">
                                <a class="btn btn-primary btn-sm" onclick="accept_reject();clickMe('<?php echo $datas[$i]['RESIGN_ID'] ?>','<?php echo $datas[$i]['OP_ID']  ?>', 'ACCEPT') , window.location.reload();">
                                    Accept </a>

                                <a class="btn btn-danger btn-sm" onclick=" accept_reject();clickMe('<?php echo $datas[$i]['RESIGN_ID'] ?>','<?php echo $datas[$i]['OP_ID'] ?>', 'REJECT') , window.location.reload();">

                                    Reject
                                </a>
                            </td>
                        <?php
                                    $i++;
                                }
                        ?>
                        </tr><?php
                            } ?>
                    </tbody>
                </table>
            </div>
            <!-- /.card-body -->
        </div>
    </div>
</div>

<script>
    function clickMe(resignid, opid, status) {

        console.log(resignid);
        console.log(opid);
        console.log(status);

        var details = {
            RESIGN_ID: resignid,
            OP_ID: opid,
            RESIGN_STATUS: status
        };

        var formBody = [];
        for (var property in details) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(details[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");

        fetch('http://172.17.87.229/6senses/admin_action_on_resign.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body: formBody
        })
    }

    function accept_reject() {

        answer = window.confirm("Are you Sure?");
        if (answer) {

        } else {
            header("location: Opresign.php");
        }

    }
</script>
<?php
include('includes/footer.php');

?>