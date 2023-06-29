//Escrevendo um texto dentro de um h1
$(".btn").click(()=>{
    $("h1").text($("#caixa").val())
})

/*
    .text() pega o texto de um elemento, podendo passar por parâmetro outro texto
    .html() pega todo o conteúdo html de um elemento, podendo passar tags por parâmetro
    .val()  pega o valor de um elemento 
    .attr("name") pega um atributo específico e retorna ele, no caso ele pegou o name
*/