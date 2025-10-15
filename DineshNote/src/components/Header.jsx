import { Link } from "react-router-dom";
import { LuNotebook } from "react-icons/lu";
import { RiChatAiLine } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";
const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-gray-900 via-gray-800 to-black shadow-md">
      <div className="container mx-auto flex justify-between items-center h-16 px-6">
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="text-xl font-bold text-gray-300 tracking-wide hover:text-yellow-400 transition"
          >
            DineshNote
          </Link>
        </div>

        {/* All the navigation links are here  */}
        <ul className="hidden md:flex space-x-5 text-sm text-gray-300 font-medium">
          <li>
            <a
              href="/#about"
              className="flex items-center gap-1 hover:text-yellow-400 cursor-pointer"
            >
              <LuNotebook />
              My Note
            </a>
          </li>
          <li>
            <a
              href="/#skills"
              className="flex items-center gap-1 hover:text-yellow-400 cursor-pointer"
            >
              <RiChatAiLine />
              AI Chat
            </a>
          </li>
          <li>
            <a
              href="/#education"
              className="flex items-center gap-1 hover:text-yellow-400 cursor-pointer"
            >
              <FaPlus />
              Create
            </a>
          </li>

          <li>
            <a
              href="/#contact"
              className="flex items-center gap-1 hover:text-yellow-400 cursor-pointer"
            >
              <IoMdLogIn />
              Login
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
