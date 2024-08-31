const btn1 = document.querySelector('.addButton');
const btn2 = document.querySelector('.removeButton');
const div = document.querySelector('.div');
const arr = ["JS" , "HTML", "CSS"];
const list = document.createElement("ul");
document.body.appendChild(list);

let index = 0

function Display () {

    if (index < arr.length){
        const item = document.createElement("li");
        item.textContent = arr[index];
        list.appendChild(item);
        index++
    }
}

function Remove () {

    if (index > 0) {
        list.removeChild(list.lastChild); 
        index--;
    }
}


btn1.addEventListener('click' , () =>{
    Display()
})

btn2.addEventListener('click' , () =>{
    Remove()
})