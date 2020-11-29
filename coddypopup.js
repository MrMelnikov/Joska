let button = document.getElementsByClassName("b1");
let popup = document.getElementsByClassName("popup");
let popup2 = document.getElementsByClassName("popup2");
let close = document.getElementsByClassName("close");
button[0].addEventListener("click", function(){
	popup[0].style.display = "block";
})
close[0].addEventListener("click", function(){
	popup[0].style.display = "none";
	popup2[0].style.display = "block";
})