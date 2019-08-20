
//SHint is a community-driven tool to detect errors  in JavaScript code

var rows=5,cols=5; 
var table='';
var  counter=1
 
for (i=1;i<=rows;i++){
	 table+="<tr> ";
	for(j=1;j<=cols;j++){
		table+="<td><div id='cell"+ counter+ "'";
		table+="onclick=' clickOnCell("+counter+")'"
		table+=" >"
	    table+=Math.round(100*Math.random());
		table+="</div></td>";
	    counter++;
	
	
	}
	table+="</tr>";
}
 
 document.getElementById('myBingo').innerHTML=table;
 

function  clickOnCell(parameter){
	//alert("Click on " +parameter)
	document.getElementById("cell"+parameter).innerHTML="*"
    document.getElementById("cell"+parameter).style.color="red"; 
	
}//clickOnCell

function  givMeANumber(){
 var myNumber=	Math.round(100*Math.random());
 document.getElementById("NextNumber").innerHTML=myNumber 
   
	
}

var intr=setInterval("givMeANumber()",1000);
intr.clearInterval();
