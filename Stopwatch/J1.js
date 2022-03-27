/****
By default, it is fired when the entire page loads, including its content (images, CSS, scripts, etc.).
In some browsers it now takes over the role of document.onload and fires when the DOM is ready as well.
 */




window.onload=function(){
    var hours='00';
    var min='00';
    var seconds='00';
    var tens='00';

    var appendTens=document.getElementById('tens')
    var appendSeconds=document.getElementById('seconds')
    var appendmin=document.getElementById('min');
    var appendhours=document.getElementById('hours');
    var buttonStart=document.getElementById('button-start')
    var buttonstop=document.getElementById('button-stop');
    var buttonReset=document.getElementById('button-reset')
    var Interval;
    buttonStart.onclick=function (){
        clearInterval(Interval);
        Interval=setInterval(startTimer,10);

    }
    buttonstop.onclick=function(){
        clearInterval(Interval);
    }
    buttonReset.onclick=function (){
        clearInterval(Interval);
        tens='00';
        seconds='00';
        min='00';
        hours='00';
        appendhours.innerHTML=hours;
        appendmin.innerHTML=min;
        appendTens.innerHTML=tens;
        appendSeconds.innerHTML=seconds;
    }
    function startTimer(){
        tens++;

    if(tens<=9)
    {
        appendTens.innerHTML='0'+tens;
    }
    if(tens>9)
    {
        appendTens.innerHTML=tens;
    }
    if(tens>99)
    {
        console.log('seconds');
        seconds++;
        appendSeconds.innerHTML='0'+seconds;
        tens=0;
        appendTens.innerHTML='0'+0;
    }
    if(seconds>9)
    {
        appendSeconds.innerHTML=seconds;
    }
    if(seconds>60)
    {
        min++;
        appendmin.innerHTML='0'+min;
        seconds=0;
        appendSeconds.innerHTML='0'+0;
    }
    if(min>9)
    {
        appendmin.innerHTML=min;
    }
    if(min>60)
    {
        hours++;
        appendhours.innerHTML='0'+hours;
        min=0;
        appendmin.innerHTML='0'+0;

    }
    if(hours>9)
    {
        appendmin.innerHTML=hours;
    }


        }

}
