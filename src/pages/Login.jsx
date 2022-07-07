import Form from "../components/Form";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    const navigate = useNavigate();

    const onChange = e => {
        setFormData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const userData = {
            email: e.target.email.value,
            password: e.target.password.value
        }

        await fetch('https://autumn-delicate-wilderness.glitch.me/v1/auth/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        })
    }

    return (
        <Form email={email} password={password} onSubmit={onSubmit} onChange={onChange} />
    );
}
 
export default Login;