function exibirDados(event){
    event.preventDefault()
  let email = document.getElementById("campo-senha").value;
  let senha = document.getElementById("campo-email").value;
   console.log("Email capturado:",email);
   console.log("Senha capturado:",senha);
}