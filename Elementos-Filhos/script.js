//Uma forma de selecionar elementos filhos de um elemento
let lista1 = $("#lista1")
lista1.find(".item2").hide();

//Uma forma de selecionar todos os elementos filhos
let lista2 = $("#lista2")
lista2.children().fadeOut()

/*
    A grande diferença entre o .find e .children, é que o find consegue buscar todos elementos dentro de outro, já o children busca apenas os elementos
    filhos
*/
