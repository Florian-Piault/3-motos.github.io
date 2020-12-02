var timer = 0;
var isStarted = false;
var eachSecond;
var timings = [66, 70, 77];
var tours = [0, 0 ,0];

document.getElementById("isItStarted").innerHTML = 'En pause';

function startTimer()
{
    isStarted = !isStarted;
    if(!isStarted) 
    {
        clearInterval(eachSecond);
        document.getElementById("isItStarted").innerHTML = 'En pause'
    }
    else
    {
        document.getElementById("isItStarted").innerHTML = 'En cours';
        eachSecond = setInterval(
            function()
            {
                timer++;
                document.getElementById("time").innerHTML = timer;
                countTurns();
            }, 1);
    }
}

function countTurns()
{
    let simulatedTimes = document.getElementsByClassName('simulatedTime');
    for(let i=0; i< simulatedTimes.length; ++i)
    {
        tours[i] = timer / timings[i];
        simulatedTimes[i].innerHTML = `${tours[i]} tour(s)`;
    }

    if( Number.isInteger((Math.ceil(tours[0] * 100)/100)) &&
        Number.isInteger((Math.ceil(tours[1] * 100)/100)) && 
        Number.isInteger((Math.ceil(tours[2] * 100)/100)))
        console.log(tours, timer);
}

