
var a = 7;

switch (a) {
case 7:
    a = "chu nhat";
    break;
case 2:
    a = "Thu hai";
    break;
case 3:
    a = "Thu ba";
    break;
case 4:
    a = "Thu tu";
    break;
case 5:
    a = "Thu nam";
    break;
case 5:
    a = "Thu sau";
    break;
case 6:
    a = "Thu bay";
   break;
default:
    document.write("khong co ngay");
 break;
}
document.write(a);
//-----------------------------------------
// cho 1 so cho trước là giá trị của tháng trong năm từ 1 đến 12
// Nếu số đó khác từ 1 đến 12 thì in ra là số này không phải tháng của năm
// Nếu số đó là tháng của năm , in ra số ngày của tháng đó
// Cho thêm 1 số cho trước là số năm ( ví dụ 2019) 
// Kiểm tra năm đó nhuần hay không? để in ra đúng số ngày của tháng 2 
document.write('<br>');
var myMonth = 2;
var myYear = 2019;
// tháng 1,3,5,7,8,10,12 có 31 ngày 
// Tháng 4,6,9,11 có 30 ngày
// Tháng 2 có 28 ngày


// vòng lặp
// các câu lệnh hoặc hành động được lặp đi lặp lại nhiều lần thì áp dụng vòng lặp để thực hiện
var i;
for (i = 0; i <= 10; i++) {
    document.write(i);
    document.write('<br>');
}
// i++ tướng ứng với i = i + 1;
// i-- tướng ứng với i = i - 1;
// BT in ra day số từ 10 đến 0
for (var i = 10; i >= 0; i--){
    document.write(i + ' <br> ');
}
document.write('-------------<br>');
// vòng lặp while
var n = 5;
while(n < 5){
    document.write(n);
    document.write('<br>');
    n++;
}
// vòng lặp do while 
var n = 5;
do{
    document.write(n);
    document.write('<br>');
    n++;
}while (n<5);

// Cho 1 dãy số chạy từ 1 đến 100
// Kiểm tra
// Nếu số đó chia hết cho 3 thì in ra số n chia hết cho 3
// Nếu số đó chia hết cho 5 thì in ra số n chia hết cho 5
// Nếu số đó chia hết cho 15 thì in ra số n chia hết cho 15
// ( lúc này không in ra 2 dòng chia hết cho 3 và cho 5)
// Ngược lại in ra số n không chia hết cho 3,5,15
// VD : 1 không chia hết cho 3 , 5 , 15
//      2 không chia hết cho 3 , 5 , 15
    for (i=100; i<=100; i++){
         if (i % 15 == 0){
                document.write(n + ' chia het cho 15');
                document.write('<br>');
            }
            else{
                document.write(n + ' khong chia het cho 15');
                document.write('<br>');
            }
        }
         if (i % 5 == 0){
                document.write(n + ' chia het cho 5');
                document.write('<br>');
            }
            else{
                document.write(n + ' khong chia het cho 5');
                document.write('<br>')
            }
        
         if (i % 3 == 0){
                document.write(n + ' chia het cho 3');
                document.write('<br>');
            }
            else{
                document.write(n + ' khong chia het cho 3');
                document.write('<br>')
            }
        


     