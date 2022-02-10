x = myFunction(5,2);
y = 0;
document.getElementById("demo").innerHTML = x;
document.getElementById("plus").addEventListener("click", tambah);
document.getElementById("min").addEventListener("click", kurang);


function myFunction(a, b) {
	return a * b;
}

function tambah() {
	document.getElementById("show").innerHTML = y = y + 1;
}

function kurang() {
	if(y==0) {
		document.getElementById("show").innerHTML = 0;
	} else {
	document.getElementById("show").innerHTML = y = y - 1;
	}
}