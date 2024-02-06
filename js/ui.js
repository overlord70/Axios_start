export function reloadSlots(arr, place, module) {
    place.innerHTML = ''
    let h4_span = document.querySelector('.money h4 span')
    let span = document.querySelector('#overall')
    for (let item of arr) {
        let slot = document.createElement('div')

        let photo = document.createElement('div')
        let img = document.createElement('img')

        let descr = document.createElement('div')
        let slotName = document.createElement('h3')
        let p = document.createElement('p')

        let icons = document.createElement('div')
        let price = document.createElement('div')
        let priceImg = document.createElement('img')

        let star = document.createElement('div')
        let starImg = document.createElement('img')

        let pack = document.createElement('div')
        let packImg = document.createElement('img')

        let button = document.createElement('button')

        // b

        slot
            .classList
            .add('slot')
        photo
            .classList
            .add('photo')
        descr
            .classList
            .add('descr')
        slotName
            .classList
            .add('slot-name')
        p
            .classList
            .add('descr-p')
        icons
            .classList
            .add('icons')
        button
            .classList
            .add('to-star')

        place.append(slot)
        slot.append(photo)
        photo.append(img)
        img.src = item
            .image
            slot
            .append(descr)
        descr.append(slotName, p, icons, button)
        slotName.innerHTML = item.category
        p.innerHTML = item
            .description
            icons
            .append(price, star, pack)
        price.append(priceImg, item.price)
        priceImg.src = './img/dollar.svg'
        star.append(starImg, item.rating.rate)
        starImg.src = './img/star.svg'
        pack.append(packImg, item.rating.count)
        packImg.src = ''
        button.innerHTML = 'В избранное'

        let nmu = 1
        button.onclick = () => {
            let numView = document.querySelector('#in_pocket')
            let num = +numView.innerText
            if (!button.classList.contains('to-star_active')) {
                h4_span.innerHTML++
                //a
                let div = document.createElement('div')
                let p = document.createElement('p')
                let div_2 = document.createElement('img')
                let div_3 = document.createElement('div')
                let div_5 = document.createElement('div')
                let count = document.createElement('p')
                let div_4 = document.createElement('div')
                let p_2 = document.createElement('p')
                let p_3 = document.createElement('p')
                let p_4 = document.createElement('p')
                let p_5 = document.createElement('p')
                let div_6 = document.createElement('div')
                let hr = document.createElement('hr')
                let div_7 = document.createElement('div')
                //b
                hr
                    .classList
                    .add('hr')
                p_4.innerHTML = 'x'
                p_2.innerHTML = '-'
                div_5
                    .classList
                    .add('grid')
                p_2
                    .classList
                    .add('pointer')
                p_3.innerHTML = '+'
                p_3
                    .classList
                    .add('pointer')
                div
                    .classList
                    .add('flex_2')
                div_4
                    .classList
                    .add('flex')
                p
                    .classList
                    .add('slot-name')
                p.innerHTML = `${item
                    .category}`
                    div_2
                    .classList
                    .add('small')
                p_5.innerHTML = `${item
                    .price}`
                    p_5
                    .classList
                    .add('ps')
                div_2.src = `${item
                    .image}`
                    p_4
                    .classList
                    .add('pointer')
                count.innerHTML = 1
                count
                    .classList
                    .add('count')
                // c
                p_2.onclick = () => {
                    count.innerHTML = +count.innerHTML - 1
                    p_5.innerHTML -= `${item.price}`
                    if (count.innerHTML <= 0) {
                        hr.remove()
                        div.remove()
                        button.innerHTML = 'В избранное'
                        button
                            .classList
                            .remove('to-star_active') + numView.innerHTML--
                        h4_span.innerHTML--
                    }
                }
                let cost = +p_5.innerText
                p_3.onclick = () => {
                    if (count.innerHTML < item.rating.count) {
                        count.innerHTML = nmu += 1
                        p_5.innerHTML = cost * count.innerHTML
                    }
                }
                p_4.onclick = () => {
                    hr.remove()
                    div.remove()
                    button.innerHTML = 'В избранное'
                    button
                        .classList
                        .remove('to-star_active')
                    numView.innerHTML--
                    h4_span.innerHTML--
                }
                // d
                div_6.append(p, p_5)
                div_4.append(div_2, div_6, div_3)
                div_5.append(p_2, p_3, p_4)
                div_3.append(count, div_5)
                div.append(div_4, div_3)
                div_7.append(div)
                module.append(div_7, hr)
                // e
                button.innerHTML = 'Добавлено'
                button
                    .classList
                    .add('to-star_active') + numView.innerHTML++
                span.innerHTML = '$' + p_5.innerHTML
            }
        }
    }
}