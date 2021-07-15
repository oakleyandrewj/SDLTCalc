function callAllCalcs()
{
    julyToSeptember();
    octoberOnwards();
}

function julyToSeptember() {
    let myOrig = document.getElementById('enterValue').value;
    let runTot = parseInt(myOrig);
    let runVal = 0;
    let topRate = 0;
    let midRate = 0;
    let lowRate = 0;
    let myTot = 0;

    if(runTot > 1500000)
    {
        runVal = runTot - 1500000;
        topRate = runVal * 0.12;
        runTot = 1500000;
    }

    if(runTot > 925000)
    {
        runVal = runTot - 925000;
        midRate = runVal * 0.1;
        runtot = 925000;
    }

    if(runTot > 250000)
    {
        runVal = runTot - 250000;
        lowRate = runVal * 0.05;
        runtot = 250000;
    }

    myTot =  topRate + midRate + lowRate;
    document.getElementById("julToSept").innerHTML = "From 1 July 2021 to 30 September 2021 you would owe "+myTot+" GBP";
  }

  function octoberOnwards() {
    let myOrig = document.getElementById('enterValue').value;
    let runTot = parseInt(myOrig);
    let runVal = 0;
    let topRate = 0;
    let midRate = 0;
    let lowRate = 0;
    let lowerRate = 0
    let myTot = 0;

    if(runTot > 1500000)
    {
        runVal = runTot - 1500000;
        topRate = runVal * 0.12;
        runTot = 1500000;
    }

    if(runTot > 925000)
    {
        runVal = runTot - 925000;
        midRate = runVal * 0.1;
        runtot = 925000;
    }

    if(runTot > 250000)
    {
        runVal = runTot - 250000;
        lowRate = runVal * 0.05;
        runtot = 250000;
    }

    if(runTot > 125000)
    {
        runVal = runTot - 125000;
        lowerRate = runVal * 0.02;
        runtot = 250000;
    }

    myTot =  topRate + midRate + lowRate + lowerRate;
    document.getElementById("fromOct").innerHTML = "From 1 October 2021 you would owe "+myTot+" GBP";
  }