const url = 'https://api.whatsapp.com/send?phone=5521982897367&text=Chama%20na%20DM'
const btn = document.querySelector('#btn')

function open01(url) {
    const win = window.open(url, '_blank')
    win.focus()
}

btn.addEventListener('click', ()=>{
    open01(url)
})
