// chuc nang
// 1. them cong viec
// 2. sua
// 3 . xoa
// doi tuong trong ung dung nay la gi ? bao gom nhung thuoc tinh nao
// id,title,status

let todos = [
  {
    id: 1,
    title: "Đi Chơi",
    status: true,
  },
  {
    id: 2,
    title: "Làm Bài Tập",
    status: false,
  },
  {
    id: 3,
    title: "Đá Bóng",
    status: true,
  },
];
// truy cap
const todoListEl = document.querySelector(".todo-list");
const renderTodo = (arr) => {
  todoListEl.innerHTML = "";
  // kiem tra ds cong viec co trong hay ko
  if (arr.length == 0) {
    todoListEl.innerHTML = `<p class='todos-empty'>Không có công việc nào trong danh sách</p>`;
    return;
  }
  // hien thi danh sach
  let html = "";
  arr.forEach((t) => {
    html += `
    <div class="todo-item ${t.status == true ? "active-todo" : ""}">
                    <div class="todo-item-title">
                        <input type="checkbox" ${t.status ? "checked" : ""}
                        onclick=='togglestatus(${t.id})  />
                        <p>${t.title}</p>
                    </div>
                    <div class="option">
                        <button class="btn btn-update">
                            <img src="./img/pencil.svg" alt="icon" />
                        </button>
                        <button class="btn btn-delete" onclick=='deleteTodo(${
                          t.id
                        })>
                            <img src="./img/remove.svg" alt="icon" />
                        </button>
                    </div>
                </div>
    `;
  });
  todoListEl.innerHTML = html;
};
// xoa cong viec
const deleteTodo = (id) => {
  // loc ra cac cv khac id cv minh muon xoa
  todos = todos.filter((todo) => todo.id != id);
  renderTodo(todos);
};
// thay doi trang thai cong viec
const togglestatus = (id) => {
  // lay ra cv can thay doi
  let todo = todos.find((todo) => todo.id == id);
  // thay doi trang thai cua cong viec do : true -> false, false -> true
  todo.status = !todo.status;
  // hien thi len giao dien
};

const todoOptionEls = document.querySelectorAll(".todo-option-item input");
// loc trang thai cong viec
Array.from(todoOptionEls).forEach((input) => {
  input.addEventListener("change", () => {
    let option = input.value;
    console.log(option);

    let todosFilter = [];
    switch (option) {
      case "all": {
        todosFilter = [...todos];
        break;
        //  spread operator
      }
      case "active": {
        todosFilter = todos.filter((todo) => todo.status == true);
        break;
      }
      case "unactive": {
        todosFilter = todos.filter((todo) => {
          todo.status == false;
        });
        break;
      }
    }
  });
});
// 4-1000
const randomId = () =>{
    return Math.floor(Math.random()*(1000-4 +1) +4 )

}
const todoInputEL = document.getElementById('btn-add');
// them cong viec 
btnAdd.addEventListener('click',()=>{
    // lay duu lieu trong o input
    let title = todoInputEL.value
    // kiem tra tieu de
    if(title = ''){
        alert('tieu de cong viec khong duoc de trong')
        return;
    }
    // tao cong viec moi
    let newTodo = {
        id : randomId(),
        title : title ,
        status : false
    }
// them vao mang todos 
todos.push(newTodo)
renderTodo(todos)
todoInputEL.value = ''

})
const addTodo = () =>{
    btnAdd.addEventListener('click',()=>{
        // lay duu lieu trong o input
        let title = todoInputEL.value
        // kiem tra tieu de
        if(title = ''){
            alert('tieu de cong viec khong duoc de trong')
            return;
        }
        // tao cong viec moi
        let newTodo = {
            id : randomId(),
            title : title ,
            status : false
        }
    // them vao mang todos 
    todos.push(newTodo)
    renderTodo(todos)
    todoInputEL.value = ''
    
    })

}
todoInputEL.addEventListener('keydown',(e)=>{
    if(e.keyCode == 13){
        addTodo()
    }

})
// lay du lieu tu localStorage
const getDataFromLocalStorage = ()=>{
  let data = localStorage.getItem('todos')
  if(data){
   todos = JSON.parse(data);
  } else {
    todos =[]
  }
}
getDataFromLocalStorage()
// luu du lieu vaolocalStorage
const setDataFromLocalStorage = arr =>{
localStorage.setItem('todos',JSON.stringify(arr));


}



