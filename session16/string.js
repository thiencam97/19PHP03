var x = 5;
var y = "Van Hau is a Vietnamese footballer who plays as a left-back";
console.log(typeof x);
console.log(typeof y);
document.write('<br>' + y);
// Kiem tra chieu dai cua string
document.write('<br>' + y.length);
console.log(y.length);
// Tim vi tri cua ky tu nam dau tien trong string
document.write('<br>' + y.indexOf('a'));
console.log(y.indexOf('a'));

// Tim vi tri cua ky tu nam cuoi cung trong string
document.write('<br>' + y.lastIndexOf('a'));
console.log(y.lastIndexOf('a'));

// Cat chuoi ky tu trong string
// Cach 1: cat tu vi tri den vi tri
document.write('<br>' + y.substring(2, 10));
console.log(y.substring(2, 10));
// Cach 2: cat tu vi tri, voi chieu dai cho truoc
document.write('<br>' + y.substr(2, 10));
console.log(y.substr(2, 10));

// Neu tim khong thay ky tu trong string thi tra ve gia tri - 1
// Tim vi tri cua ky tu nam dau tien trong string
document.write('<br>' + y.indexOf('d'));
console.log(y.indexOf('d'));

// BT1: Dem xem chuoi tren co bao nhieu chu "a"
// BT2 (nang cao BT1): Viet ham truyen vao 1 chuoi va 1 ky tu,
// kiem tra co bao nhieu ky tu do trong chuoi

//BT1:
var myStr = "Van Hau is a Vietnamese footballer who plays as a left-back";
var charSearch = 'a';
var count = 0;
var newMyStr = '';
while (myStr.indexOf(charSearch) != -1) {
	count++;
	newMyStr = myStr.substring(myStr.indexOf(charSearch) + 1, myStr.length);
	myStr = newMyStr;
}
document.write('<br> Co ' + count + ' ky tu a trong chuoi "'+ y + '"');

//BT2:
function countCharInString(charSearch, myStr) {
	var count = 0;
	var newMyStr = '';
	while (myStr.indexOf(charSearch) != -1) {
		count++;
		newMyStr = myStr.substring(myStr.indexOf(charSearch) + 1, myStr.length);
		myStr = newMyStr;
	}
	return count;
}
document.write('<br>');
document.write(countCharInString('a', 'I am Chad! I am from DN'));

//BT3:
// Dung promt de nhap ho va ten vao theo mau: Le Van Tuan 
// (tuc la ho, ten dem, ten cach nhau boi dau cach - khoang trong)
// Dem xem ho va ten day du co bao nhieu ky tu? (khong tinh khoang trong)
// Dem xem ho co bao nhieu ky tu?
var myName = prompt('Please input your name?','');

// BT4: Cung nhu BT2, nhung ky tu tim kiem khong phan biet la 1 ky
// tu hay nhieu ky ta. Vidu: countCharInString('am', 'I am Chad!')
// BT5: Tiep tuc bai 4, nhung neu tim duoc ky tu/chuoi ky tu trong
// string thi in ra string voi ky tu/chuoi ky tu do mau vang

//Van Hau
//-> V<span>a</span>n H<span>a</span>u

// BT6: Nhap vao 1 chuoi bang prompt
// Dem xem trong chuoi do ky tu nao nhieu nhat?
// ky tu nao it xuat hien nhat 
// Neu bang nhau thi hien thi 1 cai nhat la dc

//BT7: Cung nhu BT6 nhung khong biet chu Hoa hoac Thuong.
// Vi du: a va A thi tinh la a
// (nghien cuu 2 phuong thuc upperCase() vaf lowerCase())

document.write('<br>' + y.toUpperCase());
document.write('<br>' + y.toLowerCase());

// Nghien cuu them phuong thuc replace: thay the ky tu/chuoi ky tu