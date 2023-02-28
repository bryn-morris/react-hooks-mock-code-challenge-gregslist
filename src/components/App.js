import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listingData, setListingData] = useState([])

  useEffect(()=>{

    fetch("http://localhost:6001/listings")
      .then(response => response.json())
      .then(listDataArray => setListingData(listDataArray))

  }, [])

  function handleDelete (container) {

    console.log(container)

  }

  useEffect(()=>{},[])

  return (
    <div className="app">
      <Header />
      <ListingsContainer listingData = {listingData} handleDelete = {handleDelete}/>
    </div>
  );
}




// PseudoCoding
// setup useState to set state for fetch data (our listings) -- 
// useEffect -> Listings container, fetch from our http://localhost:6001
// Map those to listing cards

export default App;
