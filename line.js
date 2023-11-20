const xValues = [50,60,70,80,90,100,110,120,130,140,150];
        const yValues = [7,8,8,9,9,9,10,11,14,14,15];
        
        new Chart("myLine", {
        type: "line",
        data: {
            labels: xValues,
            datasets: [{
            fill: false,
            pointRadius: 5,
            lineTension: 0,
            backgroundColor: "rgba(0,0,255,1)",
            borderColor: "rgba(0,0,255,0.5)",
            data: yValues
            }]
        },
        options: {
            legend: {display: false},
            scales: {
            yAxes: [{ticks: {min: 6, max:16}}],
            }
        }
        });