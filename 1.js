const listbutton = document.querySelector('.bt1');
const memobutton = document.querySelector('.bt2');



document.getElementById('clear').addEventListener('click',()=>{
    document.querySelector(".list").innerHTML='';  //모두 삭제 버튼을 누르면 list모두 삭제
});

document.getElementById('clear2').addEventListener('click',()=>{
    document.querySelector(".memo").innerHTML='';  //모두 삭제 버튼을 누르면 list모두 삭제
});

listbutton.addEventListener('click', (e)=>{
    e.preventDefault;
    let tdvalue=document.querySelector("#write");
    if(tdvalue.value == '') {
        alert('내용을 작성해주세요!');
    } else{
        addTask(tdvalue.value);
        tdvalue.value='';
    }
})

function addTask(value){
    let ul = document.querySelector('.list');
    let li=document.createElement('li');
    li.innerHTML = '<span class="delete">x</span><label>'+value+'</label>';

    ul.appendChild(li);
}

document.querySelector('.list').addEventListener('click',(e)=>{
    let remove = e.target.parentNode;
    let parentNode = remove.parentNode;
    parentNode.removeChild(remove);
});


memobutton.addEventListener('click', ()=>{

    let text = document.querySelector("#write").value; 
    if(text.length === 0) {
        alert('내용을 작성해주세요!');
    } else{
    let list = document.querySelector(".memo");  
    list.innerHTML += "<ol>" + text + "</ol>"; 
    document.querySelector("#write").value='';  
    }
})