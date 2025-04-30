import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import heroesImage from '../../assets/heroes.png';
import heroes1 from '../../assets/heroes1.png'; 

const Login = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Email inválido').required('Email é obrigatório'),
    password: Yup.string().required('Senha é obrigatória'),
  });

  const handleSubmit = (values) => {
    console.log('Login:', values);
  };

  return (
    <div className="login-page">
      <div className="login-left">
        <h1 className="title">ESTANTE DE HEROIS</h1>
        <img src={heroesImage} alt="Heroes" className="heroes-image" />
      </div>
      <div className="auth-container">

        <h2>Bem-Vindo a ESTANTE DE HEROIS !</h2>
        <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="form-group">
              <Field name="email" type="email" placeholder="Email" className="form-control" />
              {errors.email && touched.email && <div className="error">{errors.email}</div>}
            </div>

            <div className="form-group">
              <Field name="password" type="password" placeholder="Senha" className="form-control" />
              {errors.password && touched.password && <div className="error">{errors.password}</div>}
            </div>

            <button type="submit" className="btn-submit">Login</button>
            <Link to="/forgot-password" className="forgot-password">Recuperar senha</Link>
          </Form>
        )}
      </Formik>
    </div>
  </div>
  );
};

export default Login;
