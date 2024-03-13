function login() {
    alert("Bạn đã đăng nhập thành công");
}
document.getElementById('eye-icon').addEventListener('click', function() {
    if (confirm("Bạn có muốn hiện mật khẩu?")) {
        document.getElementById('password').type = 'text';
    }
});