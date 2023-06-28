//Adicionando o evento de clicar
$(".titulo").click(()=>{
    console.log("click")
});

//Adicionando o evento de hover do mouse
$("h2").mouseenter(function () { 
    console.log("enter")
});

//Adicionando o evento de saida do mouse
$("h2").mouseleave(()=>{
    console.log("leave")
});

//Adicionando o evento de clique duplo
$("h2").dblclick(()=>{
    console.log("Double Click")
})