import './Login.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import baseAxios, { METHOD_HTTP } from "../../Config/BaseAxios";

const Login = (props) => {
    const navigate = useNavigate();

    const validation = Yup.object().shape({
        username: Yup.string()
            .required('Username is required')
            // .matches('/^[a-zA-Z0-9]+$/', 'Invalid username')
            .max(16, 'Too Long!'),
        password: Yup.string()
            .required('Password is required'),
    });

    const handleSubmit = async (values) => {
        try {
            const data = await baseAxios(METHOD_HTTP.POST, "/login", values);
            localStorage.setItem("token", data.token);
            console.log('data: ', data);
        } catch (e) {
            alert(e.message);
        }
    }

    return (
        <>
            <Formik
                initialValues={{
                    username: '',
                    password: '',
                }}
                validationSchema={validation}
                onSubmit={handleSubmit}
            >
                {
                    <div className="login-container">
                        <div className='header'>
                            Don't have an account yet?
                            <button className='btn btn-dark' onClick={() => navigate('/register')}>Sign up</button>
                        </div>
                        <div className='title col-4'>CodeGym-Blog</div>
                        <div className='welcome col-4'>Hello, who's this?</div>

                        <Form className='content-form col-4'>
                            <div className='form-group'>
                                <label htmlFor='username'>Username</label>
                                <Field
                                    className="form-control"
                                    type="text"
                                    name="username"
                                />
                                <ErrorMessage name='username' className='error-input' />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='password'>Password</label>
                                <Field
                                    className="form-control"
                                    type="password"
                                    name="password"
                                />
                                <ErrorMessage name='password' className='error-input' />
                            </div>
                            <span>Forgot password?</span>
                            <div >
                                <input className='input-button btn btn-dark' type='submit' value='Login to CodeGym Blog' />
                            </div>
                        </Form>
                    </div>
                }
            </Formik>
        </>
    );
}

export default Login