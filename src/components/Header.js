import cartIcon from "./images/icon-cart.svg";
import menuIcon from "./images/icon-menu.svg";
import imageAvatar from "./images/image-avatar.png";
import logo from "./images/logo.svg";
import closeIcon from "./images/icon-close.svg";
import { useState } from "react";
function Header() {
  const [hide, setHide] = useState("hidden");
  const [cartCount, setCardCount] = useState(0);
  function openNav() {
    setHide("");
  }

  function closeNav() {
    setHide("hidden");
  }

  return (
    <div
      className={
        "bg-white   font-700 w-375px md:w-1000px md:px-0 px-4 py-4 mx-auto "
      }
    >
      <header className={"flex justify-between items-center"}>
        <div className="flex items-centr gap-4 relative">
          <button onClick={openNav} className={" ml-4 md:hidden md:ml-0"}>
            <img className={" w-6"} src={menuIcon} alt="menu Icon" />
          </button>
          <button
            onClick={closeNav}
            className={`z-30 w-20 left-4 absolute ${hide}`}
          >
            <img className={"md:hidden object-cover"} src={closeIcon} alt="" />
          </button>
          <img className={"w-full"} src={logo} alt="logo" />
        </div>
        <nav
          className={`bg-white ${hide} h-screen  w-3/5 absolute bottom-0 top-0 left-0 p-4 md:block md:p-0 md:h-full md:w-full  md:relative  md:ml-16`}
        >
          <ul
            className={
              "flex flex-col font-700 mt-20 ml-4 md:m-l0 md:mt-0 md:font-400 md:flex-row gap-5 md:opacity-75"
            }
          >
            <li>
              <a href="#">Collections</a>
            </li>
            <li>
              <a href="#">Men</a>
            </li>
            <li>
              <a href="#">Women</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>

        <div className="flex gap-4 md:gap-6 relative">
          <img className={"object-contain"} src={cartIcon} alt="cart Icon" />
          <img
            className={"object-contain w-8 mr-4 md:mr-0"}
            src={imageAvatar}
            alt="Avatar"
          />

          <span
            className={`${
              cartCount > 0 ? "" : "hidden"
            } w-5 h-3 bg-orange  rounded-full absolute left-2 top-0.5 text-white  text-0.5 flex items-center justify-center`}
          >
            3
          </span>
        </div>
      </header>
      <div
        className={" max-sm:hidden w-full bg-lightGrayishBlue h-0.5 mt-4"}
      ></div>
    </div>
  );
}
export default Header;
