let vasyl = document.querySelector("#Vasia");
let Body = document.querySelector("#body");
let Form = document.querySelector("#form");
let bntCancel = document.querySelector("#cancel");
let submit = document.getElementById("submit");
let Onclick = document.getElementById("onclick");
let email = document.getElementById("email");
let textArea = document.querySelector(".input");
let non = ["курва","дідько","дідько"];
vasyl.onclick = () =>{
    Form.style.display = "block";
    Body.style.filter = "blur(4px)";
    Form.style.zIndex = "3";
};
bntCancel.onclick = () => {
    Form.style.display = "none";
    Body.style.filter = "blur(0px)";
}


// let textArea = document.querySelector("textarea");
submit.onclick = function (event){
    event.preventDefault()
    console.log("Click");
    // let atn = document.createElement("div");
    if(textArea.value.length > 2 && email.value.length != 0 && grammar(non) == true){
        setTimeout(() => { 
            Onclick.remove();
            event.preventDefault()
            let a = document.createElement("div");
            a.className = ("success");
            a.textContent = "Повідомлення відправлено!";
            Form.appendChild(a);
            
        }, 1000);
        
    }else{
        event.preventDefault()
        Form.style.backgroundColor = "red";
        let message = document.createElement("div");
        message.classList.add("fall");
        message.innerText = "Заповніть всі поля!";
        textArea.insertAdjacentElement("beforebegin",message);
    } 
  
   
};
function grammar(non){

    for(i = 0; i < non.length; i++){
        console.log(non);
        if(textArea.value.includes(non[i])){
            alert("Матюки");
        }
        return true
    }
}