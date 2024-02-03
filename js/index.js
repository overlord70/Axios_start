import { arr } from "./db.js"
import { reloadSlots } from "./ui.js"

// a
let dialog = document.querySelector('.module_korzinka div')
console.log(dialog);
let slots = document.querySelector('.slots')
reloadSlots(arr, slots,dialog)

let showFive = document.querySelector('#show_five')
let showFull = document.querySelector('#show_full')

showFive.onclick = () => {
    let restrictArr = arr.slice(0, 5)
    reloadSlots(restrictArr, slots)
}

showFull.onclick = () => {
    reloadSlots(arr, slots)
}

let menuBtn = document.querySelector('#korzina')
let menu = document.querySelector('.menu')
menuBtn.onclick = () => {
    menu.classList.toggle('menu_active')
} 
let module = document.querySelector('.module_korzinka')
let korzina = document.querySelector('#korzina')
korzina.onclick = () => {
    module.classList.add('open')
}
let cancel = document.querySelector('.cancel')
cancel.onclick = () => {
    module.classList.remove('open')
}

