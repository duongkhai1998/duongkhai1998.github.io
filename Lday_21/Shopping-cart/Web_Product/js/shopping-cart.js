function formatMoney(num) {
    return num.toLocaleString('vi', { style: 'currency', currency: 'VND' });
}


l

// Xoa san pham
function deleteProduct(id, size) {
    let isConfirm = confirm("Ban muon xoa san pham ?")
    if (isConfirm) {
        items = items.filter(p => p.id !== id || p.size !== size)
        
        setDataToLocalStorage(items)
        updateTotalCart()
        updateMoney()
    }
    
    renderProduct(items)
}

// them san pham san pham
function plusCount(id, size) {
    let product = items.find(p => p.id == id && p.size == size)
    product.count++
    updateMoney()
    setDataToLocalStorage(items)
    renderProduct(items)
}

function minusCount(id, size) {
    let product = items.find(p => p.id == id && p.size == size)
    product.count--
    if (product.count < 1) {
        product.count = 1
    }
    updateMoney()
    setDataToLocalStorage(items)
    renderProduct(items)
}
let discountVocher = 0;

const subTotalMoneyEl = document.getElementById("sub-total-money")
const totalMoneyEl = document.getElementById("total-money")

function updateMoney() {
    let subTotalMoney = 0;
    items.forEach(item => {
        subTotalMoney += item.count * item.price
    })
    
    subTotalMoneyEl.innerHTML = `${formatMoney(subTotalMoney)}`

    let totalMoney = subTotalMoney*(1-discountVocher)
    totalMoneyEl.innerHTML = `${formatMoney(totalMoney)}`
}

updateMoney()


// Voucher

const discountInputEl = document.getElementById("discount-form-input")
const btnApplyDiscount = document.getElementById("btn-apply")


btnApplyDiscount.addEventListener("click", () => {
    discountMoney()

})
discountInputEl.addEventListener('keydown',(e)=>{
    if(e.which== 13){
        discountMoney()
}})
function discountMoney(){
let inputCode = discountInputEl.value
    if (!inputCode) {
        alert("Ma giam gia khong duoc de trong")
        return;
    }

    for (code in vouchers) {
        if (inputCode.toLowerCase() === code.toLowerCase()) {
            alert("Ap dung ma giam gia thanh cong")
            discountVocher = vouchers[code]
            updateMoney()
            return;
        }
    }

    alert("Ma giam gia khong ton tai")
}
        