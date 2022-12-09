

import React from 'react';
import cyberArk  from "./image/CyberArk_Features-image.png";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  
  MDBRow,
  MDBCol,
  
  MDBInput
}
from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export function LoginIntro(props) {        

    
  return (
    <MDBContainer  className="my-5">    

      <MDBCard style={{height:50+'rem'}} >
        <MDBRow  className='g-0'>

          <MDBCol md='6' style={{height: 800 +'px',backgroundSize:'cover',backgroundImage: "url(https://img.freepik.com/free-photo/digital-circle-circuit-blue-background-futuristic-technology_53876-124643.jpg?w=900&t=st=1670511764~exp=1670512364~hmac=d792af0bd16e28ef74f616935f28ea308999428cdc607aade66f9520f53623cc)"  }}>
         
          </MDBCol>

          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>
           
              <img src={cyberArk}
                 height="80"
                 style={{ margin: 'auto',
                    width: 100+'px',	
                    mt: 30+'px'}}
                 alt="MDB Logo"
                 loading="lazy" />
                <span style={{color:'#0548A8'}} className="h1 fw-bold mt-4 mb-0">CyberArk</span>
            
              <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Sign into your account</h5>

                <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"/>
                <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/>
              <Link to='/cpm'>
              <MDBBtn className="mb-4 px-5" color='dark'  size='lg'>Login</MDBBtn>
              </Link>
              <a className="small text-muted" href="#!">Forgot password?</a>            
             
            </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>
  );
}
