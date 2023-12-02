import React, { useState, useEffect } from "react";
import Detail from "../Routes/Detail";
import { Link, NavLink } from "react-router-dom";

const Card = ({ userId }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUser();
  }, [userId]);

  const addFav = () => {
    console.log('addFav called');
    if (user) {
      console.log('user exists', user);
      const FavCard = { name: user.name, username: user.username, id: user.id };
      const FavCards = JSON.parse(localStorage.getItem("FavCards")) || [];
      FavCards.push(FavCard);
      localStorage.setItem("FavCards", JSON.stringify(FavCards));
    } else {
      console.log('user does not exist');
    }
  };

  return (
    <div className="card">
      {user ? (
        <>
          <img
            src="https://cdn-icons-png.flaticon.com/512/194/194918.png"
            alt="Icon"
          />
          <NavLink to={`/detail/${userId}`}>
            <h2>{user.name}</h2>
          </NavLink>
          <h3>{user.username}</h3>
          <h4>{user.id}</h4>
          <button className="FavButton" onClick={addFav}>
            Favoritos
          </button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Card;
