let string=""
let result = ""
const buttons = document.querySelectorAll(".key")
const display  = document.querySelector(".display1")
const submit = document.querySelector(".equal")
const reset = document.querySelector(".reset")
const del = document.querySelector(".del")
const theme1 = document.getElementById("1")
const theme2 = document.getElementById("2")
const theme3 = document.getElementById("3")
const body = document.getElementsByTagName("body")
 
function changeDisplay(){
    display.innerHTML=string
    string=display.innerHTML
}
buttons.forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
        if(string.length<=10){
            string = string + e.target.innerHTML
            changeDisplay()
        }
        else{
            return
        }
    })
})

reset.addEventListener("click" , ()=>{
    string=""
    changeDisplay()
})

function handleSubmit(){
    try{
        string = eval(string)
        changeDisplay()
    }
    catch(err){
        alert("Invalid Syntax")
    }
}

submit.addEventListener("click" , handleSubmit)

del.addEventListener("click" , ()=>{
    string=display.innerHTML
    let arr = string.split('')
    arr.pop()
    string=""
    arr.forEach((e)=>{
        string=string+e
    })
    changeDisplay()
})

 