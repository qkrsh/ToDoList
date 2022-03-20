const listbutton = document.querySelector('.bt1');
const memobutton = document.querySelector('.bt2');

listbutton.addEventListener('click', ()=>{

    let text = document.querySelector("#write").value; 
    let re="<input type='checkbox' id='check'style='width: 20px; padding: 80px 0;'/>"+text; 
    if(text.length === 0) {
        alert('내용을 작성해주세요!');
    } else{
        let list = document.querySelector(".list");  
        list.innerHTML += re;
    }

})

memobutton.addEventListener('click', ()=>{

    let text = document.querySelector("#write").value; 
    if(text.length === 0) {
        alert('내용을 작성해주세요!');
    } else{
    let list = document.querySelector(".memo");  
    list.innerHTML += "<ol>" + text + "</ol>"; 
    }
})

