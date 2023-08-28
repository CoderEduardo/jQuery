let caixa = $(".caixa")

caixa.width() //Retorna o valor somente do witdth
caixa.innerWidth() //Retorna o valor do width + padding
caixa.outerWidh()   //Retorna o valor do width + padding + borda
caixa.outerWidth(true)  //Retorna o valor do width + padding + borda + margin

/*Podemos passar valores e modificar o tamanho original dos elementos, exemplo: caixa.width(2000)*/

//teste