import { useContext, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { Link } from "react-router-dom";
import { FetchContext } from "../context/Context";
import { MDBIcon } from 'mdb-react-ui-kit';

const Form = () => {

    const url = "http://localhost:8080/products";

    const [data, setData] = useState({  category:"", name: "", stock:"", description: "", price: ""});

    const {response, setResponse} = useContext( FetchContext );

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
            let res = await fetch(url, config);
            let json = await res.json();
            setResponse(json);
        } catch(err){
            console.error(err);
        }
        toast("Wow so easy!")
    };

    const handleInput = (e)=>{
        const {name, value} = e.target;
        setData({...data, [name]:value});
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit} className="row p-3">

           <div className="col-md-6 col-12">
                <select name="category" value={data.category} onChange={handleInput} className="form-select App-title fs-6">
                    <option className="App-title fs-6" selected>Selecciona una categoria</option>
                    <option className="App-title fs-6">Electrodomésticos</option>
                    <option className="App-title fs-6">Smartphones</option>
                    <option className="App-title fs-6">Televisores</option>
                    <option className="App-title fs-6">Pc y Gaming</option>
                    <option className="App-title fs-6">Accesorios</option>
                </select>

                <div className="form-floating mt-3">
                    <input type="text" className="form-control App-title fs-6" name="name" value={data.name} onChange={handleInput} placeholder="name" autoComplete="off"/>
                    <label htmlFor="name" className="App-title fs-6">Nombre del producto</label>
                </div>

                <div className="form-floating mt-3">
                    <input type="number" className="form-control App-title fs-6" name="stock" value={data.stock} onChange={handleInput} placeholder="stock" autoComplete="off"/>
                    <label htmlFor="stock" className="App-title fs-6">Cantidad de stock de tu producto</label>
                </div>

                <div className="form-floating mt-3">
                    <textarea style={{height:'150px'}} type="text" className="form-control App-title fs-6" name="description" placeholder="description" value={data.description} onChange={handleInput} autoComplete="off"/>
                    <label htmlFor="description" className="App-title fs-6">Breve descripción de tu producto</label>
                </div>

                <div className="form-floating mt-3">
                    <input type="number" className="form-control App-title fs-6" name="price" value={data.price} onChange={handleInput} placeholder="price" autoComplete="off"/>
                    <label  htmlFor="price" className="App-title fs-6">Precio</label>
                </div>
           </div>
            
            <div style={{border:'rgba(0, 0, 0, 0.13) 5px dashed'}} className="p-5 col-md-6 col-12 d-flex justify-content-center align-items-center">
                <MDBIcon size="5x" far icon="image" />
            </div>

            <button type="button" onClick={fetchData} className="App-button mt-5 w-25 p-2">Publicar</button>

            <Link to={`/products/item/${response._id}`}>
                <ToastContainer />
            </Link>

        </form>
    )
}

export default Form