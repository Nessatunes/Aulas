function contar(){ 
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById ('res')

 if (ini.Value.length == 0 || fim.Value.length == 0 || passo.Value.length == 0){
    window.alert('Faltam dados!')
 }else {
    res.innerHTML = 'Contando!'
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
if (i < f) {
    for (let c = i; c <= f; c += p) {
        res.innerHTML +=`${c} \u{1F449}`  
    }
   
}else {
    for (let c = i; c >= f; c -= p) {
        res.innerHTML +=`${c} \u{1F449}`    
    }
}
res.innerHTML += `\u{1f3c1}` /* colocando a bandeirinha*/    
 } 
}