getData();
async function getData() {
    const response = await fetch('http://172.17.87.229/6senses/admin_get_gender_count.php');
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
    new Chart(document.getElementById("pieChart"), {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [
                {

                    label: false,
                    backgroundColor: ["#3a90cd",
                        "#8e5ea2",
                        "#3bba9f"],
                    data: values
                }
            ]
        },
        options: {

            legend: { display: true },
            title: {
                display: false
            }
        }
    });
}
