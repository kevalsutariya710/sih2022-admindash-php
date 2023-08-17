async function fetchJSON() {
    const url = 'http://172.17.87.229/6senses/admin_get_state_wise_count.php';
    const response = await fetch(url);
    const datapoints = await response.json();
    //console.log(datapoints.STATE_P_DATA[0].GUJARAT);
    return datapoints;
}

let pend = [];
let active = [];
let comp = [];

fetchJSON().then(datapoints => {
    const data1 = datapoints.STATE_P_DATA.map(function (index) {
        pend.push(index.ANDAMAN_AND_NICOBAR);
    })
    const data2 = datapoints.STATE_P_DATA.map(function (index) {
        pend.push(index.ANDHRA_PRADESH);
    })
    const data3 = datapoints.STATE_P_DATA.map(function (index) {
        pend.push(index.ARUNACHAL_PRADESH);
    })
    const data4 = datapoints.STATE_P_DATA.map(function (index) {
        pend.push(index.ASSAM);
    })
    const data5 = datapoints.STATE_P_DATA.map(function (index) {
        pend.push(index.BIHAR);
    })
    const data6 = datapoints.STATE_P_DATA.map(function (index) {
        pend.push(index.CHANDIGARH);
    })
    const data7 = datapoints.STATE_P_DATA.map(function (index) {
        pend.push(index.CHATTISGARH);
    })
    const data8 = datapoints.STATE_P_DATA.map(function (index) {
        pend.push(index.DADRA_AND_NAGAR_HAVELI);
    })
    const data9 = datapoints.STATE_P_DATA.map(function (index) {
        pend.push(index.DAMAN_AND_DIU);
    })
    const data10 = datapoints.STATE_P_DATA.map(function (index) {
        pend.push(index.DELHI);
    })
    const data11 = datapoints.STATE_P_DATA.map(function (index) {
        pend.push(index.GOA);
    })
    const data12 = datapoints.STATE_P_DATA.map(function (index) {
        pend.push(index.GUJARAT);
    })
    const data13 = datapoints.STATE_P_DATA.map(function (index) {
        pend.push(index.HARYANA);
    })
    const data14 = datapoints.STATE_P_DATA.map(function (index) {
        pend.push(index.HIMACHAL_PRADESH);
    })
    const data15 = datapoints.STATE_P_DATA.map(function (index) {
        pend.push(index.MAHARASHTRA);
    })
    const data16 = datapoints.STATE_P_DATA.map(function (index) {
        pend.push(index.JAMMU_AND_KASHMIR);
    })
    const data17 = datapoints.STATE_P_DATA.map(function (index) {
        pend.push(index.JHARKHAND);
    })
    const data18 = datapoints.STATE_P_DATA.map(function (index) {
        pend.push(index.KARNATAKA);
    })
    const data19 = datapoints.STATE_P_DATA.map(function (index) {
        pend.push(index.KERALA);
    })
    const data20 = datapoints.STATE_P_DATA.map(function (index) {
        pend.push(index.LAKSHADWEEP);
    })
    const data21 = datapoints.STATE_P_DATA.map(function (index) {
        pend.push(index.MADHYA_PRADESH);
    })
    const data22 = datapoints.STATE_P_DATA.map(function (index) {
        pend.push(index.MANIPUR);
    })
    const data23 = datapoints.STATE_P_DATA.map(function (index) {
        pend.push(index.MEGHALAYA);
    })
    const data24 = datapoints.STATE_P_DATA.map(function (index) {
        pend.push(index.MIZORAM);
    })
    const data25 = datapoints.STATE_P_DATA.map(function (index) {
        pend.push(index.NAGALAND);
    })
    const data26 = datapoints.STATE_P_DATA.map(function (index) {
        pend.push(index.ODISHA);
    })
    const data27 = datapoints.STATE_P_DATA.map(function (index) {
        pend.push(index.PONDICHERRY);
    })
    const data28 = datapoints.STATE_P_DATA.map(function (index) {
        pend.push(index.PUNJAB);
    })
    const data29 = datapoints.STATE_P_DATA.map(function (index) {
        pend.push(index.RAJASTHAN);
    })
    const data30 = datapoints.STATE_P_DATA.map(function (index) {
        pend.push(index.SIKKIM);
    })
    const data31 = datapoints.STATE_P_DATA.map(function (index) {
        pend.push(index.TAMIL_NADU);
    })
    const data32 = datapoints.STATE_P_DATA.map(function (index) {
        pend.push(index.TELANGANA);
    })
    const data33 = datapoints.STATE_P_DATA.map(function (index) {
        pend.push(index.TRIPURA);
    })
    const data34 = datapoints.STATE_P_DATA.map(function (index) {
        pend.push(index.UTTAR_PRADESH);
    })
    const data35 = datapoints.STATE_P_DATA.map(function (index) {
        pend.push(index.UTTARAKHAND);
    })
    const data36 = datapoints.STATE_P_DATA.map(function (index) {
        pend.push(index.WEST_BENGAL);
    })

    myLineChart.update();
});

