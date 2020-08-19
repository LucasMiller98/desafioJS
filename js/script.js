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
        document.getElementById('error').style.margin = '25px 0'
        document.getElementById('error').style.textAlign = 'center'
        document.getElementById('error').style.display = 'flex'
        document.getElementById('error').style.flexDirection = 'row'
        error.innerHTML = `Erro no sistem.Por favor, digite um número entre 1 e 100.`
    }else{
        document.getElementById('error').style.background = ''
        document.getElementById('error').style.color = ''
        document.getElementById('error').style.width = ''
        document.getElementById('error').style.padding = ''
        document.getElementById('error').style.borderRadius = ''
        document.getElementById('error').style.margin = ''
        document.getElementById('error').style.textAlign = ''
        document.getElementById('error').style.display = ''
        document.getElementById('error').style.flexDirection = ''
        error.innerHTML = `` 
        let numInput = Number(inputNumber.value)
        // accountant -> contador
        for(var accountant = numInput; accountant <= 100; accountant++) {
            let create_op = document.createElement('option')
            create_op.innerText = `${accountant}`
            res.appendChild(create_op)
        }
    } 
}