let number = +prompt("Nhập số: ");

if (isNaN(number)) {
    alert(`Số không hợp lệ`);

} else if (number < 2) {
    alert(`${number} không là số nguyên tố`);

} else {
    let check = 0;
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            check = 1;
            break;
        }
    }

    if (check === 0) {
        alert(`${number} là số nguyên tố`);
    } else {
        alert(`${number} không là số nguyên tố`);
    }
}