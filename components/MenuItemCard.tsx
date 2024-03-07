import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import SelectCart from "./cartselect-component";

function MenuItemCard() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className="max-w-xs w-60 rounded overflow-hidden bg-white mx-4"
        onClick={() => setShowModal(true)} // Open modal on click
      >
        <img
          className="w-full rounded-lg"
          src="/images/McDonalds.avif"
          alt="McChicken Sandwich"
        />
        <div className="py-4">
          <div className="text-sm font-medium mb-2">McChicken®</div>
          <p className="text-gray-700 text-sm">$3.49 • 400 Cal.</p>
        </div>
      </div>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto m-auto p-12 w-5xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 rounded-t">
                  <button
                    className="p-1 border-0 text-black text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>

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
                      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
                    />
                  </svg>
                </div>
                {/*body*/}
                <SelectCart />
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default MenuItemCard;
