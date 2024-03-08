import CardCase from "./scroll-component";

/* eslint-disable @next/next/no-img-element */
const categories = [
  {
    name: "Grocery",
    image:
      "https://cn-geo1.uber.com/static/mobile-content/eats/cuisine-filters/Grocery.png",
  },
  {
    name: "Pizza",
    image:
      "https://cn-geo1.uber.com/static/mobile-content/eats/cuisine-filters/v1/Pizza.png",
  },
  {
    name: "Fast Food",
    image:
      "https://cn-geo1.uber.com/static/mobile-content/eats/cuisine-filters/v1/FastFood.png",
  },
  {
    name: "Wings",
    image:
      "https://cn-geo1.uber.com/static/mobile-content/eats/cuisine-filters/v1/Wings.png",
  },
  {
    name: "Grocery",
    image:
      "https://cn-geo1.uber.com/static/mobile-content/eats/cuisine-filters/v1/Mexican.png",
  },
  {
    name: "Chinese",
    image:
      "https://cn-geo1.uber.com/static/mobile-content/eats/cuisine-filters/v1/Chinese.png",
  },
  {
    name: "Sushi",
    image:
      "	https://cn-geo1.uber.com/static/mobile-content/eats/cuisine-filters/v1/Sushi.png",
  },
  {
    name: "Grocery",
    image:
      "https://cn-geo1.uber.com/static/mobile-content/eats/cuisine-filters/Grocery.png",
  },
  {
    name: "Grocery",
    image:
      "https://cn-geo1.uber.com/static/mobile-content/eats/cuisine-filters/Grocery.png",
  },
  {
    name: "Grocery",
    image:
      "https://cn-geo1.uber.com/static/mobile-content/eats/cuisine-filters/Grocery.png",
  },
  {
    name: "Grocery",
    image:
      "https://cn-geo1.uber.com/static/mobile-content/eats/cuisine-filters/Grocery.png",
  },
  {
    name: "Pizza",
    image:
      "https://cn-geo1.uber.com/static/mobile-content/eats/cuisine-filters/v1/Pizza.png",
  },
  {
    name: "Fast Food",
    image:
      "https://cn-geo1.uber.com/static/mobile-content/eats/cuisine-filters/v1/FastFood.png",
  },
  {
    name: "Wings",
    image:
      "https://cn-geo1.uber.com/static/mobile-content/eats/cuisine-filters/v1/Wings.png",
  },
  {
    name: "Grocery",
    image:
      "https://cn-geo1.uber.com/static/mobile-content/eats/cuisine-filters/v1/Mexican.png",
  },
  {
    name: "Grocery",
    image:
      "https://cn-geo1.uber.com/static/mobile-content/eats/cuisine-filters/Grocery.png",
  },
  {
    name: "Grocery",
    image:
      "https://cn-geo1.uber.com/static/mobile-content/eats/cuisine-filters/Grocery.png",
  },
  {
    name: "Grocery",
    image:
      "https://cn-geo1.uber.com/static/mobile-content/eats/cuisine-filters/Grocery.png",
  },
  {
    name: "Grocery",
    image:
      "https://cn-geo1.uber.com/static/mobile-content/eats/cuisine-filters/Grocery.png",
  },
  {
    name: "Grocery",
    image:
      "https://cn-geo1.uber.com/static/mobile-content/eats/cuisine-filters/Grocery.png",
  },
  {
    name: "Grocery",
    image:
      "https://cn-geo1.uber.com/static/mobile-content/eats/cuisine-filters/Grocery.png",
  },
  {
    name: "Pizza",
    image:
      "https://cn-geo1.uber.com/static/mobile-content/eats/cuisine-filters/v1/Pizza.png",
  },
  {
    name: "Fast Food",
    image:
      "https://cn-geo1.uber.com/static/mobile-content/eats/cuisine-filters/v1/FastFood.png",
  },
  {
    name: "Wings",
    image:
      "https://cn-geo1.uber.com/static/mobile-content/eats/cuisine-filters/v1/Wings.png",
  },
  {
    name: "Grocery",
    image:
      "https://cn-geo1.uber.com/static/mobile-content/eats/cuisine-filters/v1/Mexican.png",
  },
  {
    name: "Grocery",
    image:
      "https://cn-geo1.uber.com/static/mobile-content/eats/cuisine-filters/Grocery.png",
  },
  {
    name: "Grocery",
    image:
      "https://cn-geo1.uber.com/static/mobile-content/eats/cuisine-filters/Grocery.png",
  },
  {
    name: "Grocery",
    image:
      "https://cn-geo1.uber.com/static/mobile-content/eats/cuisine-filters/Grocery.png",
  },
  {
    name: "Grocery",
    image:
      "https://cn-geo1.uber.com/static/mobile-content/eats/cuisine-filters/Grocery.png",
  },
  {
    name: "Grocery",
    image:
      "https://cn-geo1.uber.com/static/mobile-content/eats/cuisine-filters/Grocery.png",
  },
  {
    name: "Grocery",
    image:
      "https://cn-geo1.uber.com/static/mobile-content/eats/cuisine-filters/Grocery.png",
  },
  {
    name: "Pizza",
    image:
      "https://cn-geo1.uber.com/static/mobile-content/eats/cuisine-filters/v1/Pizza.png",
  },
  {
    name: "Fast Food",
    image:
      "https://cn-geo1.uber.com/static/mobile-content/eats/cuisine-filters/v1/FastFood.png",
  },
  {
    name: "Wings",
    image:
      "https://cn-geo1.uber.com/static/mobile-content/eats/cuisine-filters/v1/Wings.png",
  },
  {
    name: "Mexican",
    image:
      "https://cn-geo1.uber.com/static/mobile-content/eats/cuisine-filters/v1/Mexican.png",
  },
  {
    name: "Chinese",
    image:
      "	https://cn-geo1.uber.com/static/mobile-content/eats/cuisine-filters/v1/Chinese.png",
  },
  {
    name: "Desserts",
    image:
      "	https://cn-geo1.uber.com/static/mobile-content/eats/cuisine-filters/v1/Sushi.png",
  },
  {
    name: "Grocery",
    image:
      "https://cn-geo1.uber.com/static/mobile-content/eats/cuisine-filters/Grocery.png",
  },
  {
    name: "Grocery",
    image:
      "https://cn-geo1.uber.com/static/mobile-content/eats/cuisine-filters/Grocery.png",
  },
  {
    name: "Grocery",
    image:
      "https://cn-geo1.uber.com/static/mobile-content/eats/cuisine-filters/Grocery.png",
  },
];

export default function CategoryService() {
  return (
    <div className="flex overflow-x-scroll scrollbar-hide">

    {categories.map((category) => (
      <div key={category.name} className="flex flex-col items-center w-56 md:w-56 px-6 text-xs">
          <img
            className="w-full" 
            src={category.image}
            alt={category.name}
          />
        <p className="mt-2 text-center">{category.name}</p>
      </div>
    ))}
  </div>
  
  );
}
