// promise

// pending
let promise = new Promise((resolve, reject) => {});
console.log(promise);

// thanh cong
// loi hua:cuoi tuan neu co tien thi di choi
let hasMoney = true 
let promiseSuccess =new Promise((resolve, reject) => {
if(hasMoney==true){
    resolve('cuoi tuan di choi')
}

})
console.log(promiseSuccess)
// that bai
// loi hua:neu cuoi thang co tien thi tra no
hasMoney = false
let promiseFail = new Promise((resolve, reject) => {
if(hasMoney==false){
    reject('khong co tien tra no')
}
})
console.log(promiseFail)


// HỨA : Nếu có trên 30 triệu, sẽ mua iphone 13 pro max
// sau khi mua ip xong neu con du 5tr thi mua airpod
let money =30
const buyIphone = ()=>{
    return new Promise((resolve,reject)=>{
        if(money >= 30){
            resolve('du tien mua iphone')
        } else{
            reject('khong du tien mua iphone')
        }
    })
}
const buyAirpod = ()=>{
    return new Promise((resolve,reject)=>{
        if(money - 30>=5){
            resolve('mua them airpod')
        } else{
            reject('khong du tien ')
        }
    })
}
// console.log(buyIphone())
buyIphone()
    .then(res => {
        console.log(res)
        // return promise buyaipod thi moi them dc .then
       return buyAirpod()
    })
    .then(res => console.log(res))
    .catch(error => console.log(error))
    .finally(()=>{
        console.log('ve nha')
    })


