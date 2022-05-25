// Ví dụ 1 : Cuộc sống hằng ngày
// Thực hiện công việc thức dậy lúc 5:00 trong 30 ngày
for (let day = 1; day <= 30; day = day + 1) {
    console.log(`Ngày ${day} thức dậy lúc 5:00`);
}
// Thực hiện công việc thức dậy lúc 5:00 trong 30 ngày vào các ngày lẻ
for (let day = 1; day <= 30; day = day + 1) {
    if (day % 2 == 1) {
        console.log(`Ngày ${day} thức dậy lúc 5:00`);
    }
}

// Hoặc
for (let day = 1; day <= 30; day = day + 2) {
    console.log(`Ngày ${day} thức dậy lúc 5:00`);
}
// Thực hiện công việc thức dậy lúc 5:00 trong 30 ngày. Cách 7 ngày nghỉ 1 lần
for (let day = 1; day <= 30; day = day + 1) {
    if (day % 7 == 0) {
        console.log("Nghỉ");
        continue;
    }

    console.log(`Ngày ${day} thức dậy lúc 5:00`);
}
// Thực hiện công việc thức dậy lúc 5:00 trong 30 ngày. Đến ngày số 20, chán quá => nghỉ
for (let day = 1; day <= 30; day = day + 1) {
    if (day == 20) {
        console.log("Chán quá. Nghỉ thôi");
        break;
    }
    console.log(`Ngày ${day} thức dậy lúc 5:00`);
}
// Ví dụ 2 : Tiết kiệm tiền
// Thực hiện tiết kiệm trong 10 ngày, mỗi ngày 100.000

// Trước khi bắt đầu thì số tiền trong ví = 0
let totalMoney = 0;

for (let day = 1; day <= 10; day++) {
    // totalMoney = totalMoney + 100000;
    totalMoney += 100000;
}

console.log(totalMoney);
// Những ngày chẵn tiết kiệm 200.000, ngày lẻ 100.0000
let money = 0;
for(let day=1; day<=10;day++){
    if(day %2  ==1){
        money += 100000;
    }else {
        money += 200000;
    }
}
console.log("Money=" + money);
//  Tiết kiệm đến ngày số 8 thì hết tiền -> dừng lại

for(let day=1; day<=10;day++){
    if ( day == 8){
        console.log('het tien,nghi? ')
        money += 1000000;
        break;
    }
}
console.log('money =' + money )
for(let day=1;day<=10; day++){
    if(day%7==0){
        console.log('đi nhậu')
        money-=200000
        continue;
    }
    money+=100000;
}
console.log("Money="+money);

