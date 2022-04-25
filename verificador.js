var n = document.getElementById("n")
var r = document.getElementById("resultado")

function verificar(){
    
    if(n.value % 2 === 0)
       r.innerHTML = "O número  " +  n.value + " é par"
    
    else{
        r.innerHTML = " O número  " + n.value + " é ímpar"
    }
}
