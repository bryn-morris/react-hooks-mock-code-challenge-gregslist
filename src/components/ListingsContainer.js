import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listingData, handleDelete }) {

  return (
    <main>
      <ul className="cards">
        {listingData.map((listing) => {
          return <ListingCard {...listing} key={listing.description} iD={listing.id} handleDelete = {handleDelete} />;
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
