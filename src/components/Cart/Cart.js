import { useSelector } from "react-redux";
import { CDN_URL } from "../../constant";

export const Cart = () => {
  // const { user } = useContext(useContextDemo);
  // const cartItems = useSelector((store) => store.cartReducer);
  // console.log("cartItems", cartItems);
  return (
    <div>
      <div class="h-screen">
        <div class="py-12">
          <div class="max-w-md mx-auto  shadow-lg rounded-lg  md:max-w-5xl">
            <div class="md:flex ">
              <div class="w-full p-4 px-5 py-5">
                <div class="col-span-2 p-5">
                  <h1 class="text-xl font-bold">Shopping Cart</h1>
                  {cartItems.map(({ card }) => {
                    return (
                      <div class="flex justify-between items-center mt-6 pt-6">
                        <div class="flex  items-center">
                          <img
                            src={CDN_URL + card.info.imageId}
                            alt={card.info.imageId}
                            width="160"
                            className="rounded-xl"
                          />

                          <div class="flex flex-col ml-3">
                            <span class="md:text-md font-bold">
                              {card.info.name}
                            </span>
                            <span class="text-gray-500 text-sm">
                              {card.info.description}
                            </span>
                          </div>
                        </div>

                        <div class="flex justify-center items-center">
                          <div class="pr-8 flex ">
                            <span class="font-semibold">-</span>
                            <input
                              type="text"
                              class="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2"
                              value="1"
                            />
                            <span class="font-semibold">+</span>
                          </div>

                          <div class="pr-8 ">
                            <span class="text-gray-900 text-sm">
                              ₹ {card.info.defaultPrice / 100}
                            </span>
                          </div>
                          <div>
                            <i class="fa fa-close text-xs font-medium"></i>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
