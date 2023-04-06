import logo from '../../maletechLogo.png'
import { MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import FormIn from './FormIn';

const LogIn = () => {
  return (
    <div>
      <div className="row w-100">
        <div className="col-12 col-md-4 d-flex justify-content-evenly flex-column align-items-center">
          <div className='w-100 d-flex justify-content-between flex-column align-items-center mt-5'>
            <h1 className='App-title fs-4 w-75 text-center'>Inicia Sesion</h1>
            <p className='App-text text-center fs-6'>Utiliza alguna de tus cuentas para iniciar sesion</p>
            <button className='m-1 w-75 border rounded d-flex justify-content-evenly align-items-center p-2' style={{ backgroundColor: 'white' }} type="button">
              <MDBIcon className='mt-1' size='2x' style={{color: '#dd4b39'}} fab icon='google-plus'/>
              <p className='App-title fs-5 m-0'>Google Ac</p>
            </button>
            <button className='m-1 w-75 border rounded d-flex justify-content-evenly align-items-center p-2' style={{ backgroundColor: 'white' }} type="button">
              <MDBIcon size='2x' className='mt-1' style={{color: '#3b5998'}} fab icon='facebook' />
              <p className='App-title fs-5 m-0'>Facebook</p>
            </button>
          </div>
          <FormIn/>
        </div>
        <div className="App-container col col-md-8" style={{minHeight:'100vh'}}>
          <Link to={'/'} >
            <div>
              <img id='logo' className='w-100 h-100' src={logo} />
            </div>
          </Link>
            <div>
                <h1 className='App-text text-white fs-3 text-center'>Toda la tecnología, en un solo lugar.</h1>
            </div>
        </div>
      </div>
    </div>
  )
}

export default LogIn