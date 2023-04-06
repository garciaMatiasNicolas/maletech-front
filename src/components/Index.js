import { Link } from 'react-router-dom'
import logo from '../maletechLogo.png'

const Index = () => {
    
    return (
        <div className='d-flex flex-column justify-content-evenly align-items-center App-background' style={{minHeight:'100vh'}}>
            <div className=''>
                <img id='logo' className='w-100 h-100' src={logo} />
            </div>
            <div>
                <h1 className='App-text text-white fs-3 text-center'>Toda la tecnología, en un solo lugar.</h1>
            </div>
            <div className='d-flex justify-content-evenly align-items-center flex-wrap w-100 gap-1'>
                <Link to={'/products'}>
                    <button className='App-button App-text p-3 mb-3 rounded'>
                        <div className='App-text text-white w-100'>¡Quiero comprar!</div>
                    </button>
                </Link>

                <Link to={'/log-in'}>
                    <button className='App-button App-text p-3 mb-3 rounded'>
                        <div className='App-text text-white w-100'>¡Quiero vender!</div>
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Index