import { numbers , obj } from "./db.js";
export function creator (place_in_innerHTML, place, nums, input, button){
    for (const item of place) {
        input.onkeyup = () => {
            item.Title = input.value
            item.Id = nums[Math.floor(Math.random() * numbers.length)];
            let data = new Date()
            let hours = data.getHours()
            let minutes = data.getMinutes()
            item.Time = hours + ':' + minutes
            item.Achived = false
            button.onclick = () => {
                input.value = ''
                // a
                let div_1 = document.createElement('div')
                let div_2 = document.createElement('div')
                let div_3 = document.createElement('div')
                let h4 = document.createElement('h4')
                let img = document.createElement('img')
                let p_1 = document.createElement('p')
                let p_2 = document.createElement('p')
                // b
                div_1.classList.add('block')
                div_2.classList.add('start')
                div_3.classList.add('end')
                h4.innerHTML =  item.Title
                img.src = item.Image
                p_1.innerHTML = item.Time
                p_2.innerHTML = 'Id: ' + item.Id
                // c
                div_3.append(p_1, p_2)
                div_2.append(h4, img)
                div_1.append(div_2, div_3)
                place_in_innerHTML.append(div_1)
                // d
                img.onclick = () => {
                    item.Achived = true
                    div_1.remove()
                    if (item.Achived === true) {
                        alert(`Done the acivment (${item.Title.toUpperCase()})`)
                    }
                }
            }
        }
    }
}