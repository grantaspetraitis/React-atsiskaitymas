import Form from "../components/Form";
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppContextProvider, { AppContext } from "../Context";
import toast from 'react-hot-toast';

const Login = () => {

    const { setLogin } = useContext(AppContext);

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

        const response = await fetch('https://autumn-delicate-wilderness.glitch.me/v1/auth/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        })
        if(response.ok){
            const json = await response.json();
            toast.success('Logged in successfully');
            setLogin({email: e.target.email.value, token: json.token})
            navigate('/');
        } else {
            toast.error('Failed to log in')
        }
    }

    return (
        <Form email={email} password={password} onSubmit={onSubmit} onChange={onChange} />
    );
}
 
export default Login;