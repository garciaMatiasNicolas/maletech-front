import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Categories from "../navbar/Categories"
import Navbar from "../navbar/Navbar"
import ProductCard from "./ProductCard"

const Main = () => {

  const [data, setData] = useState([])

  const url = "http://localhost:8080/products";

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => setData(data))
  }, [])


  return (
    <div>
      <Navbar/>
      
      <Categories/>

      <div>
        {data.map(el => 
          <Link key={el._id} to={`/products/item/${el._id}`}>
            <ProductCard {...el} /> 
          </Link>
        )}
      </div>
    </div>
  )
}

export default Main