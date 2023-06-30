let lista = $("ul")
let rect = $(".rect")

//Adicionando um elemento no final de uma lista, sem retirar os elementos que já estavam nela
lista.append("<li>Último Item novo</li>")

//Adicionando um elemento no começo de uma lista, sem retirar os elementos que já estavam nela
lista.prepend("<li>Primeiro Item novo</li>")

//Adicionando um elemento antes de determinada tag
rect.before("<div>Um texto antes do retângulo</div>")

//Adicionando um elemento depois de uma determinada tag
rect.after("<div>Um texto depois do retângulo</div>")

//é importante saber que caso queiremos adicionar outros argumentos, basta separ eles com uma virgúla,("<div>Um texto depois do retângulo</div>", 10)