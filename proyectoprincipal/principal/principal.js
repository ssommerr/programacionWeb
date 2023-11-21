
function solicitarEmail() {
    
    const email = prompt("Please enter your email address; we will contact you when the site is available:");

    
    if (email !== null && email !== "") {
      
        const mensaje = `Thank you for providing your email. We will contact you shortly.`;
        console.log(mensaje); 
        alert(mensaje)
        
    } else {
    
        const denuevo=  `Please try again entering characters`;
        console.log(denuevo);
        alert(denuevo)
    }
}
function botonhome() {
    alert("We are already on the main page!:)");

    
    }


    function mostrarCampoPais() {
        var countryInput = document.getElementById("countryInput");
        countryInput.style.display = "block";
      }
  
      function enviarPais() {
        var paisInput = document.getElementById("pais");
        var pais = paisInput.value;
        alert("If the information has been correctly submitted, you will be contacted soon");
        paisInput.value = "";
        
        var countryInput = document.getElementById("countryInput");
        countryInput.style.display = "none";
      }
    
      function mostrarCampo(inputId) {
        var inputContainer = document.getElementById(inputId);
        inputContainer.style.display = "block";
      }
  
      function enviarComentarios() {
        var comentariosInput = document.getElementById("comentarios");
        var comentarios = comentariosInput.value;

        comentariosInput.value = "";

        var comentariosContainer = document.getElementById("comentariosInput");
        comentariosContainer.style.display = "none";
      }

 