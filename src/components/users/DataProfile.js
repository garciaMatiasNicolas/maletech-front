import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage } from 'mdb-react-ui-kit';
import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
      
const DataProfile = ({fullname, email, phone, adress, location, type, identification}) => {

  const navigate = useNavigate()

  const logOut = async ()=>{
    try {
      const response = await axios({method: 'delete' , url:'http://localhost:8080/user/log-out', withCredentials:true});
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }   

  return (
    <section>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid />
                <p className="App-title fs-4 mb-4">{fullname}</p>
                <p className="App-title fs-5 mb-4">{`Vendedor: ${type}`}</p>
                <div className="d-flex justify-content-center align-items-center flex-column mb-2">
                  <button onClick={logOut} className="App-button App-title w-50 fs-6 mt-3 rounded-pill">Cerrar sesión</button> 
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText className="App-title fs-6">{type === 'Comercio' ? 'CUIT' : 'DNI'}</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="App-text">{identification}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText className="App-title fs-6">Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="App-text">{email}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText className="App-title fs-6">Telefono</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="App-text">{phone}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText className="App-title fs-6">Localizacion</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="App-text">{location}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText className="App-title fs-6">Direccion</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="App-text">{adress}</MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  )
}

export default DataProfile