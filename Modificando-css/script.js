let h1 = $("h1")

//.ToggleClass() serve para adicionar uma classe caso não tenha, e retirar uma caso tenha
h1.click(()=>{
    h1.toggleClass("blue")
})

//.css nos permite modificar atributos do css, no primeiro parâmetro acessamos o atributo, e no segundo passamos o valor
$("h2").css("background-color","red")

//Podemos passar mais de um atributo usando o .css(), passando os elementos por assimilação de chave e valor
$("h3").css({"background-color":"yellow","color":"white"})