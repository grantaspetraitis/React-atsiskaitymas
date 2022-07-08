import { AppContext } from "../Context";
import { useContext, useEffect, useState } from "react";
import Card from "../components/Card";

const Home = () => {
  const { login } = useContext(AppContext);
  const [loading, setLoading] = useState(true);
  const [skills, setSkills] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      "https://autumn-delicate-wilderness.glitch.me/v1/content/skills",
      {
        headers: {
          Authorization: `Bearer ${login.token}`
        }
      }
    );
    const json = await response.json();
    setLoading(false);
    setSkills(json);
  };

  useEffect(() => {
    if (login) {
      fetchData();
    }
  }, [login]);

  if (!login) return <p>You must be logged in to view this page.</p>;
  if (loading) return <h1>Loading</h1>;
  if (skills.length === 0) return <h1>No data yet</h1>;

  return skills.map((skill) => (
    <div style={{ display: "inline-block", padding: "50px" }}><Card title={skill.title} description={skill.description} key={skill.id} /></div>
  ));
};

export default Home;
