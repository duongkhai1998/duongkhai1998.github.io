/*
1:khai niem api la gi ?
api la viet tat cua application programing interface(giao dien lap trinh ung dung)
tap hop cac quy tac ma qua do cho phep cac thanh phan hoac cac ung dung tuong tac nhu the nao 

2:Vi du thuc te 
di an nha hang
khach hang client(front end)
nha bep : server(back end)
khach hang --> goi mon --> nha bep
nha bep -->nau mon an -->khach hang
nhan vien : lay thuc don tu khach hang -->gui cho nha bep
nha bep nau an xong -->nhan vien bung mon an len cho khach hang

3:Cau truc nhu the nao
API = Http method(dong tu) + URL
Http method
GET : lay thong tin 
POST : tao
PUT : cap nhap 
DELETE : xoa

URL (danh tu -resouce) users 
GET /users --> lay danh sach tat ca users
GET /users/1 --> lay thong tin users id:1
GET /users/1/blogs --> lay danhsach tat ca block cua user co id :1
POST /users --> tao user moi (POST / users/creat --> hop le nhung khong dung chuan restful API)
{
    name :
    email :
}
POST /users/1/blogs --> tao blog moi cho user co id :1 
{
    title:
    content:
}
PUT /users/1 --> cap nhap thong tin cho user co id :1
{
    name:
    email:
    ...
}
DELETE /users/1 --> xoa user co id :1

4: Thuc hien goi API nhu the nao
-axios(thu vien ben thu 3,can phai noi link vao de thuc hien)(khuyen dung)
-fetch API (co san cua javascrips)
-AJAX(co trong Jquery,muon su dung can noi link)

5: Test API nhu the nao
-Postman
-Extension VSCODE :REST Client 
- Test truc tiep tren trinh duyet(su dung voi API GET)

*/
const imageEL= document.getElementById('image')
const btnAxios = document.getElementById('btn-axios')
btnAxios.addEventListener('click',async()=>{
    try {
        // goi API --> https://dog.ceo/api/breeds/image/random
      let res =  await axios.get('https://dog.ceo/api/breeds/image/random')
      console.log(res.data.message)
      imageEL.src = res.data.message
    } catch (error) {
        console.log(error)
        
    }

})


// gọi API sử dụng AJAX trong jquery
$('#btn-jquery').click(function(){
$.ajax({
    type : "GET",
    url : "https://dog.ceo/api/breeds/image/random",
    success: function(response){
        console.log(response)
        $('#image').attr("src",response.message)
    },
    error : function(error){
        console.log(error)
    }
})
})

// gọi API sử dụng fetchAPI
const btnFetch = document.getElementById('btn-fetch')
btnFetch.addEventListener('click',async()=>{
try {
    let res= await fetch("https://dog.ceo/api/breeds/image/random")
  let data = await res.json()
  console.log(data)
  imageEL.src = data.message
} catch (error) {
    console.log(error)
}
})

