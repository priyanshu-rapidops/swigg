import React, { useState } from "react";
import { useDynamicData } from "../../utility/useDynamicData";
import { CDN_URL } from "../../constant";
import { useDispatch, useSelector } from "react-redux";
import { Decrement, Increment } from "../../Redux/incrementAndDecrement/action";

export const Help = () => {
  const data = useDynamicData();
  const [dynamicIndex, setDynamicIndex] = useState(0);

  // eslint-disable-next-line no-unused-expressions
  const store = useSelector((state) => {console.log(state); state.incrementAndDecrement});
  const dispatch = useDispatch();
 
  console.log("store", store);
  console.log("store", store);
  console.log("store", store);
  console.log("store", store);

  console.log("dispatch", dispatch);

  return (
    <div>
      <div>
        <button
          className="bg-orange-500 text-white font-medium rounded-lg text-sm px-5 py-2.5 mx-2 mb-2 h-12"
          onClick={() => dispatch(Decrement())}
        >
          {" "}
          -{" "}
        </button>
        <span>{store}</span>
        <button
          onClick={() => dispatch(Increment())}
          className="bg-orange-500 text-white font-medium rounded-lg text-sm px-5 py-2.5 mx-2 mb-2 h-12"
        >
          {" "}
          +
        </button>
      </div>
      {data && (
        <div className="m-3 p-4">
          {data?.map((restaurantsObj, index) => {
            return (
              <div className="flex">
                {index === dynamicIndex ? (
                  <div className="flex">
                    <button
                      disabled={index === 0}
                      onClick={() => setDynamicIndex(dynamicIndex - 1)}
                      className={`${
                        index === 0 ? "bg-orange-300" : "bg-orange-500"
                      } text-white font-medium rounded-lg text-sm px-5 py-2.5 mx-2 mb-2 h-12`}
                    >
                      previous
                    </button>
                    <div className="">
                      <img
                        className=""
                        src={CDN_URL + restaurantsObj.info.cloudinaryImageId}
                        alt="restaurantsObj.info.name"
                      />
                    </div>
                    <button
                      disabled={index === data?.length - 1}
                      className={`${
                        index === 19 ? "bg-orange-300" : "bg-orange-500"
                      } text-white font-medium rounded-lg text-sm px-5 py-2.5 mx-2 mb-2 h-12`}
                      onClick={() => setDynamicIndex(dynamicIndex + 1)}
                    >
                      Next
                    </button>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
