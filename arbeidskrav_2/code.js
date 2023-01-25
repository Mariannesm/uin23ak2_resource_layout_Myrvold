// Oppstart
let meny =""

resources.map((menyItem, index) => {
    meny += `<a id="fane-knapp-${index}" onclick="tab('${index}')">${menyItem.category}</a>`
    }) 

document.querySelector("#faneMeny").innerHTML = meny




// Håndtere tabs lage onclick 
//legge inn alle elementene i nav mister klassen active klassen, slik at ingen har den klassen her? 
function tab(index) {
    // Henter objektet basert på indeks
     menyItem = resources[index]
     console.log(menyItem)

     // Fjerner active klassen fra elementet med klassen active
     let buttonActive = document.querySelector(".active")

     // Hvis ikke knappen finnes, så skal ikke .active fjernes fra noen knapp
     if(buttonActive != null) {
        buttonActive.classList.remove("active")
     }

     document.querySelector("#fane-knapp-" + index).classList.add("active")

     document.querySelector("#title").innerHTML = menyItem.category
     document.querySelector("#content").innerHTML = menyItem.text

     let linker = ""
    
     menyItem.sources.map((link) => {
        linker += `<li><a href="${link.url}"> ${link.title}</a></li>` 
        
     })

     document.querySelector("#links").innerHTML = linker  

}


// Henter ut første index i ressurser (HTML)
tab(0)





