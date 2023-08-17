let map;


async function initMap() {

    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 5,
        center: new google.maps.LatLng(23.5120, 80.3290),
    });


    // Create a <script> tag and set the USGS URL as the source.
    const response = await fetch('http://172.17.87.229/6senses/admin_get_op_locations.php');
    const data = await response.json();
    inlength = data.OP_LOGIN.length;
    outlength = data.OP_LOGOUT.length;
    console.log(inlength);
    for (let i = 0; i < inlength; i++) {
        const inlat = data.OP_LOGIN[i].OP_LAT;
        const inlong = data.OP_LOGIN[i].OP_LONG;
        const inop = data.OP_LOGIN[i].OP_STATUS_ID;
        const inlatLng = new google.maps.LatLng(inlat, inlong);

        new google.maps.Marker({
            position: inlatLng,
            map: map,
            icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
            title: inop

        })

    }

    for (let i = 0; i < outlength; i++) {

        const outlat = data.OP_LOGOUT[i].OP_LAT;
        const outlong = data.OP_LOGOUT[i].OP_LONG;
        const outop = data.OP_LOGOUT[i].OP_STATUS_ID;
        const outlatLng = new google.maps.LatLng(outlat, outlong);
        const marker = new google.maps.Marker({
            position: outlatLng,
            map: map,
            // icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
            title: outop
        });
    }


}