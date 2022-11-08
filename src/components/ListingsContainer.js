import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";

const URL = "http://localhost:6001/listings";

function ListingsContainer({ searchText }) {
  const [listing, setListing] = useState([]);
  console.log(searchText === "");

  let filteredListings = listing.filter((list) =>
    list.description.includes(searchText)
  );

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setListing(data));
  }, []);
  return (
    <main>
      <ul className="cards">
        {filteredListings.map((list) => (
          <ListingCard
            key={list.id}
            description={list.description}
            image={list.image}
            location={list.location}
          />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
