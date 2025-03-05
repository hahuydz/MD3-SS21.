let sumOdd = 0;

for (let i = 0; i < 5; i++) {
    let num = +prompt(`Nhập số nguyên thứ ${i + 1}:`);
    if (num % 2 !== 0) {
        sumOdd += num;
    }
}

alert(`Tổng các số lẻ là: ${sumOdd}`);