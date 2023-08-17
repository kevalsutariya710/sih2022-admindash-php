getData();
async function getData() {
  const response = await fetch('http://172.17.87.229/6senses/admin_get_past_month_appt_count.php');
  const data = await response.json();

  //console.log(data);
  length = data.MONTHY_DATA.length;
  //console.log(length);
  labels = [];
  values = [];
  for (i = 0; i < length; i++) {
    labels.push(data.MONTHY_DATA[i].DATE);
    values.push(data.MONTHY_DATA[i].COUNT);
  }
  new Chart(document.getElementById("myAreaChart"), {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
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
        }
      ]
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

