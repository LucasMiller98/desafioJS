function iniciaPrograma() {
    let res = document.querySelector('.show-screen')
    let error = document.querySelector('.error')
    let numInput = document.querySelector('.num-input')
    if(numInput.value == 0) {
        alert('[ERRO!] Por favor, digite algum número maior que zero.')
        error.style.background = '#f00'
        error.style.color = '#fff'
        error.style.fontSize = '1vw'
        error.style.padding = '10px 50px'
        error.style.margin = '0 62px'
        error.style.border = '0'
        error.style.borderRadius = '2rem 1rem'
        error.innerHTML = `ERRO \u{26A0}`
    }else{
        error.innerHTML = ``
        error.style.background = ""
        let multiplo = Number(numInput.value) 
        res.innerHTML = ""
        if(multiplo > 100) {
            error.style.background = '#f00'
            error.style.color = '#fff'
            error.style.fontSize = '1vw'
            error.style.width = '20%'
            error.style.padding = '10px 50px'
            error.style.margin = '0 62px'
            error.style.border = '0'
            error.style.borderRadius = '2rem 1rem'
            error.innerHTML = `ERRO \u{26A0}`
            res.innerHTML = `Acesso negado\u{26A0}`
        }else{
            for(var contador = 1; contador <= 10; contador++) {
                let create_p = document.createElement('p')
                if(multiplo % 3 == 0) { 
                    create_p.innerHTML += "Bora"
                    res.appendChild(create_p)
                }
                if(multiplo % 5 == 0) {
                    create_p.innerHTML += "Dale"
                    res.appendChild(create_p)
                }
                if(multiplo % 3 == 0 && multiplo % 5 == 0) {
                    create_p.innerHTML += "Javascript"
                    res.appendChild(create_p)
                }
                if(multiplo % 3 != 0 && multiplo % 5 != 0) {
                    error.style.width = '72%'
                    error.style.background = '#f00'
                    error.style.color = '#fff'
                    error.style.fontSize = '1vw'
                    error.style.padding = '10px 50px'
                    error.style.margin = '0 62px'
                    error.style.border = '0'
                    error.style.borderRadius = '2rem 1rem'
                    error.innerHTML = `[ERRO!] Não será posível mostrar os multiplos do número ${multiplo}.
                    Este número não é multiplo nem de 3 e nem de 5 \u{26A0}`
                }
            }
        }
    }
}