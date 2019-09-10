function changeImage(id, name, image) {
	document.getElementById('image_show').src = 'img/' + image;
	document.getElementById('name_show').innerHTML = name;
	document.getElementById('messi').style.border = 'none';
	document.getElementById('ronaldo').style.border = 'none';
	document.getElementById('ronaldinho').style.border = 'none';
	document.getElementById('kaka').style.border = 'none';
	document.getElementById(id).style.border = '4px solid green';
}