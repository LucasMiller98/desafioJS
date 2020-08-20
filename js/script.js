let btnButton = document.querySelector('button') 
let res = document.querySelector('#show-screen')
let error = document.querySelector('#error')
let inputNumber = document.querySelector('#input-number')
btnButton.onclick = function() {
    res.innerHTML = ``
    if(inputNumber.value == 0) {
        alert('ERRO')
        document.getElementById('error').style.background = '#f00'
        document.getElementById('error').style.color = '#fff'
        document.getElementById('error').style.width = '90%'
        document.getElementById('error').style.padding = '15px 80px'
        document.getElementById('error').style.borderRadius = '2rem 1rem'
        document.getElementById('error').style.marginTop = '30px'
        document.getElementById('error').style.textAlign = 'center'
        document.getElementById('error').style.display = 'flex'
        document.getElementById('error').style.flexDirection = 'row'
        error.innerHTML = `Erro no sistem.Por favor, digite um número entre 1 e 100.`
    }else{
        document.getElementById('error').style.background = ''
        error.innerHTML = `` 
        let numInput = Number(inputNumber.value)
        if(numInput > 100) {
            error.style.background = '#f00'
            error.style.color = '#fff'
            error.style.fontSize = '1vw'
            error.style.padding = '10px 50px'
            error.style.marginTop = '27px'
            error.style.border = '0'
            error.style.borderRadius = '2rem 1rem'
            error.innerHTML = `ERRO \u{26A0}`
            error.innerHTML = `Acesso negado\u{26A0}. Erro no sistem\u{26A0} Por favor, digite um número entre 1 e 100\u{26A0}`
        }else{
            // accountant -> contador
            for(var accountant = numInput; accountant <= 100; accountant++) {
                let create_op = document.createElement('option')
                create_op.innerText = `${accountant}`
                res.appendChild(create_op)
            }
        }
    } 
}