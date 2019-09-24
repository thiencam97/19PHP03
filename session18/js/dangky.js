function dangKy() {
	var ten = document.getElementById('ten').value;
	var gioiTinhs = document.getElementsByName('gioitinh'); // vì radio trùng name nên nó sẽ trả về 1 mảng
	var ngaySinh = document.getElementById('ngaySinh').value;
	var tinhThanh = document.getElementById('tinhThanh');	
	
		if (ten == "") {
			document.getElementById('errorTen').innerHTML = 'Please input name!';
		}else {
			document.getElementById('errorTen').innerHTML = '';
		}

		if (gioiTinh == "") {
			document.getElementById('errorGioiTinh').innerHTML = 'Please input gioitinh!';
		}else {
			document.getElementById('errorGioiTinh').innerHTML = '';
		}

		if (ngaySinh == "") {
			document.getElementById('errorNgaySinh').innerHTML = 'Please input ngaysinh!';
		}else {
			document.getElementById('errorNgaySinh').innerHTML = '';
		}

		if (optTinhThanh == "") {
			document.getElementById('errorTinhThanh').innerHTML = 'Please input tinh thanh!';
		}else {
			document.getElementById('errorTinhThanh').innerHTML = '';
		}

}