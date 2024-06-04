const form = document.forms.Take_information

let table = document.querySelector('table')

let dialog = document.querySelector('dialog')

let btn = document.querySelector('.btn')

let form_2 = document.forms.replacer

let arr_1 = [
    {
        number:  0,
        name: '' ,
        age: 0 ,
        id: 0,
    }
]

form.onsubmit = (e) => {
    e.preventDefault()
  arr_1.filter(item => {
    if(new FormData(form).get('name') === '' || new FormData(form).get('age') === '' ){
        alert('Write your name')
    } else {
        item.number++
          item.name = new FormData(form).get('name')
        
        item.age = new Date().getFullYear() - new FormData(form).get('age')
        
        item.id = Math.random()
    }
  })
  reload(arr_1, table)
}
function reload(arr, place) {
    // place.innerHTML = ''
    for (const item of arr) {
        let hr = document.createElement('hr')
        let tr = document.createElement('tr')
        let td_1 = document.createElement('td')
        let td_2 = document.createElement('td')
        let td_3 = document.createElement('td')
        let td_4 = document.createElement('td')
        let div = document.createElement('div')
        let img_1 = document.createElement('img')
        let img_2 = document.createElement('img')
        // b
        tr.style.width = '1200px'
        tr.style.display = 'flex'
        tr.style.justifyContent = 'space-between'
        tr.style.gap = '280px'
        td_1.innerHTML = item.number
        td_2.innerHTML = item.name
        td_3.innerHTML = item.age
        img_1.src = './img/trash-svgrepo-com.svg'
        img_2.src = './img/clipboard-with-pen-svgrepo-com.svg'
        div.classList.add('flex_0')
        // c
        div.append(img_1, img_2)
        td_4.append(div)
        tr.append(td_1, td_2, td_3, td_4)
        place.append(tr, hr)
        // d
        img_1.onclick = () => {
            tr.remove()
            hr.remove()
        }
        img_2.onclick = () => {
            dialog.showModal()
        }
        btn.onclick = () => {
            dialog.close()
        }
        form_2.onsubmit = (e) => {
            e.preventDefault()
            if(item.id === item.id){

                td_2.innerHTML = new FormData(form_2).get('name_2')
                 td_3.innerHTML = new Date().getFullYear() - new FormData(form_2).get('age_2')
                 dialog.close()
            }
        }
    }
}
