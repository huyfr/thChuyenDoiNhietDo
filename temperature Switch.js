function temperatureSwitch(number)
{
    number=parseFloat(number);
    document.getElementById("result").innerHTML="Celcius: "+(number-32)/1.8;
}