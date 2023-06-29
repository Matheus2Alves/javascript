window.onload = function() {
    
    let verificar = document.querySelector('input#send')
    verificar.addEventListener('click', function() {
        let ano = document.querySelector('input#year1')
        let data = new Date()
        let anoAtual = data.getFullYear()
        if(ano.value.length == '' || anoAtual < ano.value) {
            window.alert('data inválida')
        } else {
            let sexo = document.getElementsByName('sex')
            let selecionado = false
            for (let i = 0; i < sexo.length; i++)
                if(sexo[i].checked) {
                    selecionado = true
                    break
                }
            if(selecionado) {
                let idade = anoAtual - ano.value
                let img = document.querySelector('img#ilustracao')
                let res = document.querySelector('p#resultado')
                //switch to verify if is woman or men
                switch (true) {
                    case sexo[0].checked: 
                        if(idade < 4) {
                            img.src = './imagens/bebeh.jpg'
                            res.innerHTML = `é um bebê e a idade é ${idade}`
                            document.body.style.backgroundColor = 'red'
                        } else if(idade < 12) {
                            img.src = './imagens/crianca_homem.jpg'
                            res.innerHTML = `é uma criança e a idade é ${idade}`
                            document.body.style.backgroundColor = 'orange'
                        } else if (idade < 18) {
                            img.src = './imagens/adolescente_homem.jpg'
                            res.innerHTML = `é um adolescente e a idade é ${idade}`
                            document.body.style.backgroundColor = 'blue'
                        } else if (idade < 60) {
                            img.src = './imagens/adulto_homem.webp'
                            res.innerHTML = `é um adulto e a idade é ${idade}`
                            document.body.style.backgroundColor = 'brown'
                        } else if (idade < 100) {
                            img.src = './imagens/idoso_homem.jpg'
                            res.innerHTML = `é um idoso e a idade é ${idade}`
                            document.body.style.backgroundColor = 'pink'
                        } else {
                            img.src = './imagens/interrogação.webp'
                            res.innerHTML = `VOCÊ É IMORTAL CARA ${idade}`
                            document.body.style.backgroundColor = 'purple'
                        }
                        break
                    case sexo[1].checked:
                        if(idade < 4) {
                            img.src = './imagens/bebem.jpg'
                            res.innerHTML = `é uma bebê e a idade é ${idade}`
                            document.body.style.backgroundColor = 'red'
                        } else if(idade < 12) {
                            img.src = './imagens/crianca_mulher.jpg'
                            res.innerHTML = `é uma criança e a idade é ${idade}`
                            document.body.style.backgroundColor = 'orange'
                        } else if (idade < 18) {
                            img.src = './imagens/adolescente_mulher.jpg'
                            res.innerHTML = `é uma adolescente e a idade é ${idade}`
                            document.body.style.backgroundColor = 'blue'
                        } else if (idade < 60) {
                            img.src = './imagens/adulta_mulher.jpg'
                            res.innerHTML = `é uma adulta e a idade é ${idade}`
                            document.body.style.backgroundColor = 'brown'
                        } else if (idade < 100) {
                            img.src = './imagens/idoso_mulher.jpg'
                            res.innerHTML = `é uma idosa e a idade é ${idade}`
                            document.body.style.backgroundColor = 'pink'
                        } else {
                            img.src = './imagens/interrogação.webp'
                            res.innerHTML = `VOCÊ É IMORTAL CARA ${idade}`
                            document.body.style.backgroundColor = 'purple'
                        }
                        break
                }
            } else {
                window.alert('selecione o gênero da pessoa')
            }

        }
    })
    

}