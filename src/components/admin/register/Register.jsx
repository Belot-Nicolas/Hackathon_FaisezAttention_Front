import { useFormik } from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useUser } from '../../../contexts/UserProvider';
import './Register.css'

const Register = () => {
  const navigator = useNavigate();
  const [error, setError] = useState('');
  const { setUser } = useUser();

  const formik = useFormik({
    initialValues: {
      firstname:'',
      lastname:'',
      password:'',
      email: '',
      avatar: '',
      role:''
    },
    validateOnChange: false,
    validate: (values) => {
      const errors = {};

      if (!values.firstname) {
        errors.firstname = 'Required';
      }
      if (!values.lastname) {
        errors.lastname = 'Required';
      }
      if (!values.password) {
        errors.password = 'Required';
      }

      if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }

      if (!values.avatar) {
        errors.avatar = 'Required';
      }
      if (!values.role) {
        errors.role = 'Required';
      }

      return errors;
    },
    onSubmit: (values) => {
      axios
        .post(`${process.env.REACT_APP_API_URL}/users/`, values)
        .then(({ data: { credential } }) => {
          setUser({
            token: credential,
          });
          navigator('/login');
        })
        .catch((err) => {
          setError(err.response.data.message);
        });
    },
  });

  return (
    <div className="Register">
      <h1 className='register-title'>Bienvenue dans votre compte administrateur</h1>
      <h2 className='new-player'>Enregistrez un nouveau joueur</h2>
      <p className="error">{error}</p>
      <form onSubmit={formik.handleSubmit}>
        <div className='account-container'>
          <label className='firstname' htmlFor="firstname">
              Prénom
              {formik.errors.firstname ? <div className="error">{formik.errors. firstname}</div> : null}
              <br />
              <input className='firstname-container'
                id=" firstname"
                name="firstname"
                type="firstname"
                onChange={formik.handleChange}
                value={formik.values.firstname}
              />
            </label>

            <label className='lastname' htmlFor="lastname">
              Nom de Famille
              {formik.errors.lastname ? <div className="error">{formik.errors.lastname}</div> : null}
              <br />
              <input className='lastname-container'
                id="lastname"
                name="lastname"
                type="lastname"
                onChange={formik.handleChange}
                value={formik.values.lastname}
              />
            </label>

            <label className='password' htmlFor="password">
              Mot de passe
              {formik.errors.password ? <div className="error">{formik.errors.password}</div> : null}
              <br />
              <input className='password-container'
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
            </label>

            <label className='email' htmlFor="email">
              Email
              {formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
              <br />
              <input className='email-container'
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </label>
              
            <label className='avatar' htmlFor="avatar">
              Avatar
              {formik.errors.avatar ? <div className="error">{formik.errors.avatar}</div> : null}
              <br />
              <input className='avatar-container'
                id="avatar"
                name="avatar"
                type="avatar"
                onChange={formik.handleChange}
                value={formik.values.avatar}
              />
            </label>

          
            <label className='role' htmlFor="role">
             Role
              {formik.errors.role ? <div className="error">{formik.errors.role}</div> : null}
              <br />
              <input className='role-container'
                id="role"
                name="role"
                type="role"
                onChange={formik.handleChange}
                value={formik.values.role}
              />
            </label>
        </div>
        <button className='register-btn' type="submit">Soumettre</button>
      </form>
    </div>
  );
};
  
export default Register;