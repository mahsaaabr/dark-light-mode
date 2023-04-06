let darkbtn=document.querySelector('.dark-mode')
let mode=false
darkbtn.addEventListener('click',()=>{
    let background=document.body
    if(!mode){
        background.classList.add("dark");
        mode=true;
    }else{
        background.classList.remove("dark");
        mode=false;
    }
})