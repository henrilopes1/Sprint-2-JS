document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('a');
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function(e) {
            e.preventDefault();
            var targetSection = document.querySelector(this.getAttribute('href'));
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    }
});


function validarFormulario(){
    let nomeInput =  document.getElementById("nome").value
    let telInput = document.getElementById("telefone").value
    let emailInput = document.getElementById("email").value

    if(nomeInput == "" || telInput == "" || emailInput == ""){
        alert("Por favor, preencha todos os campos.")
    }else{
        alert("Seus dados foram registrados com sucesso.")
    }
}