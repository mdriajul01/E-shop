// @flow strict

import * as React from "react";
import logo from "../../../public/image/logo.png";
import { NavLink } from "react-router-dom";
import { RiLoginCircleFill } from "react-icons/ri";
import { MdShoppingCart } from "react-icons/md";
import { MdSell } from "react-icons/md";
import { TbBasketSearch } from "react-icons/tb";
function Navber() {
  return (
    <section className="bg-[#070242]">
      <div id="dower" className=""></div>
      <div id="Navber" className="flex items-center justify-around">
        <div id="img" className="h-fit w-28 my-3">
          <img src={logo} alt="" />
        </div>
        <div id="search" className="flex my-auto">
          <input
            type="search"
            id="search"
            name="search"
            placeholder="Search..."
            className="w-72 border-2 bg-slate-100 border-slate-200 rounded-lg py-3 px-5 outline-none text-lg text-black font-medium text-pretty"
          />
          <button>
            <TbBasketSearch className="text-[#070242] h-12 w-7 border-l-2 rounded-x bg-slate-100 border-[#070242] my-auto -ml-9" />
          </button>
        </div>
        <div id="routes" className="text-white font-bold mx-5">
          <ul className="flex gap-5">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#eadf99] underline"
                  : ""
              }
            >
              <li className="">Home</li>
            </NavLink>
            <NavLink
              to="/shop"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#eadf99] underline"
                  : ""
              }
            >
              <li className="">Shop</li>
            </NavLink>
            <NavLink
              to="/AboutUS"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#eadf99] underline"
                  : ""
              }
            >
              <li className="">About US</li>
            </NavLink>
          </ul>
        </div>
        <div id="buttoms" className="text-white flex gap-4">
          <button
            className="flex btn gap-1 btn-m my-auto hover:text-[#ff6600]  font-bold
          "
          >
            LogIn
            <RiLoginCircleFill className="text-[#0f025a] h-auto w-8 hover:text-[#ff6600] " />
          </button>
          <button className="flex btn gap-1 btn-m my-auto hover:text-[#ff6600] font-bold ">
            <MdShoppingCart className="text-[#0f025a] h-auto hover:text-[#fc7303] w-8 " />
            Cart
          </button>
          <button className="flex text-xl font-semibold mt-2 ml-6 hover:text-[#eadf99]">
            Become a Seller
            <MdSell className="text-[#eadf99] h-auto w-8 mt-1" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Navber;
