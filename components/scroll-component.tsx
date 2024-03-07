import React, { useRef } from "react";

// Define the props type for CardCase
type CardCaseProps = {
  header: string;
  children: React.ReactNode; // You can use React.ReactNode for children as it can be anything renderable.
};

const CardCase: React.FC<CardCaseProps> = (props) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Function to scroll right
  const scrollRight = () => {
    scrollContainerRef.current?.scrollBy({ left: 200, behavior: "smooth" });
  };

  // Function to scroll left
  const scrollLeft = () => {
    scrollContainerRef.current?.scrollBy({ left: -200, behavior: "smooth" });
  };

  return (
    <div className="border-b">
      <div className="flex justify-between items-center">
        <h1 className="font-medium text-gray-900 text-2xl">{props.header}</h1>
        <div className="flex">
          <button
            className="rounded-full bg-gray-200 w-10 h-10 m-4 justify-center flex items-center"
            onClick={scrollLeft}
            aria-label="Scroll Left"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
              />
            </svg>
          </button>
          <button
            className="rounded-full bg-gray-200 w-10 h-10 m-4 justify-center flex items-center"
            onClick={scrollRight}
            aria-label="Scroll Right"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        className="overflow-auto flex no-scrollbar"
        style={{ padding: "0 20px" }}
        ref={scrollContainerRef}
      >
        {props.children}
      </div>
    </div>
  );
};

export default CardCase;
