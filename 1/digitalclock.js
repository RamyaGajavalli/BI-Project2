const clockText=document.getElementById('clocktime');
const stoptime=document.getElementById('stoptime');
const Dte=document.getElementById('Dte');
function digitalclock(){
    var time=new Date();
    var Hours=time.getHours();
    var Minutes=time.getMinutes();
    var Seconds=time.getSeconds();
    clockText.innerHTML=`${Hours} : ${Minutes} : ${Seconds}`;
    setInterval(digitalclock,1000)
    var date=new Date();
    var Day=date.getDay();
    var Dt=date.getDate();
    var year=date.getFullYear();
    Dte.innerHTML=`${Day} - ${Dt} - ${year}`;
    
}
function Stop()
{
    const pt=clockText.innerHTML
    clockText.style.display="none"
    stoptime.innerHTML=pt
}
function Start()
{
    clockText.style.display="block",
    stoptime.innerHTML=""
}
