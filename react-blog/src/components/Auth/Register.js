import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import baseAxios, { METHOD_HTTP } from "../../Config/BaseAxios";

const Register = (props) => {
    const validation = Yup.object().shape({
        username: Yup.string()
            .required('Username is required'),
        password: Yup.string()
            .required('Password is required'),
        dob: Yup.string()
            .required('Date of birth is required')
    });

    const navigate = useNavigate();

    const handleSubmit = async (values) => {
        try {
            const data = await baseAxios(METHOD_HTTP.POST, "/register", values);
            console.log("Data", data);
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
                    dob: ''
                }}
                validationSchema={validation}
                onSubmit={handleSubmit}
            >
                {
                    <div className="login-container">
                        <div className='header'>
                            Already have an account?
                            <button className="btn btn-dark" onClick={() => navigate('/login')}>Sign in</button>
                        </div>
                        <div className='title col-4'>CodeGym-Blog Register</div>
                        <div className='welcome col-4'>Create an account?</div>

                        <Form className="content-form col-4">
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
                            <div className='form-group'>
                                <label htmlFor='dob'>Date of Birth</label>
                                <Field
                                    className="form-control"
                                    type="date"
                                    name="dob"
                                />
                                <ErrorMessage name='dob' className='error-input' />
                            </div>
                            <div>
                                <input className="input-button btn btn-dark" type='submit' value='Register an account' />
                            </div>
                        </Form>

                    </div>
                }
            </Formik>
        </>
    )
}

export default Register;