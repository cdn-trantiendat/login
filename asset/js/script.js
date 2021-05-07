function LogIn(){
loggedin=false;
username="";
password="";
username=prompt("Xác nhận lại tên đăng nhập:");
username=username.toLowerCase();
password=prompt("Xác nhận lại mật khẩu:");
password=password.toLowerCase();
<!-- ADMIN -->
if (username=="admin@trantiendat.com.vn" && password=="admin") { 
loggedin=true;
window.location="/partner/network/admin";
}
if (username=="admin@gov.trantiendat.com.vn" && password=="admingov") { 
loggedin=true;
window.open("/partner/gov/admin", "_self");

}
if (username=="admin@media.trantiendat.com.vn" && password=="adminmedia") {
loggedin=true;
window.location="home-page2.html";
}
if (username=="admin@digital.trantiendat.com.vn" && password=="admindigital") { 
loggedin=true;
window.location="https://sites.google.com/view/cdn-trantiendat-com-vn/3cms/cdn-admin";
}
if (username=="admin@idc.trantiendat.com.vn" && password=="adminidc") {
loggedin=true;
window.location="home-page2.html";
}
if (username=="admin@truyenhinh.trantiendat.com.vn" && password=="admintv") { 
loggedin=true;
window.location="https://sites.google.com/view/truyenhinh-trantiendat-com-vn/3cms/admin";
}
if (username=="admin@technology.trantiendat.com.vn" && password=="admintech") {
loggedin=true;
window.location="home-page2.html";
}
<!-- ADMIN -->
<!-- GUEST -->
if (username=="dattt_ct@trantiendat.com.vn" && password=="dattt_v") { 
loggedin=true;
window.location="https://truyenhinh-trantiendat.github.io/live/";
}
if (username=="b" && password=="b") {
loggedin=true; window.location="https://sites.google.com/view/truyenhinh-trantiendat-com-vn/3cms/id";
}
<!-- GUEST -->
<!-- _________ -->
<!-- ACCOUNT TV -->
if (username=="trantiendat" && password=="a") {
loggedin=true;
window.open();
}
if (username=="a" && password=="a") {
loggedin=true;
window.alert("Truyền Hình Trần Tiến Đạt: Xin chào tài khoản 'a', chào.mừng bạn đến với dịch vụ của chúng tôi. Hiện tại, website chính thức ,'location.hostname', đang trong quá trình thử nghiệm dịch vụ và chắc chắn sẽ có một số lỗi xảy ra. Nếu gặp lỗi sự cố mong quý khách tha thứ và phản hồi về cho chúng tôi quá fax: 02323515301 hoặc email: cskh@truyenhinh.trantiendat.com.vn - Giám Đốc điều hành: Trần Tiến Đạt. Trân trọng!");
}
<!-- ACCOUNT TV -->

if (loggedin==false) {
alert("Đăng nhập không thành công !");
}
}

function myFunction() { 	
document.getElementById("button_id_off").value = "Clicked"; 	
} 
setInterval(function(){ document.getElementById("button_id_off").click();	 
}, 4000); 

window.onload = function(){
  document.getElementById('button_id_on').click();
}