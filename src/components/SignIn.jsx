import React from 'react'

const SignIn = (props) => {
  return (
    <div>
        <div className='account-container'>
          <img src={props.avatar} alt={props.firstname} />
          <h1>Bienvenue {props.firstname}</h1> 
        
                {/* <div>{props.firstname}</div> 
                <div>{props.lastname}</div>
                <div>{props.password}</div>
                <div>{props.email}</div>
                <div>{props.avatar}</div> */}
              
        </div>
    </div>
  )
}

export default SignIn