function sumNumber() {
	var number1, number2;
	number1 = document.getElementById('number1').value;
	number1 = parseInt(number1);
	number2 = document.getElementById('number2').value;
	number2 = parseInt(number2);
	document.getElementById('sum').innerHTML = number1 + number2;
}

function changeImage(img, name) {
	document.getElementById('default').src = img;
	document.getElementById('name_text').innerHTML = name;
}