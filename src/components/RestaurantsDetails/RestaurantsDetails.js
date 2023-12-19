import { useParams } from "react-router-dom";
import { useRestaurantsDetails } from "./useRestaurantsDetails";
import Loading from "../Loading/Loading";
import { useState } from "react";
import { CDN_URL } from "../../constant";
import { useDispatch } from "react-redux";
import { addItems } from "../../utility/cartSlice";

export const RestaurantsDetails = () => {
  const { id } = useParams();

  const [showListing, setShowListing] = useState(0);

  const dispatch = useDispatch();

  const onIncreaseHandler = (value) => {
    //dispatch the action
    dispatch(addItems(value));
  };

  const onChangeHandler = (index) => {
    setShowListing(index);
  };

  const resInfo = useRestaurantsDetails(id);
  if (resInfo === null) return <Loading />;

  return (
    <>
      {resInfo && (
        <>
          {resInfo.map((value, index) => {
            return (
              <>
                <div
                  key={value.card.card.title}
                  onClick={() => onChangeHandler(index)}
                  className="m-2"
                >
                  <div className="flex justify-between item-center text-2xl font-bold opacity-75">
                    <h1>
                      {value.card.card.title} (
                      {value.card.card.itemCards.length})
                    </h1>
                    <button>Open</button>
                  </div>
                </div>
                {showListing === index && (
                  <div>
                    {value.card.card.itemCards.map((value) => {
                      return (
                        <div className="flex justify-between m-2 border-b-2 border-gray-100 p-2 m-2">
                          <div className="relative">
                            <div className="text-lg font-bold opacity-75 curser-pointer">
                              <p>{value.card.info.name}</p>
                              <p>price - {value.card.info.price}</p>
                            </div>
                            <p className="text-gray-500 text-sm">
                              {value.card.info.description}
                            </p>
                          </div>
                          <div>
                            {" "}
                            <div className="w-56">
                              <img
                                src={CDN_URL + value.card.info.imageId}
                                alt="ima"
                                className="rounded-lg"
                              />
                            </div>
                            <div className="flex justify-center items-center bg-black-100">
                              <button
                                onClick={() => onIncreaseHandler(value)}
                                className="bg-orange-300 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-full m-2"
                              >
                                Add +
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </>
            );
          })}
        </>
      )}
    </>
  );
};
