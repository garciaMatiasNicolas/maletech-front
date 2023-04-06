import Navbar from "../navbar/Navbar";
import Form from "./Form";


const SellContainer = () => {

    const fetchData = async ()=>{
        try {
            let request = await fetch("http://localhost:8080/user/log-out");
            let response = await request.json(); 
            console.log(response);
        } 
        catch(err) {
            console.log(err);
        }
    }

    return (
        <div className="mb-5">
            <Navbar/>
            
            <div className="mt-5 ms-4">
                <h2 className="App-title fs-4"> Publica tu articulo en Maletech! </h2>
            </div>

            <div className="container-fluid">
                <Form/>
            </div>

            <button onClick={fetchData} >Cerrar sesion</button>
        </div>
  )
}

export default SellContainer