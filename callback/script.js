$(".vermelho").hide()

function callback(){
    $(".vermelho").show(2000,callback)
}

$("#botao").click(()=>{
    $(".verde").hide(2000,callback)
})

/*Uma função de callback, é usado quando queremos executar uma função somente depois de um evento ou depois de uma propria função, ela é muito importente
pois só será executada depois do tempo exato da finalização de outro evento*/