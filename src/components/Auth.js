import classes from './Auth.module.css';
import { useDispatch} from 'react-redux';
import {authActions} from '../BL/store/Auth-Slice';
import { useRef,useState } from 'react';
import UserService from '../BL/api';
import { useNavigate } from 'react-router-dom';
import { Formik,Form,Field } from 'formik';
import * as Yup from 'yup';
import Loader from './Loader';
const Auth = () => {
  const userService = new UserService();
  const formikRef = useRef();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const formikProps = {
    initialValues: {
      email: '',
      password: '',
    },
    
    validationSchema: Yup.object().shape({
      email: Yup.string().email('Invalid email address')
      .required('Email is required'),
      password: Yup.string().min(8, 'Password must be at least 6 characters')
      .required('Password is required'),
    }),
    onSubmit: async (values) => {
      try{
        setLoading(true);
        let user =await userService.getUserFromServer(values);
        setLoading(false);
        navigate('/info');
        dispatch(authActions.login(user.data[0]));
      }catch(err){
        console.log(err);
      }
    },
  };


  return (
    <main className={classes.auth}>
      <section>
        <Formik {...formikProps} innerRef={formikRef}>
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit, 
          isSubmitting,isValidating }) => (
            <Form onSubmit={handleSubmit}>
             
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <Field name="email" type="email" />
          </div>
          {errors.email && 
          <label className={classes.error}>{errors.email}</label>
          }
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <Field type='password' name='password'/>
          </div>
          {errors.password &&
          <label className={classes.error}>{errors.password}</label>
          }
          <div>
            <button type="submit">
              {loading ? <><Loader/> Loading... </>: 'Login'}
              </button>
          </div>
        </Form>
          )}
        </Formik>
      </section>
    </main>
  );
};

export default Auth;
