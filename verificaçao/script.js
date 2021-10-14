function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    }else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        res.innerHTML = `Idade Calculada ${idade}`
        let gênero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'  
            if (idade >=0 && idade < 10) {
            img.setAttribute('src', 'image/bebe_h.jpg')  
            }else if (idade < 21) {
            img.setAttribute('src', 'image/jovem_h.jpg')   
            }else if (idade < 50) {
            img.setAttribute('src', 'image/adulto_h.jpg')    
            }else{
            img.setAttribute('src', 'image/idoso_h.jpg')    
            }                    
        }else if (fsex[1].checked) {
            gênero = 'Mulher' 
            if (idade >=0 && idade < 10) {
            img.setAttribute('src', 'image/bebe_m.png')    
            }else if (idade < 21) {
            img.setAttribute('src', 'image/jovem_m.png')    
            }else if (idade < 50) {
            img.setAttribute('src', 'image/adulto_m.jpg')    
            }else{
            img.setAttribute('src', 'image/idosa_m.jpg')    
            }             
        }
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
    
}