function verificar(){
  var data = new Date()  
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.getElementById('res')
  if (fano.Value == 0 || fano.value > ano){
    window.alert('[erro] Verifique os dados e tente novamente')
  }else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var gênero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex [0].checked){
        gênero = 'Homem'
        if (idade >=0 && idade < 10){
            //criança
        }
        else if (idade < 21){
            //Jovem
        }
        else if (idade < 50){
            //Adulto
            img.setAttribute('src','homem.jpeg')
        }
        else {
            //Idoso
        }
    } else if (fsex [1].checked){
        gênero = 'Mulher'
        if (idade >=0 && idade < 10){
            //criança
            img.setAttribute('src','menina.jpeg')
        }
        else if (idade < 21){
            //Jovem
        }
        else if (idade < 50){
            //Adulto
        }
        else {
            //Idoso
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
    
  }
}