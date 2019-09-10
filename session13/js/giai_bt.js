//BT0
for (var i = 1; i <= 100; i++) {
	if (i % 15 == 0) {
		document.write(i + ' chia het cho 15');
	} else if (i % 5 == 0) {
		document.write(i + ' chia het cho 5');
	} else if (i % 3 == 0) {
		document.write(i + ' chia het cho 3');
	} else {
		document.write(i + ' khong chia het cho 3, 5, 15');
	}
	document.write('<br>');
}
//BT1
document.write('<br>--------------<br>');
var binh = 27;
var minh = binh / 3;
var soLanChuyen = 0;
while (binh != minh * 2) {
	binh--;
	minh++;
	soLanChuyen++;
}
document.write('So lan Binh chuyen sach cho Minh la: ' + soLanChuyen);

//BT2
document.write('<br>--------------<br>');
var tien = 2000;
var keo = 0;
var vo_keo = 0;
while (tien > 0) {
	tien -= 200;// tien = tien - 200;
	keo++;
	vo_keo++;
	//
	while (vo_keo >= 2) {
		vo_keo -= 2;
		keo++;
		vo_keo++;
	}
}
document.write('So keo mua duoc la: ' + keo);
//BT3
document.write('<br>--------------<br>');
var soTienCan = 1000000;
var tien10 = 10000;
var tien20 = 20000;
var tien50 = 50000;
var cachDungTien = 0;
for (var i = 1; i <= soTienCan/tien10; i++) {
	for (var j = 1; j <= soTienCan/tien20; j++) {
		for (var k = 1; k <= soTienCan/tien50; k++) {
			if ((i * tien10 + j * tien20 + k * tien50) == soTienCan) {
				cachDungTien++;
			}
		}
	}
}
document.write('So cach dung 3 loai tien de co 1.000.000 la: ' + cachDungTien);

//BT in tam giac
document.write('<br>--------------<br>');
var soTuNhien = 1;
var soDong = 8;
for (var i = 1; i <= soDong; i++) {
	for (var j = 1; j <= i; j++) {
		document.write(soTuNhien + '&nbsp;&nbsp;');
		soTuNhien++;
	}
	document.write('<br>');
}

//BT doi tien vs keo
document.write('<br>--------------<br>');
var soDola = 0;
var soEuro = 0;
var soKeo = 0;
while (soKeo < 50) {
	soDola -= 5;
	soEuro += 3;
	soKeo++;

	while (soEuro > 0) {
		soEuro -= 2;
		soDola += 3;
		soKeo++;
	}
}

document.write('So dola ton de mua 50 keo la: ' + soDola);