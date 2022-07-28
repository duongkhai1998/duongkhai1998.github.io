let money = 40;
const buyIphone = () => {
  return new Promise((resolve, reject) => {
    if (money >= 30) {
      resolve("du tien mua iphone");
    } else {
      reject("khong du tien mua iphone");
    }
  });
};
const buyAirpod = () => {
  return new Promise((resolve, reject) => {
    if (money - 30 >= 5) {
      resolve("mua them airpod");
    } else {
      reject("khong du tien ");
    }
  });
};
// cach 1 : function expresstion
// const demo = async function(){}
// cach 2 : regular function
// async function(buy){}
// cach 3 : arrow function
const buy = async () => {
try {
    let res = await buyIphone();
    console.log(res)
    let res1 = await buyAirpod()
    console.log(res1)
    
} catch (error) {
    console.log(error)
    
}
return 've nha'
};
const data = buy()
console.log(data)
data.then(res=> console.log(res))