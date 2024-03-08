import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

type CartItem = {
  name: String;
  price: number;
  quantity: number;
  options: string[];
};
export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const cartRef = useRef<HTMLDivElement>(null);
  // Ref for the cart div

  // Function to toggle the cart's visibility
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const closeCart = () => setIsCartOpen(false);

  // Load cart from localStorage when the component mounts
  useEffect(() => {
    const cartFromStorage = localStorage.getItem("cart");
    if (cartFromStorage) {
      setCart(JSON.parse(cartFromStorage));
    }
  }, []);

  //remove the cart from local
  const removeItemFromCart = (indexToRemove: number) => {
    const newCart = cart.filter((item, index) => index !== indexToRemove);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  // Event listener to detect clicks outside the cart div
  useEffect(() => {
    function handleClickOutside(event: { target: any }) {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsCartOpen(false); // Hide the cart if click is outside the cart div
      }
    }

    // Add when the component mounts
    document.addEventListener("mousedown", handleClickOutside);
    // Remove event listener on cleanup
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [cartRef]);

  return (
    <nav className="flex justify-between items-center w-full text-sm flex-wrap">
      <Link href={"/"}>
        <img
          className=" md:h-10 h-10 w-fit p-2 cursor-pointer"
          src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/97c43f8974e6c876.svg"
          alt="Logo"
        />
      </Link>

      <div className="p-1 bg-gray-200 rounded-3xl hidden md:flex">
        <button className="p-2 px-3 bg-white rounded-3xl mr-2">Delivery</button>
        <button className="p-2 px-3">Pickup</button>
      </div>

      <div className="flex-1 p-3 bg-gray-200 rounded-3xl hidden md:flex items-center mx-4 my-2 min-w-0">
        <p className="truncate px-4">{"Chicago O'Hare Intl Airport . Now"}</p>
      </div>

      <div className="flex-1 p-3 bg-gray-200 rounded-3xl hidden md:flex items-center mx-4 my-2 min-w-0">
        <input
          className="w-full bg-gray-200 outline-none"
          type="text"
          placeholder="Food, groceries, drinks, etc."
        />
      </div>

      {/* Toggle Button for Mobile */}
      <button
        className="text-black md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
          />
        </svg>
      </button>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row justify-end items-center mt-2 w-full md:w-auto`}
      >
        {/* Cart Button */}
        <div className="relative mx-1 my-1">
          <div style={{ padding: "14px" }}>
          
          <div onClick={() => setIsCartOpen(!isCartOpen)}
              style={{
                width: "100%",
                backgroundColor: "black",
                color: "white",
                padding: "10px",
                borderRadius: "60px",
                cursor: "pointer",
                display:"flex"
              }}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>

          <button
            >
              Cart - $
              {cart
                .reduce((total, item) => total + item.price * item.quantity, 0)
                .toFixed(2)}
            </button>
          </div>
            
          </div>
          {isCartOpen && (
            <div
              ref={cartRef}
              className="absolute right-0 z-20 border p-5 bg-white rounded-md shadow-lg w-96"
              style={{ top: "100%" }}
              id="my-modal"
            >
              <div>
                <button
                  onClick={closeCart}
                  className="absolute top-0 right-0 mt-4 mr-4"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                {/* Title bar */}
                <div className="flex justify-between items-center bg-black text-white py-3 px-4 rounded-t-md">
                  <span>Wendys (9335 IRVING PARK RD)</span>
                </div>
                {/* Group order toggle */}
                <ul>
                  {cart.map((item, index) => (
                    <li
                      key={index}
                      className="list-none my-2 flex justify-between"
                    >
                      <div>
                        <div className="mb-1 font-bold">
                          {item.quantity} × {item.name} - $
                          {item.price.toFixed(2)}
                        </div>
                        {/* Item options, if any */}
                        {item.options?.map((option, idx) => (
                          <div key={idx} className="text-sm text-gray-500">
                            {option}
                          </div>
                        ))}
                      </div>
                      <button
                        onClick={() => removeItemFromCart(index)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </li>
                  ))}
                </ul>
                {cart.length === 0 && (
                  <p className="text-center my-4">Your cart is empty.</p>
                )}
                {/* Checkout button */}
                {cart.length > 0 && (
                  <div className="border-t pt-4 mt-4">
                    <button
                      onClick={() => setIsCartOpen(!isCartOpen)}
                      className="w-full bg-black text-white py-2 rounded-md transition duration-300 hover:bg-opacity-90 focus:outline-none"
                    >
                      Cart -{" "}
                      {cart.reduce((total, item) => total + item.quantity, 0)}
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        <Link href={"/login"}>
          <span className="px-4 py-2 rounded-3xl border mx-1 text-black bg-white my-1 block text-center">
            Login
          </span>
        </Link>
        <Link href={"/signup"}>
          <span className="px-4 py-2 rounded-3xl bg-black text-white mx-1 my-1 block text-center">
            Sign Up
          </span>
        </Link>
      </div>
    </nav>
  );
}
