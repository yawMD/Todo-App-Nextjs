/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import NavBarMeal from "./NavBarMeal";
import MenuItemCard from "./MenuItemCard";
import SideBar from "./sidebar-component";
import CardCase from "./cardcase-component";
import MostPopular from "./mostpopular-component";
import { useState } from "react";
import Modal from "./modal-component";

export default function StoreComponent() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);
  return (
    <div className="items-center m-auto">
      <NavBarMeal />
      {isModalOpen && <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} content={modalContent} />}
      <div className="py-4">
        <img
          src="/images/McDonalds.avif"
          className="w-full"
          alt="McDonald's Food"
          style={{
            objectFit: "cover",
            height: "12vh",
            width: "100%",
            objectPosition: "center",
          }}
        />
      </div>
      <div className="p-4">
        <h1 className="text-4xl font-semibold">McDonalds</h1>
        <p className="text-xs">4.6</p>
        <div className="flex justify-between">
          <div className="flex my-2">
            <div className="bg-gray-100 w-fit p-2 rounded-full text-sm m-2 font-medium">
              <p>See similar</p>
            </div>
            <div className="bg-gray-100 w-fit p-2 rounded-full text-sm m-2 font-medium">
              <p>Group order</p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="p-1 bg-gray-200 rounded-3xl">
              <button className="p-2 px-3 bg-white rounded-3xl">
                Delivery
              </button>
              <button className="p-2 px-3">Pickup</button>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className=" mx-2">
            <p className="text-2xl font-semibold">Dinner</p>
            <p className="font-thin text-sm">5:00PM - 3:59PM</p>
          </div>
          <div className="text-2xl mx-2">
            <p className="font-bold">Breakfast</p>
            <p className="font-thin text-sm">5:00AM - 10:59AM</p>
          </div>
          <div className="text-2xl mx-2">
            <p className="font-bold">Lunch</p>
            <p className="font-thin text-sm">11:00AM - 4:59PM</p>
          </div>
        </div>
      </div>
      <div className="m-auto flex w-full">
        <div className="w-3/12">
          <SideBar />
        </div>
        <div className="w-9/12 overflow-auto">
          <CardCase header={"Featured Items"}>
            <div className="flex">
              <MenuItemCard />
              <MenuItemCard />
              <MenuItemCard />
              <MenuItemCard />
              <MenuItemCard />
              <MenuItemCard />
              <MenuItemCard />
              <MenuItemCard />
              <MenuItemCard />
              <MenuItemCard />
              <MenuItemCard />
              <MenuItemCard />
              <MenuItemCard />
              <MenuItemCard />
              <MenuItemCard />
              <MenuItemCard />
              <MenuItemCard />
              <MenuItemCard />
              <MenuItemCard />
              <MenuItemCard />
              <MenuItemCard />
              <MenuItemCard />
              <MenuItemCard />
              <MenuItemCard />
              <MenuItemCard />
              <MenuItemCard />
              <MenuItemCard />
              <MenuItemCard />
              <MenuItemCard />
              <MenuItemCard />
              <MenuItemCard />
              <MenuItemCard />
            </div>
          </CardCase>
          <div>
            <p className="font-medium text-xl py-2">Most Popular</p>
          </div>
          <div className="rounded-lg grid grid-cols-2 gap-4">
              <MostPopular />
              <MostPopular />
              <MostPopular />
              <MostPopular />
              <MostPopular />
              <MostPopular />
              <MostPopular />
              <MostPopular />
              <MostPopular />
              <MostPopular />
              <MostPopular />
              <MostPopular />
              <MostPopular />
              <MostPopular />
              <MostPopular />
            </div>
        </div>


      </div>
    </div>
  );
}