fetchJSON().then(datapoints => {
    const data1 = datapoints.STATE_A_DATA.map(function (index) {
        active.push(index.ANDAMAN_AND_NICOBAR);
    })
    const data2 = datapoints.STATE_A_DATA.map(function (index) {
        active.push(index.ANDHRA_PRADESH);
    })
    const data3 = datapoints.STATE_A_DATA.map(function (index) {
        active.push(index.ARUNACHAL_PRADESH);
    })
    const data4 = datapoints.STATE_A_DATA.map(function (index) {
        active.push(index.ASSAM);
    })
    const data5 = datapoints.STATE_A_DATA.map(function (index) {
        active.push(index.BIHAR);
    })
    const data6 = datapoints.STATE_A_DATA.map(function (index) {
        active.push(index.CHANDIGARH);
    })
    const data7 = datapoints.STATE_A_DATA.map(function (index) {
        active.push(index.CHATTISGARH);
    })
    const data8 = datapoints.STATE_A_DATA.map(function (index) {
        active.push(index.DADRA_AND_NAGAR_HAVELI);
    })
    const data9 = datapoints.STATE_A_DATA.map(function (index) {
        active.push(index.DAMAN_AND_DIU);
    })
    const data10 = datapoints.STATE_A_DATA.map(function (index) {
        active.push(index.DELHI);
    })
    const data11 = datapoints.STATE_A_DATA.map(function (index) {
        active.push(index.GOA);
    })
    const data12 = datapoints.STATE_A_DATA.map(function (index) {
        active.push(index.GUJARAT);
    })
    const data13 = datapoints.STATE_A_DATA.map(function (index) {
        active.push(index.HARYANA);
    })
    const data14 = datapoints.STATE_A_DATA.map(function (index) {
        active.push(index.HIMACHAL_PRADESH);
    })
    const data15 = datapoints.STATE_A_DATA.map(function (index) {
        active.push(index.MAHARASHTRA);
    })
    const data16 = datapoints.STATE_A_DATA.map(function (index) {
        active.push(index.JAMMU_AND_KASHMIR);
    })
    const data17 = datapoints.STATE_A_DATA.map(function (index) {
        active.push(index.JHARKHAND);
    })
    const data18 = datapoints.STATE_A_DATA.map(function (index) {
        active.push(index.KARNATAKA);
    })
    const data19 = datapoints.STATE_A_DATA.map(function (index) {
        active.push(index.KERALA);
    })
    const data20 = datapoints.STATE_A_DATA.map(function (index) {
        active.push(index.LAKSHADWEEP);
    })
    const data21 = datapoints.STATE_A_DATA.map(function (index) {
        active.push(index.MADHYA_PRADESH);
    })
    const data22 = datapoints.STATE_A_DATA.map(function (index) {
        active.push(index.MANIPUR);
    })
    const data23 = datapoints.STATE_A_DATA.map(function (index) {
        active.push(index.MEGHALAYA);
    })
    const data24 = datapoints.STATE_A_DATA.map(function (index) {
        active.push(index.MIZORAM);
    })
    const data25 = datapoints.STATE_A_DATA.map(function (index) {
        active.push(index.NAGALAND);
    })
    const data26 = datapoints.STATE_A_DATA.map(function (index) {
        active.push(index.ODISHA);
    })
    const data27 = datapoints.STATE_A_DATA.map(function (index) {
        active.push(index.PONDICHERRY);
    })
    const data28 = datapoints.STATE_A_DATA.map(function (index) {
        active.push(index.PUNJAB);
    })
    const data29 = datapoints.STATE_A_DATA.map(function (index) {
        active.push(index.RAJASTHAN);
    })
    const data30 = datapoints.STATE_A_DATA.map(function (index) {
        active.push(index.SIKKIM);
    })
    const data31 = datapoints.STATE_A_DATA.map(function (index) {
        active.push(index.TAMIL_NADU);
    })
    const data32 = datapoints.STATE_A_DATA.map(function (index) {
        active.push(index.TELANGANA);
    })
    const data33 = datapoints.STATE_A_DATA.map(function (index) {
        active.push(index.TRIPURA);
    })
    const data34 = datapoints.STATE_A_DATA.map(function (index) {

        active.push(index.UTTAR_PRADESH);
    })
    const data35 = datapoints.STATE_A_DATA.map(function (index) {
        active.push(index.UTTARAKHAND);
    })
    const data36 = datapoints.STATE_A_DATA.map(function (index) {
        active.push(index.WEST_BENGAL);
    })

    myLineChart.update();
});

