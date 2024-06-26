import { Fragment } from "react"

function Header({cart}) {

// State derivado
const estaVacio = () => cart.length === 0 

// Entre el nombre del componente siendo fn y el return, podemos escribir código JS. Dentro del return de todos los componentes, se renderizará lo que se vea en pantalla y ENTRE el return y nombre de la función, podremos escribir código JS
// const name = " Franco"
  return (
    <>  
        <header className="py-5 header">
        <div className="container-xl">
          <div className="row justify-content-center justify-content-md-between">
            <div className="col-8 col-md-3">
              <a href="index.html">
                <img
                  className="img-fluid"
                  src="./public/img/logo.svg"
                  alt="imagen logo"
                />
              </a>
            </div>
            <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
              <div className="carrito">
                <img
                  className="img-fluid"
                  src="./public/img/carrito.png"
                  alt="imagen carrito"
                />

                <div id="carrito" className="bg-white p-3">
                  { estaVacio() ? (
                    <p className="text-center">El carrito esta vacio</p>
                  ):(
                      <table className="w-100 table">
                        <thead>
                          <tr>
                            <th>Imagen</th>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {/* Siempre que vayamos a iterar, por ejemplo a continuación utilizando un .map DEBEMOS utilizar una KEY unica para cada elemento */}
                          {cart.map( guitar => (
                              <tr key={guitar.id}>
                                <td>
                                  <img
                                    className="img-fluid"
                                    src={`img/${guitar.image}.jpg`}
                                    alt="imagen guitarra"
                                  />
                                </td>
                                <td>{guitar.name}</td>
                                <td className="fw-bold">{guitar.price}</td>
                                <td className="flex align-items-start gap-4">
                                  <button type="button" className="btn btn-dark">
                                    -
                                  </button>
                                  {guitar.cantidad}
                                  <button type="button" className="btn btn-dark">
                                    +
                                  </button>
                                </td>
                                <td>
                                  <button className="btn btn-danger" type="button">
                                    X
                                  </button>
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                     )}
                  <p className="text-end">
                    Total pagar: <span className="fw-bold">$899</span>
                  </p>
                  <button className="btn btn-dark w-100 mt-3 p-2">
                    Vaciar Carrito
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </> // También podemos usar la palabra fragments. Estos son como divs pero no crearemos muchos divs ya que no es buena práctica. 
  )
}

export default Header
