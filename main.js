function encurtar(){
    var linkval = document.getElementById("link").value; // tomar valor do input
    var res = document.getElementById("res") // div onde o resultado vai ser mostrado
    // usar API do PHP tranformando em json
    $.getJSON( "https://is.gd/create.php?callback=?", {
        url: linkval,
        format: "json"
    }).done(function(data){
        // encurtar o valor dado
        var newlink = data.shorturl;
        link = "Sua URL encurtada: "+"<a href="+newlink+">"+newlink+"</a>";
        // mostrar o resultado
        res.innerHTML =link ;
        newlink.select();
        document.execCommand("copy");
        // caso der erro
        if(newlink !== undefined){
            res.innerText = "Erro ao encurtar URL da uma olhada no link"
        }

    });
}