import React, { useState } from "react";

function ListingCard({ iD, description, image, location, handleDelete }) {
  const [favorited, setFavorited] = useState(false);

  const handleFavorite = () => {
    setFavorited((favorited) => !favorited);
  };

  function onDeleteClick (e) {
    handleDelete (e.target.value)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorited ? (
          <button
            onClick={handleFavorite}
            className="emoji-button favorite active"
          >
            ★
          </button>
        ) : (
          <button onClick={handleFavorite} className="emoji-button favorite">
            ☆
          </button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button 
        onClick={onDeleteClick}
        className="emoji-button delete" value = {iD}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
