let text=document.getElementById("txt")
let num=document.querySelectorAll(".box")
let string="";
Array.from(num).forEach((button)=>{
    button.addEventListener("click",(data)=>{
       if(data.target.innerHTML=="DE"){
          string=String(string).slice(0,-1)
          text.textContent=string
          
          
       }else if(data.target.innerHTML=="AC"){
        string=""
        text.textContent=string
       }else if(data.target.innerHTML=="="){
            string=eval(string)
            text.textContent=string
        }else{
       string=string+data.target.innerHTML
       text.textContent=string
        }
    })
})

