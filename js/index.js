const nav_ps = document.querySelectorAll('nav p')
let prev = 2
nav_ps.forEach((p,idx) => {
    p.onclick = () => {
        nav_ps[prev].classList.remove('active')
        p.classList.add('active')
        prev = idx
    }
})