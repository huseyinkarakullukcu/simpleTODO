const h1 = document.querySelector("header h1")
const langInput = document.getElementById("input")
let newList = null
const buton = document.getElementById("btn")
const btnRemove = document.getElementById("btnRemove")

const ul = document.createElement("ul")
//ul.className ="container"
btnRemove.after(ul)

buton.addEventListener("click", () => {
    //console.log(langInput.value)
    !langInput.value
      ? alert("Please enter a langugage")
      : (ul.innerHTML += `<li>${langInput.value}</li>`)
    langInput.value = ""
    langInput.focus()
  })
  //
  btnRemove.addEventListener("click", () => {
    const liRemove=document.querySelector('.add-item ul')
    liRemove.lastChild !== null && liRemove.lastChild.remove()
    langInput.focus()
  })

  //
  
  langInput.addEventListener("keydown", (event) => {
    if (event.code === "Enter") {
      buton.click()
    }
  })
  
  //window.onload = print()
  
  window.addEventListener("load", () => {
    langInput.focus()
  })