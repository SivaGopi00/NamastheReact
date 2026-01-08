import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  console.log(listOfRestaurants);

  useEffect(() => {
    fetchResData();
  }, []);

  const fetchResData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4875418&lng=78.3953462&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);
    // console.log(
    //   json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[0]
    //     .info.name
    // );
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return (
    <div className="body-container">
      <div className="search-container">
        <h1>Search</h1>
      </div>
      <div className="restaurant-container">
        <RestaurantCard />
      </div>
    </div>
  );
};

export default Body;
