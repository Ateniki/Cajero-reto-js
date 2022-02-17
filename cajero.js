function login1(form){
    var user = document.getElementById("user1").innerHTML
    if(form.us.value=="Mali"){
        if(form.co.value=="123"){
            location="principal.html"
        }else{
            alert("Contraseña errónea")
        }
    }else{
        alert("Usuario erróneo")
    }
}

function login2(form){
    var user = document.getElementById("user2").innerHTML
    if(form.us.value=="Gera"){
        if(form.co.value=="456"){
            location="principal2.html"
        }else{
            alert("Contraseña errónea")
        }
    }else{
        alert("Usuario erróneo")
    }
}

function login3(form){
    var user = document.getElementById("user3").innerHTML
    if(form.us.value=="Maui"){
        if(form.co.value=="789"){
            location="principal3.html"
        }else{
            alert("Contraseña errónea")
        }
    }else{
        alert("Usuario erróneo")
    }
}





function formula1(){
    var cantidad = parseInt(document.getElementById("cant1").value)
    var saldo = parseInt(document.getElementById("s1").value)
    document.getElementById("s1").value =(saldo+cantidad)
}

function formula2(){
    var cantidad = parseInt(document.getElementById("cant2").value)
    var saldo = parseInt(document.getElementById("s1").value)
    document.getElementById("s1").value =(saldo-cantidad)
}

function restriction1(){
    var saldo = parseInt(document.getElementById("s1").value)
    if(saldo<50){
        alert("Tu saldo no puede ser menor a $50")
    }
}
