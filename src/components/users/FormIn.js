import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const FormIn = () => {

    const [data, setData] = useState({email:"", password:""});

    const [response, setResponse] = useState({})

    const navigate = useNavigate();

    const returnData = () => {
        axios({
            method: 'post',
            data: data,
            withCredentials: true,
            url: 'http://localhost:8080/user/log-in'
        }) 
        .then( res => res.data.status === 'error' ?    Swal.fire({title: 'Error!', text: 'Contraseña y/o mail incorrectos', icon: 'error',confirmButtonText: 'Reintentar'}) : navigate(`/user/${res.data.userId}`))
    
    };

    const handleInput = (e)=>{
        const {name, value} = e.target;
        setData({...data, [name]:value});
    }
    
    const handleSubmit = (e)=>{
        e.preventDefault();
    }
        
    return (
        <div className="mt-5">
            <p className="App-text text-center fs-6">O utiliza tu cuenta Maletech para iniciar sesion</p>
            <form onSubmit={handleSubmit} className="d-flex flex-column justify-content-between align-items-center">
                <div className="form-floating mb-3 w-75">
                    <input type="text" className="form-control App-title fs-6" placeholder="email" name="email" autoComplete="off" value={data.username} onChange={handleInput}/>
                    <label className="App-title fs-6" htmlFor="email">Email</label>
                </div>
                <div className="form-floating w-75">
                    <input value={data.password} onChange={handleInput} type="password" className="form-control App-title fs-6" placeholder="password" name="password" autoComplete="off"/>
                    <label className="App-title fs-6" htmlFor="password">Contraseña</label>
                </div>
                <button onClick={returnData} type="button" className="App-button App-title fs-6 w-25 mt-3 rounded-pill">Entrar</button>
                <div className="d-flex justify-content-evenly mt-2">
                    <p className="App-text">No tienes cuenta?</p>
                    <Link className="ms-1 App-title fs-5 text-info" to={'/sign-up'}>Registarte</Link>
                </div>
            </form>
        </div>
    )
}

export default FormIn