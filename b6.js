let number = +prompt("Nhập vào một số nguyên: ");

if (!isNaN(number)) {
    let factors = "Các ước của " + number + " là: ";
    for (let i = 1; i <= Math.abs(number); i++) {
        if (number % i === 0) {
            factors += i + " ";
        }
    }
    alert(factors);
} else {
    alert(`Vui lòng nhập một số nguyên hợp lệ.`);
}