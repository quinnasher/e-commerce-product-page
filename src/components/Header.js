import cartIcon from "./images/icon-cart.svg";
import menuIcon from "./images/icon-menu.svg";
import imageAvatar from "./images/image-avatar.png";
import logo from "./images/logo.svg";
function Header() {
  return (
    <div
      className={
        "bg-white font-700 w-375px md:w-1000px md:px-0 px-4 py-4 mx-auto "
      }
    >
      <header className={"flex justify-between items-center "}>
        <div className="flex items-centr gap-4">
          <button className={"md:hidden"}>
            <img className={" w-6"} src={menuIcon} alt="menu Icon" />
          </button>
          <img className={"w-full"} src={logo} alt="logo" />
        </div>
        <nav
          className={
            "bg-white h-screen  w-72 absolute bottom-0 top-0 left-0 p-4 md:p-0 md:h-full md:w-full  md:relative  md:ml-16"
          }
        >
          <ul
            className={
              "flex flex-col font-700 mt-14 md:mt-0 md:font-400 md:flex-row gap-4 md:opacity-75"
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

        <div className="flex gap-4 md:gap-6">
          <img className={"object-contain"} src={cartIcon} alt="cart Icon" />
          <img
            className={"object-contain w-10"}
            src={imageAvatar}
            alt="Avatar"
          />
        </div>
      </header>
      <div className={" max-sm:hidden w-full bg-lightGrayishBlue h-0.5 mt-4"}>
        {" "}
      </div>
    </div>
  );
}
export default Header;
