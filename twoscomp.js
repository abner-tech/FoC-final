function convert()
{
	   
        var num1 = parseInt(document.getElementById("firstNumber").value, 10);
		document.getElementById("displayNumberOne").innerHTML = num1;
		
		if (num1 >= 0) {
			var convertedFirstNumber = num1.toString(2);
			document.getElementById("Number1result").innerHTML = convertedFirstNumber;
		}
		else
		{
			newnum1=num1+16;
			var convertedFirstNumber = newnum1.toString(2);
			document.getElementById("Number1result").innerHTML = convertedFirstNumber;
		}
		
        var num2 = parseInt(document.getElementById("secondNumber").value, 10);
		document.getElementById("displayNumberTwo").innerHTML = num2;
        if (num2 >= 0) {
			
			convertedSecondNumber = num2.toString(2);
			document.getElementById("Number2result").innerHTML = convertedSecondNumber;
		}
		else
		{
			newnum2=num2+16;
			convertedSecondNumber = newnum2.toString(2);
			document.getElementById("Number2result").innerHTML = convertedSecondNumber;
		}
	c = num1 + num2;
    if (c >= 0) {
		var positiveC=c.toString(2);
	document.getElementById("resultAddition").innerHTML = positiveC;
	}
    else
    {
       var newC = c+16;
	   negativeC=newC.toString(2);
	   document.getElementById("resultAddition").innerHTML = negativeC;
    }	   
	document.getElementById("intAddition").innerHTML = c;	
}

