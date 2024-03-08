import React, { useState, ChangeEvent, FormEvent } from "react";

type Meal = {
  name: string;
  price: string;
  category: string;
};

const initialMealState: Meal = {
  name: '',
  price: '',
  category: ''
};

export default function AddMealForm() {
  const [meal, setMeal] = useState<Meal>(initialMealState);

  const handleMealChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setMeal({ ...meal, [name]: value });
  };

  const handleAddMealSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Add logic here if you need to send meal data to the backend or perform additional actions
    console.log(meal);
  };

  return (
    <form onSubmit={handleAddMealSubmit} className="max-w-lg mx-auto my-10 p-6 bg-gray-800 text-white rounded-lg shadow-xl">
        <h3 className="text-xl font-bold mb-4">Add a Meal</h3>
        {/* Meal Name */}
        <div className="mb-4">
          <label htmlFor="mealName" className="block text-sm font-bold mb-2">Meal Name:</label>
          <input type="text" id="mealName" name="name" value={meal.name} onChange={handleMealChange} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-white" />
        </div>
        {/* Meal Price */}
        <div className="mb-4">
          <label htmlFor="mealPrice" className="block text-sm font-bold mb-2">Price:</label>
          <input type="number" id="mealPrice" name="price" step="0.01" value={meal.price} onChange={handleMealChange} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-white" />
        </div>
        {/* Meal Category */}
        <div className="mb-4">
          <label htmlFor="mealCategory" className="block text-sm font-bold mb-2">Category:</label>
          <select id="mealCategory" name="category" value={meal.category} onChange={handleMealChange} required className="block appearance-none w-full bg-white text-gray-700 border border-gray-200 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
            <option value="">Select a category</option>
            {/* Category options */}
          </select>
        </div>
        {/* Submit Button */}
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline">Add Meal</button>
    </form>
  );
}
