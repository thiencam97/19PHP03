function validateRegister() {
	var username, password;
	// Lay gia tri cua input username
	username = document.getElementById('username').value;
	password = document.getElementById('password').value;
	if (username == '') {
		document.getElementById('errorUsername').innerHTML = 
		'Please input your username';
	} else {
		document.getElementById('errorUsername').innerHTML = '';
	}
	if (password == '') {
		document.getElementById('errorPassword').innerHTML = 
		'Please input your password';
	} else {
		document.getElementById('errorPassword').innerHTML = '';
	}
	if ((username != '') && (password != '')) {
		document.getElementById('textSuccess').innerHTML = 'Register success!';
	}
}

// function validateRegister() {
// 	var username, password;
// 	// Lay gia tri cua input username
// 	username = document.getElementById('username').value;
// 	password = document.getElementById('password').value;
// 	if (username == '') {
// 		alert('Please input your username');
// 	}
// 	if (password == '') {
// 		alert('Please input your password');
// 	}
// 	if ((username != '') && (password != '')) {
// 		alert('Register success!');
// 	}
// }