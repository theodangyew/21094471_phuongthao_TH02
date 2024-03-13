    function submitForm() {
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var title = document.getElementById("title").value;
        var content = document.getElementById("content").value;

        alert("Họ và tên: " + name + "\nĐịa chỉ e-mail: " + email + "\nTiêu đề bài viết: " + title + "\nNội dung cần gửi: " + content);
    }
