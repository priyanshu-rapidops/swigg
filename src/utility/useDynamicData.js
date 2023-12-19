import React, { useEffect, useState } from "react";
import { RESTAURANTS_LISTING } from "../constant";

export const useDynamicData = () => {
  const [restaurantsDate, setRestaurantsData] = useState(null);

  const fetchData = async () => {
    const data = await fetch(RESTAURANTS_LISTING);

    const json = await data.json();
    console.log(json);
    const finalData =
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setRestaurantsData(finalData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return restaurantsDate;
};
