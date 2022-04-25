var g = document.getElementsByName("genero")
var r = document.getElementById("resultado")
var bd = document.getElementById('body')
function verificar(){
    if(g[0].checked){
        r.innerText = "Você é um Homem"
        bd.style.background = "blue"
        bd.style.color = "white"
    }
    else if(g[1].checked){
         r.innerText = "Você é uma Mulher"
         bd.style.background = "#f44336"
    }
    else{
        r.innerText = "Prefiro não dizer"
        bd.style.background = "green"

    }
}
    function reset() {
        r.innerText=""
        g[0].checked = false
        g[1].checked = false
        g[2].checked = false
     
    }
