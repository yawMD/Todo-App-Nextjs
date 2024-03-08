import React, { useState, ChangeEvent, FormEvent } from "react";

type Restaurant = {
  name: string;
  address: string;
  phone: string;
  email: string;
};

const initialRestaurantState: Restaurant = {
  name: '',
  address: '',
  phone: '',
  email: ''
};

export default function RestaurantRegistration() {
  const [restaurant, setRestaurant] = useState<Restaurant>(initialRestaurantState);

  const handleRestaurantChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRestaurant({ ...restaurant, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Submit logic here...
    console.log(restaurant);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto my-10 p-6 bg-white rounded-lg shadow-xl">
  <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Restaurant Registration</h2>
  <div className="mb-4">
    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Restaurant Name:</label>
    <input type="text" id="name" name="name" value={restaurant.name} onChange={handleRestaurantChange} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
  </div>
  <div className="mb-4">
    <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">Address:</label>
    <input type="text" id="address" name="address" value={restaurant.address} onChange={handleRestaurantChange} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
  </div>
  <div className="mb-4">
    <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Phone Number:</label>
    <input type="tel" id="phone" name="phone" value={restaurant.phone} onChange={handleRestaurantChange} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
  </div>
  <div className="mb-6">
    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
    <input type="email" id="email" name="email" value={restaurant.email} onChange={handleRestaurantChange} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />
  </div>
  <div className="mt-8">
    <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline">Register Restaurant</button>
  </div>
</form>
  );
}