fetchJSON().then(datapoints => {
    const data1 = datapoints.STATE_C_DATA.map(function (index) {
        comp.push(index.ANDAMAN_AND_NICOBAR);
    })
    const data2 = datapoints.STATE_C_DATA.map(function (index) {
        comp.push(index.ANDHRA_PRADESH);
    })
    const data3 = datapoints.STATE_C_DATA.map(function (index) {
        comp.push(index.ARUNACHAL_PRADESH);
    })
    const data4 = datapoints.STATE_C_DATA.map(function (index) {
        comp.push(index.ASSAM);
    })
    const data5 = datapoints.STATE_C_DATA.map(function (index) {
        comp.push(index.BIHAR);
    })
    const data6 = datapoints.STATE_C_DATA.map(function (index) {
        comp.push(index.CHANDIGARH);
    })
    const data7 = datapoints.STATE_C_DATA.map(function (index) {
        comp.push(index.CHATTISGARH);
    })
    const data8 = datapoints.STATE_C_DATA.map(function (index) {
        comp.push(index.DADRA_AND_NAGAR_HAVELI);
    })
    const data9 = datapoints.STATE_C_DATA.map(function (index) {
        comp.push(index.DAMAN_AND_DIU);
    })
    const data10 = datapoints.STATE_C_DATA.map(function (index) {
        comp.push(index.DELHI);
    })
    const data11 = datapoints.STATE_C_DATA.map(function (index) {
        comp.push(index.GOA);
    })
    const data12 = datapoints.STATE_C_DATA.map(function (index) {
        comp.push(index.GUJARAT);
    })
    const data13 = datapoints.STATE_C_DATA.map(function (index) {
        comp.push(index.HARYANA);
    })
    const data14 = datapoints.STATE_C_DATA.map(function (index) {
        comp.push(index.HIMACHAL_PRADESH);
    })
    const data15 = datapoints.STATE_C_DATA.map(function (index) {
        comp.push(index.MAHARASHTRA);
    })
    const data16 = datapoints.STATE_C_DATA.map(function (index) {
        comp.push(index.JAMMU_AND_KASHMIR);
    })
    const data17 = datapoints.STATE_C_DATA.map(function (index) {
        comp.push(index.JHARKHAND);
    })
    const data18 = datapoints.STATE_C_DATA.map(function (index) {
        comp.push(index.KARNATAKA);
    })
    const data19 = datapoints.STATE_C_DATA.map(function (index) {
        comp.push(index.KERALA);
    })
    const data20 = datapoints.STATE_C_DATA.map(function (index) {
        comp.push(index.LAKSHADWEEP);
    })
    const data21 = datapoints.STATE_C_DATA.map(function (index) {
        comp.push(index.MADHYA_PRADESH);
    })
    const data22 = datapoints.STATE_C_DATA.map(function (index) {
        comp.push(index.MANIPUR);
    })
    const data23 = datapoints.STATE_C_DATA.map(function (index) {
        comp.push(index.MEGHALAYA);
    })
    const data24 = datapoints.STATE_C_DATA.map(function (index) {
        comp.push(index.MIZORAM);
    })
    const data25 = datapoints.STATE_C_DATA.map(function (index) {
        comp.push(index.NAGALAND);
    })
    const data26 = datapoints.STATE_C_DATA.map(function (index) {
        comp.push(index.ODISHA);
    })
    const data27 = datapoints.STATE_C_DATA.map(function (index) {
        comp.push(index.PONDICHERRY);
    })
    const data28 = datapoints.STATE_C_DATA.map(function (index) {
        comp.push(index.PUNJAB);
    })
    const data29 = datapoints.STATE_C_DATA.map(function (index) {
        comp.push(index.RAJASTHAN);
    })
    const data30 = datapoints.STATE_C_DATA.map(function (index) {
        comp.push(index.SIKKIM);
    })
    const data31 = datapoints.STATE_C_DATA.map(function (index) {
        comp.push(index.TAMIL_NADU);
    })
    const data32 = datapoints.STATE_C_DATA.map(function (index) {
        comp.push(index.TELANGANA);
    })
    const data33 = datapoints.STATE_C_DATA.map(function (index) {
        comp.push(index.TRIPURA);
    })
    const data34 = datapoints.STATE_C_DATA.map(function (index) {
        comp.push(index.UTTAR_PRADESH);
    })

    const data35 = datapoints.STATE_C_DATA.map(function (index) {
        comp.push(index.UTTARAKHAND);
    })
    const data36 = datapoints.STATE_C_DATA.map(function (index) {
        comp.push(index.WEST_BENGAL);
    })

    myLineChart.update();
});


