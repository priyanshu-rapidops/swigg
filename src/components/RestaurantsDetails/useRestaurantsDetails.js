import { useEffect, useState } from "react";
import { MENU_API } from "../../constant";

export const useRestaurantsDetails = (id) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      console.log("MENU_API + id", MENU_API + id);
      const data = await fetch(MENU_API + id);
      const json = await data.json();
  
      console.log("json", json.data.cards);
  
      const categories =
        json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
          (c) =>
            c.card?.["card"]?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      setResInfo(categories);

      console.log("categories", categories);
    }
    catch (error) {
      console.log(error)
    }
  };

  return resInfo;
};
