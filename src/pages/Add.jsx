import { useState, useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context";

const Add = () => {
    const { login } = useContext(AppContext);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: '',
        description: ''
    });

    const { title, description } = formData;

    const onChange = e => {
        setFormData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const skillData = {
            title: e.target.title.value,
            description: e.target.description.value
        }

        const response = await fetch('https://autumn-delicate-wilderness.glitch.me/v1/content/skills', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${login.token}`
            },
            body: JSON.stringify(skillData)
        })
        if(response.ok){
            toast.success('Added skill successfully');
            navigate('/');
        } else {
            toast.error('There was an error');
        }
    }

    return (
        <form className="form" onSubmit={onSubmit}>
            <div className="form-element">
                <input placeholder="Skill title" type="text" name="title" value={title} className="input" onChange={onChange} />
            </div>
            <div className="form-element">
                <textarea placeholder="Description" name="description" value={description} className="input" onChange={onChange} ></textarea>
            </div>
            <div className="form-element">
                <button className="btn">Submit</button>
            </div>
        </form>
    );
}

export default Add;