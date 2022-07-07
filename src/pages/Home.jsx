import { AppContext } from "../Context";
import { useContext, useEffect } from 'react';


const Home = () => {

    const { login } = useContext(AppContext);
    

    const fetchData = async () => {
        const response = await fetch('https://autumn-delicate-wilderness.glitch.me/v1/content/skills', {
            headers: {
                "Authorization": `Bearer ${login.token}`
            }
        });
        const json = await response.json();
    }

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <>
            {login && login.email}
        </>
    );
}

export default Home;