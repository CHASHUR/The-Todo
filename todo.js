const search= document.getElementById('search');
const button= document.querySelector('.button')
const container= document.querySelector('.container')
const list= document.querySelector('.list')


button.addEventListener('click',()=>{
    if (search.value==='') {
        alert('empty: Enter Events');
        
    } else {
        
    let li = document.createElement('li');
    li.innerHTML= search.value;
    list.appendChild(li);
    let span= document.createElement("span")
    span.innerHTML ="\u00d7"
    li.appendChild(span);
    
    }
    search.value= "";
    savedata();
})
list.addEventListener('click',(e)=>{
    if (e.target.tagName==='LI') {
        e.target.classList.toggle("check")
        
    } else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove()
    }}, false);
        
    
function savedata() {
    localStorage.setItem("data", list.innerHTML);
}
function showtask() {
    list.innerHTML= localStorage.getItem("data")
}
showtask();