
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

    const continentes = ["AMERICA", "EUROPE", "ANTARTIDA", "AFRICA", "ASIA", "OCEANIA"];
    function verificarContinenteEnArray(continente, arrayDeContinentes) {
      return arrayDeContinentes.includes(continente)}
   
    function distanciaContinentes(){
      
      let primerContinente = prompt("Enter the continent you are at right now, (remember to write it down with upper letter case ):");
      let segundoContinente = prompt("Enter the continent you are travelling to (remember to write it down with upper letter case):");

      if (primerContinente !== null && primerContinente !== "" && segundoContinente !== null && segundoContinente !== "" && (verificarContinenteEnArray(primerContinente, continentes) && (verificarContinenteEnArray(segundoContinente, continentes)) && primerContinente!==segundoContinente)) {
          if (primerContinente==="AMERICA" && segundoContinente==="EUROPE" || primerContinente==="EUROPE" && segundoContinente=="AMERICA"){
           alert("You are close! Just 7715km approximately. Go check in despegar.com if you are looking for flight sales")}
          else if( primerContinente==="AMERICA" && segundoContinente==="AFRICA" || primerContinente==="AFRICA" && segundoContinente=="AMERICA"){
            alert("You are close! Just 9325 km approximately. Go check in despegar.com if you are looking for flight sales")}
          else if (primerContinente==="AMERICA" && segundoContinente==="ASIA" || primerContinente==="ASIA" && segundoContinente=="AMERICA"){
            alert("You are close! Just 8753 km approximately. Go check in despegar.com if you are looking for flight sales")}
          else if ( primerContinente==="AMERICA" && segundoContinente==="OCEANIA" || primerContinente==="OCEANIA" && segundoContinente=="AMERICA"){
          alert("You are close! Just 8753 km approximately. Go check in despegar.com if you are looking for flight sales")}
          else if (primerContinente==="AMERICA" && segundoContinente==="ANTARTIDA" || primerContinente==="ANTARTIDA" && segundoContinente=="AMERICA"){
            alert("You are close! Just 14600km km approximately. Go check in despegar.com if you are looking for flight sales")}

          
          else if (primerContinente==="EUROPE" && segundoContinente==="ANTARTIDA" || primerContinente==="ANTARTIDA" && segundoContinente=="EUROPE"){
            alert("You are close! Just 15650 km approximately. Go check in despegar.com if you are looking for flight sales")}
            else if (primerContinente==="EUROPE" && segundoContinente==="AFRICA" || primerContinente==="AFRICA" && segundoContinente=="EUROPE"){
              alert("You are close! Just 9000 km approximately. Go check in despegar.com if you are looking for flight sales")}
            else if (primerContinente==="EUROPE" && segundoContinente==="ASIA" || primerContinente==="ASIA" && segundoContinente=="EUROPE"){
               alert("You are close! Just 7924 km approximately. Go check in despegar.com if you are looking for flight sales")}

            else if (primerContinente==="EUROPE" && segundoContinente==="OCEANIA" || primerContinente==="OCEANIA" && segundoContinente=="EUROPE"){
              alert("You are close! Just 15415 km approximately. Go check in despegar.com if you are looking for flight sales")}
            else if (primerContinente==="AFRICA" && segundoContinente==="ASIA" || primerContinente==="ASIA" && segundoContinente=="AFRICA"){
                alert("You are close! Just 10860 km approximately. Go check in despegar.com if you are looking for flight sales")}
            else if (primerContinente==="AFRICA" && segundoContinente==="OCEANIA" || primerContinente==="OCEANIA" && segundoContinente=="AFRICA"){
                  alert("You are close! Just 11184 km approximately. Go check in despegar.com if you are looking for flight sales")}
            else if (primerContinente==="AFRICA" && segundoContinente==="ANTARTIDA" || primerContinente==="ANTARTIDA" && segundoContinente=="AFRICA"){
              alert("You are close! Just 9177 km approximately. Go check in despegar.com if you are looking for flight sales")}
            else if (primerContinente==="ASIA" && segundoContinente==="ANTARTIDA" || primerContinente==="ANTARTIDA" && segundoContinente=="ASIA"){
              alert("You are close! Just 13121 km approximately. Go check in despegar.com if you are looking for flight sales")}
            else if (primerContinente==="ASIA" && segundoContinente==="OCEANIA" || primerContinente==="OCEANIA" && segundoContinente=="ASIA"){
              alert("You are close! Just 7560 km approximately. Go check in despegar.com if you are looking for flight sales")}
            else if  (primerContinente==="ANTARTIDA" && segundoContinente==="OCEANIA" || primerContinente==="OCEANIA" && segundoContinente=="ANTARTIDA"){
              alert("You are close! Just 6685 km approximately. Go check in despegar.com if you are looking for flight sales")}
            }
            
            




            
          



          
      else {
          // Al menos uno de los países no fue ingresado correctamente
          alert("Please enter valid values for both countries. Remember to write them in upper letter case; your options are AMERICA, EUROPE, ANTARTIDA, AFRICA, ASIA and OCEANIA");
      }}
    
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

 