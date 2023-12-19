import { CDN_URL, RESTAURANTS_LISTING } from "../../constant";
import Rating from "./Start";
import Loading from "../Loading/Loading";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../../utility/useOnlineStatus";
import { useDynamicData } from "../../utility/useDynamicData";

const Body = () => {
  const restaurantsDate = useDynamicData();

  const status = useOnlineStatus();

  if (restaurantsDate === null) return <Loading />;
  if (status === false) return "Please connect your internet";
  console.log("restaurantsDate", restaurantsDate);

  return (
    <>
      {restaurantsDate && (
        <div className="grid grid-cols-4 gap-2 mx-auto px-4 md:px-12 w-full m-3 ">
          {restaurantsDate.map((restaurantsObj) => {
            return (
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img
                  className="rounded-t-lg"
                  src={CDN_URL + restaurantsObj.info.cloudinaryImageId}
                  alt="restaurantsObj.info.name"
                />

                <header className="leading-tight p-2 md:p-4">
                  <Link
                    to={`/restaurants/${restaurantsObj.info.id}`}
                    className="text-lg font-bold opacity-75 curser-pointer"
                  >
                    {restaurantsObj.info.name}
                  </Link>
                  <div className="flex font-bold opacity-75">
                    <Rating />

                    <p className="text-sm mx-1">
                      {restaurantsObj.info.avgRatingString}.
                    </p>
                    <p className="text-sm">
                      {restaurantsObj.info.sla.slaString}
                    </p>
                  </div>
                  <div className="flex">
                    {restaurantsObj.info.cuisines.map((cuisinesObj) => {
                      return (
                        <p className="text-gray-500 text-sm">
                          {`${cuisinesObj + ", "}`}
                        </p>
                      );
                    })}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {restaurantsObj.info.areaName}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {/* {restaurantsObj.info.pramoted} */}
                  </div>
                </header>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Body;
