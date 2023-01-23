// Oppstart
let meny =""

resources.map((menyItem, index) => {
    meny += `<a onclick="tab('${index}')" class="${index == 0 ? 'active' : ""}">${menyItem.category}</a>`
    }) 

document.querySelector("#faneMeny").innerHTML = meny




// Håndtere tabs lage onclick 

function tab(index) {
     menyItem = resources[index]
     console.log(menyItem)

     document.querySelector("#title").innerHTML = menyItem.category
     document.querySelector("#content").innerHTML = menyItem.text

     let linker = ""
    
     menyItem.sources.map((link) => {
        linker += `<li><a href="${link.url}"> ${link.title}</a></li>` 
        
     })

     document.querySelector("#links").innerHTML = linker

     

}

//alle elementene i nav mister klassen active klassen, slik at ingen har den klassen




