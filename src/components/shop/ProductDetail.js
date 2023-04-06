import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import Navbar from "../navbar/Navbar"

const ProductDetail = ({}) => {

  const {id: itemId} = useParams();

  const [product, setProduct] = useState([]);

  const url = `http://localhost:8080/products/${itemId}`;

  const fetchData = ()=>{
    fetch(url)
    .then(res => res.json())
    .then(data => {
      return setProduct(data)
    })
  }

  useEffect(() => {
    fetchData()
  }, [])
  

  return (

    <div>
      <Navbar/>
      {product.map(e =>
        <>
          <li>{e.name}</li>
          <p>{e.description}</p>
        </>
      )}
    </div>
  )
}

export default ProductDetail