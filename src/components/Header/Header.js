import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useContextDemo } from "../../utility/useContextdemo";
import { useSelector } from "react-redux";

export default function Header() {
  const { user } = useContext(useContextDemo);
  console.log("data", user);

  const cartItems = useSelector((store) => store.cartReducer);

  console.log("cart", cartItems);
  return (
    <header className="bg-white shadow-xl">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/">
            <div class="flex">
              <svg class="h-20 w-20" viewBox="0 0 104 154" version="1.1">
                <title>Fill 1</title>
                <desc>Created with Sketch.</desc>
                <defs></defs>
                <g
                  id="Page-1"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g id="swiggy" fill="#E67332">
                    <path
                      d="M51.888,154 C51.791,153.927 51.682,153.838 51.568,153.736 C49.723,151.45 38.321,137.168 26.702,118.846 C23.217,113.006 20.954,108.454 21.389,107.276 C22.525,104.215 42.781,102.539 49.019,105.315 C50.916,106.158 50.868,107.272 50.868,107.921 C50.868,110.725 50.73,118.245 50.73,118.245 C50.731,119.799 51.995,121.06 53.551,121.058 C55.109,121.058 56.367,119.792 56.362,118.235 L56.33,99.496 L56.324,99.496 C56.324,97.869 54.549,97.462 54.215,97.398 C50.959,97.383 44.348,97.361 37.248,97.361 C21.582,97.361 18.082,98.006 15.42,96.263 C9.654,92.494 0.226,67.082 0.006,52.783 C-0.308,32.613 11.644,15.15 28.474,6.498 C35.505,2.958 43.445,0.963 51.833,0.963 C78.469,0.963 100.405,21.067 103.324,46.934 C103.327,46.956 103.327,46.981 103.333,47.003 C103.868,53.256 69.402,54.586 62.585,52.766 C61.539,52.486 61.272,51.416 61.272,50.956 C61.264,46.2 61.232,32.819 61.232,32.819 C61.227,31.263 59.963,30.002 58.407,30.006 L58.405,30.006 C56.852,30.008 55.591,31.273 55.591,32.83 L55.646,57.48 C55.694,59.033 56.998,59.453 57.355,59.523 C61.232,59.523 70.298,59.515 78.743,59.515 C90.156,59.515 94.95,60.837 98.14,63.265 C100.26,64.883 101.082,67.98 100.365,72.003 C93.964,107.801 53.412,152.15 51.888,154 L51.888,154 Z"
                      id="Fill-1"
                    ></path>
                  </g>
                </g>
              </svg>
            </div>
          </Link>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          <Link
            to="/Help"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Help
          </Link>
          <Link
            to="/About"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            About
          </Link>
          <Link
            to="/Cart"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cart
            {/* ({cartItems.length}) */}
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="#"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
