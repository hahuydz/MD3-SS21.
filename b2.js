let oddNumber = 0;
let evenNumber = 0;

for (let i =0; i<5; i++){
    let input = +prompt("Moi ban nhap vao 5 so nguyen");
    if (input % 2 === 0){
       oddNumber++;
    }else{
        evenNumber++;
    }
}

alert(`co ${oddNumber} so chan`);
alert(`co ${evenNumber} so le`);