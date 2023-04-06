import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../navbar/Navbar'
import DataProfile from './DataProfile';

const Profile = () => {

  const [user, setUser] = useState([]);

  const {id: userId } = useParams();
  
  const url = `http://localhost:8080/user/${userId}`;

  const fetchData = ()=>{
    fetch(url)
    .then(res => res.json())
    .then(data => {
      return setUser(data)
    })
  }

  useEffect(() => {
    fetchData();
  }, []);
  

  return (
    <div  style={{ backgroundColor: '#eee', minHeight:'100vh'}}>
      <Navbar/>

      <div className='d-flex justify-content-bewteen flex-column'>
        {user.map(e=> <DataProfile {...e} key={e._id}/>)}  
      </div>

    </div>
  )
}

export default Profile