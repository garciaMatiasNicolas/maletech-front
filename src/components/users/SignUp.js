import { useState } from "react";
import Navbar from "../navbar/Navbar";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const SignUp = () => {

  const [data, setData] = useState({type:"", fullname:"", email:"", password:"", identification: "", phone: "", location: "", adress: ""});

  const [id, setId] = useState({})

  const navigate = useNavigate();

  const fetchData = async () => {
    try{
      let config = {
        method: 'POST', 
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      };
      let request = await fetch("http://localhost:8080/user/sign-up", config);
      let response = await request.json();
      if(response.status === 'error'){
        Swal.fire({
          title: 'Error!',
          text: 'Ya existe un usuario registrado con ese mail',
          icon: 'error',
          confirmButtonText: 'Reintentar'
        });
      } else {
        setTimeout(() => {   
          navigate(`/log-in`);
        }, 4000);
        Swal.fire({
          title: 'Usted se ha registrado exitosamente',
          text: 'Redireccionandolo para que inicie sesión. Aguarde...',
          icon: 'success',
        });
      }
    } catch(err){
      console.error(err);
    }
  };

  const handleInput = (e)=>{
    const {name, value} = e.target;
    setData({...data, [name]:value});
  }
    
  const handleSubmit = (e)=>{
    e.preventDefault();
    fetchData();
  }

  return (
    <div style={{ backgroundColor: '#eee', minHeight:'100vh'}}>
      <Navbar/>

      <h2 className="App-title m-5 fs-4">Dejanos tus datos para crear tu cuenta</h2>

      <form onSubmit={handleSubmit} className="container-fluid card w-75">

        <div className="card-body">
            
            <div className="row">

              <div className="col-md-6 col-12">

                <select required name="type" value={data.type} onChange={handleInput} className="form-select App-title fs-6 mb-4" style={{padding:'0.9rem'}}>
                  <option className="App-title fs-6" selected>Tipo de vendedor *</option>
                  <option className="App-title fs-6">Comercio</option>
                  <option className="App-title fs-6">Particular</option>
                </select>

              </div>

              <div className="col-md-6 col-12 form-floating">

                <input required type="text" className="form-control App-text fs-6 mb-4" placeholder="fullname" name="fullname" autoComplete="off" value={data.fullname} onChange={handleInput}/>

                <label className="App-text fs-6 ms-2" htmlFor="fullname">{data.type === 'Comercio' ? 'Nombre del comercio *' : 'Nombre completo *'}</label>

              </div>

            </div>

            <div className="row">

              <div className="col-12 form-floating">

                <input required type="email" className="form-control App-text fs-6" placeholder="email" name="email" autoComplete="off" value={data.email} onChange={handleInput}/>

                <label className="App-text fs-6 ms-2" htmlFor="email">Email *</label>

              </div>  

            </div>

            <div className="row mt-4">
              
              <div className="col-12 form-floating">

                <input required type="password" className="form-control App-text fs-6" placeholder="password" name="password" autoComplete="off" value={data.password} onChange={handleInput}/>

                <label className="App-text fs-6 ms-2" htmlFor="password">Contraseña *</label>

              </div> 

            </div>

            <div className="row mt-4">

              <div className="col-md-6 col-12 form-floating">

                <input required type="text" className="form-control App-text fs-6 mb-4" placeholder="identification" name="identification" autoComplete="off" value={data.identification} onChange={handleInput}/>

                <label className="App-text fs-6 ms-2" htmlFor="identification">{data.type === 'Comercio' ? 'CUIT *' : 'DNI *'}</label>

              </div>

              <div className="col-md-6 col-12 form-floating">

                <input required type="number" className="form-control App-text fs-6 mb-4" placeholder="phone" name="phone" autoComplete="off" value={data.phone} onChange={handleInput}/>

                <label className="App-text fs-6 ms-2" htmlFor="phone">Celular *</label>

              </div>

            </div>

            <div className="row">

              <div className="col-md-6 col-12 form-floating">

                <input required type="text" className="form-control App-text fs-6 mb-4" placeholder="location" name="location" autoComplete="off" value={data.location} onChange={handleInput}/>

                <label className="App-text fs-6 ms-2" htmlFor="location">Provincia *</label>

              </div>

              <div className="col-md-6 col-12 form-floating">

                <input required type="text" className="form-control App-text fs-6 mb-4" placeholder="adress" name="adress" autoComplete="off" value={data.adress} onChange={handleInput}/>

                <label className="App-text fs-6 ms-2" htmlFor="adress">Direccion *</label>

              </div>

            </div>

          <button type="submit" style={{maxWidth:'40%'}} className="App-button App-title fs-6 rounded-pill">Crear</button>

        </div>

      </form>
    
    </div>

  )
}

export default SignUp