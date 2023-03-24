let select = document.querySelector("select")
let header = document.querySelector("header")




function handleChange(event){
    if(event.target.value === "red"){
        document.body.style.background = "red"
    }
    
    
}
select.addEventListener("change" , handleChange)





