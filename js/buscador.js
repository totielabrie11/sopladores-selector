//funcion constructora -> para caputrar los datos de la seleccion
function capturar() {
  function Selection(caudal, linea, modelo, presion) {
    this.nombre = caudal;
    this.linea = linea;
    this.modelo = modelo;
    this.modelo = presion;
    
    //this.foto = foto;
    //this.caracteristicas = caracteristicas;
    //this.id = id
  }
  let caudalCapturar = caudal;
  let lineaCapturar = linea;
  let modeloCapturar = modelo;
  let presionCapturar = presion;
 
 // let fotoCapturar = foto;
 //let caracteristicasCapturar = caracteristicas;
 //let idCapturar = id;

  resultado = new Selection(
    caudalCapturar,
    lineaCapturar,
    modeloCapturar,
    presionCapturar,
    //fotoCapturar,
    //caracteristicasCapturar,
    //idCapturar
  );

  arraySelection = [];
  arraySelection.push(resultado);
}

const PintarDom = () => {
  resultadoSelector.innerHTML = "";

  arraySelection = JSON.parse(localStorage.getItem("resultado"));
  console.log(arrayDeConsultas); // no importa el null por que entra igual con el if;

  if (arrayDeConsultas === null) {
    arraySelection = [];
  } else {
    if (linea === null) {
      $("#resultadoSelector")
        .fadeIn()
        .fadeToggle(7000)
        .html(
          '<div class="alert alert-danger float-left mt-4" role="alert">SU BUSQUEDA NO OBTIENE RESULTADO, DEBIDO A QUE LOS PARAMETROS "CAUDAL" SON DEMASIADO ALTOS</div>'
        );
      return;
    } else
      arraySelection.forEach((resultado) => {
        $("#resultadoSelector")
          .slideToggle()
          .slideDown(2500)
          .html(
            `      
            <div class="mt-3 p-1">
                <div id="errorBusqueda" class="alert alert-success" role="alert">
                    <table class="table" id="tabla">
                      
                        <hr>
                            <ul>
                                <li>${tipoEquipo}</li>
                                <li>${modelo}</li>
                                <li>${caudal}</li>
                                <li>${presion}</li>
                            </ul>
                            
                            <hr>
                            <section class="d-flex justify-content-between" style="height: 20rem;">
                                <div class="text-dark">
                                    <h5></h5>
                                </div>     
                                <div style="border-left:1px solid rgba(105, 103, 103, 0.322)"></div>
                                <div>
                                    <h4 class="text-center">DISEÑO</h4>
                                    <div class="d-flex justify-content-center">
                                        
                                    </div>
                                </div>
                            </section>
                        </div>
                    </table>    
                </div>
            </div>
                 `
          );
      });
  };
 }
//$(document).on("DOMContentLoaded", PintarDom)};
