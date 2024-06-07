let input1 = document.querySelector('.in1')
let input2 = document.querySelector('.in2')
let button = document.querySelector('.btn')
let p = document.querySelector('.p')

let users = [
    {
        userName: 'Nurmuhammad',
        passworsd: '!muhamejan.n',
        novigatePage: './nurmuhammad.html'
    },
    {
        userName: 'Amir',
        passworsd: '!turgun.a',
        novigatePage: './amir.html'
    },
    {
        userName: 'Abdulbory',
        passworsd: '!mahkam.a',
        novigatePage: './abdulbory.html'
    },
    {
        userName: 'Laziza',
        passworsd: '!mahkamova.l',
        novigatePage: './laziza.html'
    },
    {
        userName: 'Nodir',
        passworsd: '!bonnie.n',
        novigatePage: './nodir.html'
    },
]

button.addEventListener('click', (e) => {
    e.preventDefault()
    users.map((v) => {
        if (v.userName === input1.value && v.passworsd === input2.value) {
            window.location.href = v.novigatePage
        }
        else {
            let text = 'Неправильное имя или пароль'
            p.innerHTML = text
        }
    })
    input1.value = null
    input2.value = null
})