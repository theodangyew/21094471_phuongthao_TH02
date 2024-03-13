document.getElementById('submit-button').addEventListener('click', function() {
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var customerType = document.getElementById('customer-type').value;
    var card = document.getElementById('card-code').value;
    var email = document.getElementById('email').value;
    var bill = document.getElementById('invoice-code').value;
    var feedback = document.getElementById('feedback').value;

    alert('Thông tin bạn đã nhập:\n' +
        'Họ và tên: ' + name + '\n' +
        'Số điện thoại: ' + phone + '\n' +
        'Loại khách hàng: ' + customerType + '\n' +
        'Mã thẻ: ' + card + '\n' +
        'E-mail: ' + email + '\n' +
        'Mã hóa đơn: ' + bill + '\n' +
        'Chi tiết mô tả: ' + feedback + '\n'
    );
});
