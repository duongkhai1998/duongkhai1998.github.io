// Mô tả về hoạt đồng hằng ngày
// 1. Làm bài tập (3s)
// 2. Đá bóng (4s)
// 3. Nấu cơm (5s)
const doTask1 = (taskName, cb) => {
  console.log("bat dau cong viec");
  console.log(`thuc hien cong viec: ${taskName}`);

  setTimeout(() => {
    cb();
  }, 3000);
};
const doTask2 = (taskName, cb) => {
  console.log(`thuc hien cong viec: ${taskName}`);

  setTimeout(() => {
    cb();
  }, 4000);
};
const doTask3 = (taskName, cb) => {
  console.log(`thuc hien cong viec: ${taskName}`);

  setTimeout(() => {
    cb();
  }, 5000);
};

const finish = ()=>{
    console.log('ket thuc  cong viec')
}

// thuc hien tuan tu
doTask1('nhat rau',function(){
    doTask2('rua rau',function(){
        doTask3('luoc rau',function(){
            finish()
        })
    })
})
// thuc hien song song 
doTask1('lam bt',()=>{console.log('lam bt xong')})
doTask2('da bong',()=>{console.log('da bong xong')})
doTask3('nau com',()=>{console.log('nau com xong')})