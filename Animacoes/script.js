$("#mudar").click(()=>{
    $(".quadrado").fadeOut()
})

/*
    Temos vários exemplos de animações
.fadeOut() faz com que o elemento suma em um determinado tempo
.fadeIn() faz com que o elemento apareça em um determinado tempo
.fadeToggle() faz com que o elemento apareça e despareça em um determinado tempo
.fadeTo(3000,0.5) faz o mesmo que os outros fades, só que ele consegue passar o tempo em ms no primeiro parâmetro, e a porcentagem que ele vai ocupar 
.slideDown() desliza o objeto para baixo
.slideUp() desliza o objeto para cima
.animate({width:500}) faz com que o elemento sofra uma animação de acordo com os parâmetros passados
.stop() faz com que a animção pare
*/