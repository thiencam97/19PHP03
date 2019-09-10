var a;
var b;
var c;
a = prompt("nhap vao so dau tien");
b = prompt("nhap vao so thu 2");
c = prompt("nhap vao so thu 3");
document.write(a);
document.write(b);
document.write(c);
function maxNumber(so1, so2, so3){
	a = parseInt(a);
	b = parseInt(b);
	c = parseInt(c);
	var max=so1;
	if(max<so2) max=so2;
	if(max<so3) max=so3;
	return max;
}