function addFilm() {
    var filme = document.getElementById("filme").value;
    if (filme.endsWith(".jpg")) {
        listarfilmesNaTela(filme)
    } else {
        console.error("Endereço de filme inválido.");
    }
    document.getElementById("filme").value = "";
}

function listarfilmesNaTela(filme) {
    console.log(filme);
    var novoFilme = "<img src=" + filme + ">";
    var elementoListaFilmes = document.getElementById("listaFilmes");
    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + novoFilme;
}

function addFilmToList(film) {
    if (filmList.includes(film)) {
        document.getElementById("listedFilm").innerHTML = "Esse filme ja foi adicionado!";
    } else {
        filmList.push(film);
        document.getElementById("listedFilm").innerHTML = "";
    }
}

function printList(listToPrint) {
    document.getElementById("listaFilmes").innerHTML = "";
    for (counter = 0; counter <= listToPrint.length; counter++) {
        document.getElementById("listaFilmes").innerHTML += "<img src=" + listToPrint[counter] + ">";
    }
}

var filmList = [];