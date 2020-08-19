function iniciaPrograma() {
    let res = document.querySelector('.show-screen')
    let error = document.querySelector('.error')
    let numInput = document.querySelector('.num-input')
    if(numInput.value == 0) {
        res.innerHTML = ``
        alert('[ERRO!] Por favor, digite algum número maior que zero.')
        error.style.background = '#f00'
        error.style.color = '#fff'
        error.style.fontSize = '1vw'
        error.style.padding = '10px 50px'
        error.style.margin = '0 62px'
        error.style.border = '0'
        error.style.display = 'grid'
        error.style.gridTemplateColumns = '1fr'
        error.style.gridTemplateRows = '1fr'
        error.style.borderRadius = '2rem 1rem'
        error.innerHTML = `ERRO \u{26A0}`
    }else{
        error.innerHTML = ``
        error.style.background = ``
        let num = Number(numInput.value)
        let create_p = document.createElement('p')
        res.innerHTML = ``
        if(num >= 1 && num <= 100) {
            if(num % 3 == 0) {
                alert(`O número ${num} é multiplo de 3`)
                create_p.innerHTML = `Bora`
                res.appendChild(create_p)
            }
            if(num % 5 == 0) {
                alert(`O número ${num} é multiplo de 5`)
                create_p.innerHTML = `Dale`
                res.appendChild(create_p)
            }
            if(num % 5 == 0 && num % 3 == 0) {
                alert(`O número ${num} é multiplo de 3 e 5`)
                create_p.innerHTML = `Bora Dale Javascript`
                res.appendChild(create_p)
            }
            if(num % 5 != 0 && num % 3 != 0) {
                error.style.width = '72%'
                error.style.background = '#f00'
                error.style.color = '#fff'
                error.style.padding = '10px 50px'
                error.style.margin = '50px 62px'
                error.style.border = '0'
                error.style.borderRadius = '2rem 1rem'
                error.style.fontSize = '1vw'
                error.innerHTML = `[ERRO!] Não será posível mostrar os multiplos do número ${num}.
                Este número não é multiplo nem de 3 e nem de 5 \u{26A0}`
            }
        }else{
            alert(`Informação inválida. Acesso negado \u{26A0}`)
            error.style.background = '#f00'
            error.style.color = '#fff'
            error.style.fontSize = '1vw'
            error.style.padding = '10px 50px'
            error.style.margin = '50px 62px'
            error.style.border = '0'
            error.style.borderRadius = '2rem 1rem'
            error.innerHTML = `ERRO no sistema. \u{26A0}`
        }
    }
}