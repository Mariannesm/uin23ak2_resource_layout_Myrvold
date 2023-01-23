// Oppstart
let meny =""

resources.map((menyItem, index) => {
    meny += `<a class="${index == 0 ? 'active' : null}">${menyItem.category}</a>`
    }) 

document.querySelector("#faneMeny").innerHTML = meny




// Håndtere tabs



