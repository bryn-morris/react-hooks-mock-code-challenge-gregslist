import React from "react";
import ListingCard from "./ListingCard";



function ListingsContainer({listingData}) {
  console.log(listingData)
  return (
    <main>
      <ul className="cards">
      {listingData.map(
         (listing) => { return <ListingCard {...listing} key = {listing.id}/>}
      )}
      </ul>
    </main>
  );
}

export default ListingsContainer;
