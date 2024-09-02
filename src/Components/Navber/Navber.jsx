// @flow strict

import * as React from "react";
import { useState } from "react";
import logo from "../../../public/image/logo.png";
import { NavLink } from "react-router-dom";
import { RiLoginCircleFill } from "react-icons/ri";
import { MdShoppingCart, MdSell, MdMenu, MdClose } from "react-icons/md";
import { TbBasketSearch } from "react-icons/tb";
import "./Nav.css";

function Navber() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="bg-[#070242] fixed top-0 left-0 right-0 z-50">
      <div
        id="Navber"
        className="flex items-center justify-between px-4 md:px-8"
      >
        <div id="img" className="h-fit w-28 my-3">
          <img src={logo} alt="Logo" />
        </div>
        <div className="hidden md:flex flex-grow justify-center items-center">
          <div id="search" className="flex">
            <input
              type="search"
              id="search"
              name="search"
              placeholder="Search..."
              className="w-72 border-2 bg-slate-100 border-slate-200 rounded-lg py-3 px-5 outline-none text-lg text-black font-medium"
            />
            <button>
              <TbBasketSearch className="text-[#070242] h-12 w-7 border-l-2 rounded-x bg-slate-100 border-[#070242] my-auto -ml-9" />
            </button>
          </div>
        </div>
        <div className="hidden md:flex items-center">
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
                <li>Home</li>
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
                <li>Shop</li>
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
                <li>About Us</li>
              </NavLink>
            </ul>
          </div>
          <div id="buttoms" className="text-white flex gap-4">
            <button className="flex btn gap-1 btn-m my-auto hover:text-[#ff6600] font-bold">
              LogIn
              <RiLoginCircleFill className="text-[#0f025a] h-auto w-8 hover:text-[#ff6600]" />
            </button>
            <button className="flex btn gap-1 btn-m my-auto hover:text-[#ff6600] font-bold">
              <MdShoppingCart className="text-[#0f025a] h-auto hover:text-[#fc7303] w-8" />
              Cart
            </button>
            <button className="flex text-xl font-semibold mt-2 ml-6 hover:text-[#eadf99]">
              Become a Seller
              <MdSell className="text-[#eadf99] h-auto w-8 mt-1" />
            </button>
          </div>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? (
              <MdClose className="h-8 w-8" />
            ) : (
              <MdMenu className="h-8 w-8" />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-[#070242] text-white text-center py-5">
          <div className="flex justify-center mb-4">
            <input
              type="search"
              id="search-mobile"
              name="search"
              placeholder="Search..."
              className="w-3/4 border-2 bg-slate-100 border-slate-200 rounded-lg py-3 px-5 outline-none text-lg text-black font-medium"
            />
            <button>
              <TbBasketSearch className="text-[#070242] h-12 w-7 border-l-2 rounded-x bg-slate-100 border-[#070242] my-auto -ml-9" />
            </button>
          </div>
          <ul className="flex flex-col gap-4">
            <NavLink
              to="/"
              onClick={toggleMenu}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#eadf99] underline"
                  : ""
              }
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              to="/shop"
              onClick={toggleMenu}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#eadf99] underline"
                  : ""
              }
            >
              <li>Shop</li>
            </NavLink>
            <NavLink
              to="/AboutUS"
              onClick={toggleMenu}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#eadf99] underline"
                  : ""
              }
            >
              <li>About Us</li>
            </NavLink>
          </ul>
          <div className="flex flex-col items-center gap-4 mt-4">
            <button className="flex btn gap-1 btn-m my-auto hover:text-[#ff6600] font-bold">
              LogIn
              <RiLoginCircleFill className="text-[#0f025a] h-auto w-8 hover:text-[#ff6600]" />
            </button>
            <button className="flex btn gap-1 btn-m my-auto hover:text-[#ff6600] font-bold">
              <MdShoppingCart className="text-[#0f025a] h-auto hover:text-[#fc7303] w-8" />
              Cart
            </button>
            <button className="text-lg font-semibold mt-2 hover:text-[#eadf99] gap-0 border rounded-full hover:shadow-md hover:shadow-slate-50">
              Become a Seller
              <MdSell className="text-[#eadf99] h-auto w-8 -mt-6 ml-40" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Navber;
