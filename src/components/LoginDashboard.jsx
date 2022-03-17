import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import axios from 'axios';
//j'appelle mon useContext
import { useUser } from '../contexts/UserProvider';
import './LoginDashboard.css'
import SignIn from './SignIn';
import panneauSolaire from '../assets/panneauSolaire.jpg'
import logoBlanc from '../assets/logoBlanc.png';



const LoginDashboard = (props) => {

  //gestion des erreurs (au départ il n'y en a pas)
  const [error, setError] = useState(null)
  //pour arriver sur ma page perso et rester dessus
  const navigator = useNavigate();
  //je change l'état de mon utilisateur, suite à ma connection (non connecte à connecté) : je vais donc appeller mon hook personnalisé dans le provider)
  const { setUser } = useUser();
  //je créé mon formulaire de validation, en précisant la valeur initial de mes objets
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    //on s'assure que les valeurs sont juste (ex: @)
    validateOnChange: false,
    //je créé mon schema de validation avec pour paramètre mes values : erreurs)
    validate: (values) => {
      const errors = {};

      if (!values.email) {
        error.email = 'Requis';

      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Email Invalide';

      } if (!values.password) {
        errors.password = 'Requis'
      }
      return errors;
    },
    //lors de l'envoi de mon formulaire je renvoie les valeurs indiquées : je vérifie mon BE
    onSubmit: (values) => {
      axios
        //j'appelle mon API et la route users (où est login?)
        .post(`${process.env.REACT_APP_API_URL}/users/login`, values)
        //je récupère (pour envoyer)les attributs propre à mon user: credentials se trouve dans le back
        .then(console.log(values))
        .then(({ data: { credentials, id_user } }) => {
          // quels attributs : qu'est ce que je vais envoyer une fois que l'utilisateur est connecté (j'attache le token)
          setUser({
            token: credentials, id_user: id_user
          });

          //je récupère mon navigator pour dire où le client se retrouve?
          navigator(`/game/${values.email}`)
        })
        //gestion de l'erreur: message se trouve  dans le back
        .catch(({ response: { data: { message } } }) => {
          setError(message);
        });
    }
  })



  return (

    <div className='dash_board'>
      <img className='Title' src={logoBlanc}/>
      <div >
        <img className='solar_panels' src={panneauSolaire} />
      </div>
      <div className='control_text'>
        <h1 className='title_login'>Le jeu de 7 erreurs</h1>
        <p className='error'>{error}</p>

        <div className='Login-Dashboard'>
          <form onSubmit={formik.handleSubmit}>
            <label className='user-login-container' htmlFor="email">EMAIL UTILISATEUR
              {formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}</label>
            <br />
            {/* to have an action after the change => onChange->event->the state action 'grace' of a value (here the email) */}
            {/* handleChange pour changer mes données */}
            <input className="login-container" type="email" name="email" id="email" onChange={formik.handleChange} value={formik.values.email}
              placeholder="Email" />

          <br />
          <div className='motdepasse'>
            <label className='user-password-container' htmlFor="password">
              <h2>MOT DE PASSE {formik.errors.password ? <div className="error">{formik.errors.password}</div> : null}</h2>
            </label>

          <br />

          <input className="password-container" type="password" name="password" id="password" onChange={formik.handleChange} value={formik.values.password}
            placeholder="Votre mot de passe" />

            <br />

            <button className='login-btn' type='submit'>Envoyer</button>
          </div>
          </form>
        </div>
      </div>



    </div>
  )
}

export default LoginDashboard