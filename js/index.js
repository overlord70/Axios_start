import { obj, numbers } from "./db.js";
import { creator } from "./ui.js";
let inp = document.querySelector('input')
let btn = document.querySelector('.btn')
let blocks = document.querySelector('.blocks')
let dialog = document.querySelector('dialog')
let dialog_img = document.querySelector('dialog img')
let dialog_inp = document.querySelector('dialog input')
let dialog_btn = document.querySelector('dialog button')
creator (blocks, obj, numbers, inp, btn, dialog, dialog_img, dialog_inp, dialog_btn )
let btns = document.querySelectorAll('.start img')
btns.forEach(btn => {
    btn.onclick = () => {
        btn.parentElement.parentElement.remove()
    }
})
