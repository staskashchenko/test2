var newValue;
var newTime=new Date();
var grafTimes=["0s", "10s", "20s", "30s", "40s", "50s", "60s"];
var grafValues=[0, 59, 75, 20, 20, 55, 40];
var iterations=0;

function getRandomInt(max) {
    return Math.floor(Math.random() * max * 100)/100;
}

function psevdoWS(){
    newValue = getRandomInt(100);
    grafValues[grafValues.length]=newValue;
    //newTime =new Date(newTime.getTime()+getRandomInt(1000));
    newTime.setTime(Number(newTime)+getRandomInt(250));//setTime(milliseconds)     
    grafTimes[grafTimes.length]="[ "+newTime.getHours()+":"+newTime.getMinutes()+":"+newTime.getSeconds()+"."+newTime.getMilliseconds()+" ]";   
}

function drawGraf(){
    var speedCanvas = document.getElementById("valueTime");

    Chart.defaults.global.defaultFontFamily = "Lato";
    Chart.defaults.global.defaultFontSize = 18;
    
    var speedData = {
      labels: grafTimes,
      datasets: [{
        label: "Value(time)",
        data: grafValues,
      }]
    };
    
    var chartOptions = {
        animamation: {
            duration: 0
        },
        legend: {
            display: true,
            position: 'top',
            labels: {
                boxWidth: 80,
                fontColor: 'black'
            }
        }
    };
    
    var lineChart = new Chart(speedCanvas, {
      type: 'line',
      data: speedData,
      options: chartOptions
    });
    lineChart.render();
}

function louncher(){
    psevdoWS();
    drawGraf();
    console.log(iterations);
    iterations+=1;
    setTimeout(louncher, 250);
}

setTimeout(louncher, 250);

