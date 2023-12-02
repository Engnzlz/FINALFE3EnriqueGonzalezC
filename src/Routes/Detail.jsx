import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useAppContext } from "../Components/utils/global.context"; 



const Detail = () => {

  const { state } = useAppContext();
  const themeClass = state.theme ? "dark" : "light";


  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUser();
  }, [id]);

  return (
    <div className="detail">
      {user ? (
        <>
          <Navbar />
          
          <div className="detailCard">
          <img src="https://cdn-icons-png.flaticon.com/512/194/194918.png" alt="Icon"/>
          <h2>{user.name}</h2>
          <p>{user.username}</p>
          <p>{user.email}</p>
          <p>{user.phone}</p>
          <p>{user.website}</p>
          </div>


          <Footer />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Detail;
