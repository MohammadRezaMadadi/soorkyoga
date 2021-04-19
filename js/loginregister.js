var account_btn=document.getElementById("account-btn");
var login=document.getElementById("login");
var register=document.getElementById("register");

function Register(){
	account_btn.style.left="110px";
	register.style.left="90px";
	login.style.left="-300px";
}

function Login(){
	account_btn.style.left="0px";
	login.style.left="90px";
	register.style.left="470px";
}