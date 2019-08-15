// các cách hiển thị dữ liệu ra HTML
//1:
//alert('aaaaaa');
//2:
// document.getElemenById('demo1').interHTML = 'test output js';
//3:
// document.write('Test output 3');
//4:
var i = 8;
i=i + 1;
console.log(i);
// Bien tron javascirpt
//var userName;
// Gồm số, chữ cái hoa hoặc thường, dấu gạch dưới
// Tránh trùng lặp với từ khóa của ngôn ngữ lập trình
// Không bắt đầu bằng số
// Có ý nghĩa
// Viết bằng tiếng anh
// Quy tắc camel
//-------------------------------------
// BT: dat va khai bao 4 biến sau:
// họ tên, sdt, emaill, ngày sinh
var fullName = 'cam';
var phone;
var email;
var birthday;
// các phép toán cơ bản
// +,-,*,/,% trong đó % là chia lấy dư
var x = 7, y = 6; // convention code là gì?
document.write(" tong cua x va y la ");
document.write(x + y);

document.write('<br>');
document.write(" hieu cua x va y la: ");
document.write(x - y);

// các phép so sánh
// >, <, >=, <=, ==, !=

// hàm trong java script
function myFunctionName(){
	document.write('test function')
}
document.write('<br>');
// gọi hàm trong javascript
myFunctionName();

// BT: Viết hàm tính tổng và tích của hai số cho trước và in kết quả ra màn hình
// Hàm cộng hai số
function tinh_tong()
{
    // Lấy thông tin từ người dùng
    var a = parseInt(prompt("Nhap so a"));
    var b = parseInt(prompt("Nhap so b"));
     
    // Tính tổng
    var tong = a + b;
 
    // In ra màn hình
    document.write("tong hai so " + a + " + " + b + " la " + tong);
}
 
// Gọi hàm tính tổng
tinh_tong();
//--------------------------------------------------
document.write('<br>');

function tinh_tich()
{
    // Lấy thông tin từ người dùng
    var a = parseInt(prompt("Nhap so a"));
    var b = parseInt(prompt("Nhap so b"));
     
    // Tính tích
    var tich = a / b;
 
    // In ra màn hình
    document.write("tich hai so " + a + " / " + b + " la " + tich);
}
 
// Gọi hàm tính tích
tinh_tich();