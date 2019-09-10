function mySum(){
	var a = 5, b = 7;
	document.write(a+b);
}
document.write('<br>');
mySum();
function mySum2(){
	var a = 6, b = 9;
	var c;
	c = a + b;
	return c;
}
document.write('<br>');
var x;
x = mySum2();
document.write(x);
// Tham số của hàm
function mSum3(a,b){
	var c;
	c = a + b;
	return c;
}
document.write(x);

var y;
y = mySum3(4, 8);
document.write(y);
document.write('<br>');
document.write(mySum3(5, 3));

// Tham số mặc định của hàm
function mySum4(a = 9, b = 2){
	var c;
	c = a + b;
	return c;
}
document.write('<br>');
document.write(mySum4());

document.write('<br>');

// câu lệnh điều khiển
// 1.
// If (dieukien){
	//thuc hien câu lệnh ở đây nếu diều kiện đúng
//}
var a = 4;
if ( a == 5){
	document.write("so a la 5");
}
document.write('<br>');
// 2.
// If (dieukien){
	// thực hiện câu lệnh ở đây nếu điều kiện là đúng
//} else{
	// Thực hiện câu lệnh ở đây nếu điều kiện là sai
//}
var a = 4;
if(a == 5){
	document.write("so a la 5");
} else {
	document.write("so a ko phai la 5 <br>");
	document.write("-------<br>");
	document.write("test if else");
}
// 3.
// If (dieukien1){
	// thực hiện câu lệnh ở đây nếu điều kiện 1 là đúng
//} else if (dieukien2){
	// thực hiện câu lệnh ở đây nếu điều kiện 2 là đúng
//} else {
	// thực hiện câu lệnh ở đây nếu điều kiện 2 là sai
//}