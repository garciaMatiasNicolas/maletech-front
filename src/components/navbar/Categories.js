import { MDBIcon } from "mdb-react-ui-kit"
import { Link } from "react-router-dom"

const Categories = () => {
  return (
    <div className="border-bottom">
     <nav className="navbar navbar-expand-md bg-light">
        <div className="container-fluid  d-flex justify-content-end">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span><MDBIcon fas icon="bars" /></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-around w-100">
                    <li className="nav-item App-title fs-5">Comercios</li>
                    <li className="nav-item App-title fs-5">Usados</li>
                    <li className="nav-item dropdown">
                        <a className="App-title fs-5  dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Categorias</a>
                        <ul className="dropdown-menu p-4" style={{background:'rgb(0, 0, 29)'}}>
                            <li className="me-5 mb-2"><a className="App-text fs-6 text-white">Electrodomésticos</a></li>
                            <li className="me-5 mb-2"><a className="App-text fs-6 text-white">Smartphones</a></li>
                            <li className="me-5 mb-2"><a className="App-text fs-6 text-white">Televisores</a></li>
                            <li className="me-5 mb-2"><a className="App-text fs-6 text-white">PC y Gaming</a></li>
                            <li className="me-5 mb-2"><a className="App-text fs-6 text-white">Accesorios</a></li>
                        </ul>
                    </li>
                    <Link to={'/sell'}><li className="nav-item App-title fs-5">¡Quiero vender!</li></Link>
                </ul>
            </div>
        </div>
        </nav>
    </div>
  )
}

export default Categories