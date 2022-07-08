import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../components/Form';
import toast from 'react-hot-toast';

const Register = () => {

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

        const response = await fetch('https://autumn-delicate-wilderness.glitch.me/v1/auth/register', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        })
        if (response.ok) {
            toast.success('Registered successfully')
            navigate('/login')
        } else {
            toast.error('Registration failed')
        }
    }

    return (
        <>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <h1>Register</h1>
            </div>
            <Form email={email} password={password} onSubmit={onSubmit} onChange={onChange} />
        </>
    );
}

export default Register;