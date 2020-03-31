function openS(){
	document.getElementById('tray').classList.toggle('active');
}

function print(){
	if(document.getElementById('nm').value.length==0){
		document.getElementById("res").innerHTML="Please enter your name!!";
	}
	else
	{
	var x=("Hii "+document.getElementById('nm').value+"!! Thankyou for visiting this website. Have a good day!!!");
	document.getElementById("res").innerHTML=x;
}
}