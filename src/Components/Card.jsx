import React, { useState, useEffect } from "react";


const Card = ({ userId }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUser();
  }, [userId]);

  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
    if (user) {
      const FavCard = { name: user.name, username: user.username, id: user.id };
      const FavCards = JSON.parse(localStorage.getItem("FavCards")) || [];
      FavCards.push(FavCard);
      localStorage.setItem("FavCards", JSON.stringify(FavCards));
    }
  };

  return (
    <div className="card">
      {user ? (
        <>
          <img src="https://cdn-icons-png.flaticon.com/512/194/194918.png" alt="Icon" />
          <h2>{user.name}</h2>
          <h3>{user.username}</h3>
          <h4>{user.id}</h4>
          <button onClick={addFav} className="favButton">Add fav</button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Card;
