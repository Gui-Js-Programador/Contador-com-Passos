function contar(){
   var inicio = window.document.getElementById('txt1')
   var fim = window.document.getElementById('txt2')
   var passo = window.document.getElementById('txt3')
   var res = window.document.getElementById('res')
   if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    window.alert('ERRO... voce nao preencheu tudo')   
   }else{
    res.innerHTML = 'contando..... <br>'
    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value) 
    if(p == 0){
        window.alert('ERRO.. o numero 0 vai valer 1')
        p = 1
    }
    //contagem normal
   if(i < f)  {
   for(var c = i; c <= f; c += p) {
         res.innerHTML += ` ${c} \u{1F642}`  
    }
   //contagem regresiva
}else if( i > f){
    for(var c = i; c >= f; c -= p){
        res.innerHTML += ` ${c} \u{1F642}` 
    }
     

}
   

    }
}