const config = {
    type: 'bar',
    data: {
        labels: ['ANDAMAN & NICOBAR', 'ANDHRA PRADESH', 'ARUNACHAL PRADESH', 'ASSAM', 'BIHAR', 'CHANDIGARH', 'CHATTISGARH', 'DADRA & NAGAR HAVELI', 'DAMAN & DIU', 'DELHI', 'GOA', 'GUJARAT', 'HARYANA', 'HIMACHAL PRADESH', 'MAHARASHTRA', 'JAMMU & KASHMIR', 'JHARKHAND', 'KARNATAKA', 'KERALA', 'LAKSHADWEEP', 'MADHYA PRADESH', 'MANIPUR', 'MEGHALAYA', 'MIZORAM', 'NAGALAND', 'ODISHA', 'PONDICHERRY', 'PUNJAB', 'RAJASTHAN', 'SIKKIM', 'TAMIL NADU', 'TELANGANA ', 'TRIPURA', 'UTTAR PRADESH', 'UTTARAKHAND', 'WEST BENGAL'],
        datasets: [
            {
                label: 'Pending Appointments',
                backgroundColor: '#FF69B4',
                borderColor: 'rgb(0,250,154)',
                pointRadius: false,
                pointColor: 'rgba(210, 214, 222, 1)',
                pointStrokeColor: '#c1c7d1',
                pointHighlightFill: '#fff',
                pointHighlightStroke: 'rgba(220,220,220,1)',
                data: pend
            },
            {
                label: 'Active Appoin2tments',
                backgroundColor: '#9370DB',
                borderColor: 'rgba(125,141,188,0.9)',
                pointRadius: false,
                pointColor: '#3b8bba',
                pointStrokeColor: 'rgba(60,141,188,1)',
                pointHighlightFill: '#fff',
                pointHighlightStroke: 'rgba(60,141,188,1)',
                data: active
            },
            {
                label: 'Completed Appointments',
                backgroundColor: '#1E90FF',
                borderColor: 'rgba(60,141,188,0.8)',
                pointRadius: false,
                pointColor: '#3b8bba',
                pointStrokeColor: 'rgba(60,141,188,1)',
                pointHighlightFill: '#fff',
                pointHighlightStroke: 'rgba(60,141,188,1)',
                data: comp
            },
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
            xAxes: [{
                stacked: true,

            }],
            yAxes: [{
                stacked: true

            }]
        }
    }
}

// Area Chart Example
var ctx = document.getElementById("stateDataChart");
const myLineChart = new Chart(ctx, config);