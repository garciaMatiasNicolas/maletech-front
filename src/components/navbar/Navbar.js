import { MDBIcon } from "mdb-react-ui-kit"
import { Link } from "react-router-dom"
import logo from '../../maletechLogo.png'

const Navbar = () => {
  return (
    <div className="w-100" >
        <nav className="navbar navbar-expand-lg" style={{background:'rgb(0, 0, 29)'}}>
            <div className=" d-flex justify-content-between align-items-center w-100">
                <Link to={'/products'} className="navbar-brand"> 
                    <img className="App-logo" src={logo} alt="Maletech"/>
                </Link>
                <div className= "w-100 mt-3">
                    <form className="d-flex justify-content-between bg-white App-form p-1" role="search">
                        <input className="App-input w-100" type="text" placeholder="Buscar productos..." aria-label="Search"/>
                        <button className="App-search border-start" type="submit"><MDBIcon fas icon="search" /></button>
                    </form>
                </div>
                <Link to={'/log-in'}>
                    <button className="App-search"><MDBIcon fas icon="user-circle" color="white" size="3x" /></button>
                </Link>
            </div>
        </nav>
    </div>
  )
}

export default Navbar