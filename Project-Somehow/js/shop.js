let products =[
    {
        id:1,
        images:["https://canifa.com/img/1000/1500/resize/5/t/5ts22s014-se114-2-thumb.jpg","https://canifa.com/img/1000/1500/resize/5/t/5ts22s014-se114-3.jpg","https://canifa.com/img/1000/1500/resize/5/t/5ts22s014-se114-l-1-u.jpg","https://canifa.com/img/1000/1500/resize/5/t/5ts22s014-se114-l-2.jpg",],
        name:"Áo phông nam graphic",
        price:199000,
        sizes: ["M", "L", "XL"],
        description:"Áo phông nam bo cổ in hình form rộng rãi chất liệu 100% cotton",

    },
    {
        id:2,
        images:["https://canifa.com/img/1000/1500/resize/8/t/8ts22s013-sw001-1.jpg","https://canifa.com/img/1000/1500/resize/8/t/8ts22s013-sw001-2.jpg","https://canifa.com/img/1000/1500/resize/8/t/8ts22s013-sw001-3.jpg","https://canifa.com/img/1000/1500/resize/8/t/8ts22s013-sw001-m-1-u.jpg"],
        name:"Áo phông nam",
        price:169000,
        sizes: ["M", "L", "XL"],
        description:"Áo phông basic, cổ tròn, tay cộc, in chữ nhỏ. Chất liệu 100% cotton"
    },
    {
        id:3,
        images:["https://canifa.com/img/1000/1500/resize/8/t/8th22s010-fj020-1.jpg","https://canifa.com/img/1000/1500/resize/8/t/8th22s010-fj020-2-thumb.jpg","https://canifa.com/img/1000/1500/resize/8/t/8th22s010-fj020-3.jpg","https://canifa.com/img/1000/1500/resize/8/t/8th22s010-fj020-xl-1-u.jpg"],
        name:"Áo sơ mi nam",
        price:399000,
        sizes: ["M", "L", "XL"],
        description:"Áo sơ mi nam có túi áo cổ đức chất liệu tencel"
    },
    {
        id:4,
        images:["https://canifa.com/img/1000/1500/resize/8/t/8th20s018-se003-1.jpg","https://canifa.com/img/1000/1500/resize/8/t/8th20s018-se003-2-thumb.jpg","https://canifa.com/img/1000/1500/resize/8/t/8th20s018-se003-4.jpg","https://canifa.com/img/1000/1500/resize/8/t/8th20s018-se003-3.jpg"],
        name:"Áo sơ mi nam",
        price:249000,
        sizes: ["M", "L", "XL"],
        description:"Áo sơ mi nam"
    },
    {
        id:5,
        images:["https://canifa.com/img/1000/1500/resize/8/b/8bp21w010-db056-l-1.jpg","https://canifa.com/img/1000/1500/resize/8/b/8bp21w010-db056-l-2.jpg","https://canifa.com/img/1000/1500/resize/8/b/8bp21w010-sk010-l-1.jpg","https://canifa.com/img/1000/1500/resize/8/b/8bp21w010-sk010-l-2.jpg"],
        name:"Quần dài nam",
        price:499000,
        sizes: ["M", "L", "XL"],
        description:"Quần chất liệu cotton pha, co dãn. Phom ôm, cạp thường, cài cúc, khóa phía trước. Có túi phía trước và sau. Kiểu dáng đơn giản, lịch sự, phù hợp nhiều hoàn cảnh."
    },
    {
        id:6,
        images:["https://canifa.com/img/1000/1500/resize/8/b/8bp20w006-sb060-m.jpg","https://canifa.com/img/1000/1500/resize/8/b/8bp20w006-sb060-m.jpg","https://canifa.com/img/1000/1500/resize/8/b/8bp20w006-sk005-m.jpg",],
        name:"Quần nỉ nam",
        price:199000,
        sizes: ["M", "L", "XL"],
        description:"Quần nỉ nam"
    },
    {
        id:7,
        images:["https://canifa.com/img/1000/1500/resize/8/t/8tp22s005-sw001-2.jpg","https://canifa.com/img/1000/1500/resize/8/t/8tp22s005-sw001-3.jpg","https://canifa.com/img/1000/1500/resize/8/t/8tp22s005-sw001-xl-1.jpg","https://canifa.com/img/1000/1500/resize/8/t/8tp22s005-sw001-4.jpg"],
        name:"Áo polo nam",
        price:399000 ,
        sizes: ["M", "L", "XL"],
        description:"Áo polo chất liệu polyester pha, cổ bằng vải chính."
    },
    {
        id:8,
        images:["https://canifa.com/img/1000/1500/resize/8/u/8us22a002-se322-xl-1.jpg","https://canifa.com/img/1000/1500/resize/8/u/8us22a002-sk263-xl-1.jpg",],
        name:"Pack 2 quần sịp tam giác nam",
        price:219000,
        sizes: ["M", "L", "XL"],
        description:"Quần sịp đùi chất liệu modal spandex Phom ôm sát"
    },
   
   

    
]
// Truy cập vào các thành phần
const productListEl = document.querySelector(".products");








const renderProduct = arr => {
    productListEl.innerHTML = "";

    // TODO : Kiểm tra xem có sản phẩm không

    // Hiển thị nếu có sản phẩm
    let html = "";
    arr.forEach(p => {
        html += 
    `
    <div class="col-lg-4 col-md-6 col-6  item-entry mb-4">
                <div class="card mb-4 product-wap  ">
                  <div class="card border-0  ">
                    <img class="card-img" src="${p.images[0]}">
                    <div class="card-img-overlay product-overlay d-flex align-items-center justify-content-center">
                      <ul class="list-unstyled">
      
                        
                        <li><a  href="./detail.html?id=${p.id}"><li><a  href="./detail.html?id=${p.id}"> <button class="btn btn-click text-dark">MUA NGAY</button></a></li></a></li>
                      </ul>
                    </div>
                  </div>
      
                </div>
                <h2 class="item-title"><a href="./detail.html?id=${p.id}">${p.name}</a></h2>
                <strong class="item-price">${formatMoney(p.price)}</strong>
              </div>
    `        
        
        
    });
    productListEl.innerHTML = html;
}

// Format tiền - VND
const formatMoney = number => {
    return number.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
}

renderProduct(products);