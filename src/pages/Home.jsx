import React, {useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router";

const Home = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  async function getUsers() {
  
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/users")
    setUsers(data);
  }


  useEffect(() => {
    getUsers();
  }, []);

  return (

    <div className="container">
      <div className="row">
        <div className="user-list">
      {users.map(users) => (
        <div className="user" key={users.id} onClick={() => navigate(`user.id`)}>
            <div className="user-card">
              <div className="user-card__container">
                <h3>{users.name}</h3>
                <p>
                  <b>Email:</b> {users.email}
                </p>
                <p>
                  <b>Phone:</b> {users.phone}
                </p>
                <p>
                  <b>Website:</b>
                  {users.website}
                </p>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
