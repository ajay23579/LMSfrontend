import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className=" flex justify-between bg-amber-600 dark:bg-black text-black dark:text-white border-2 border-amber-800 rounded-2xl p-1 ">
        <div className="flex ">
          <img src="https://pngimg.com/uploads/book/book_PNG2107.png" alt="" srcset="" className=" h-10 w-10 m-1"  />
          <span className=" text-2xl m-1 mt-2">Logo</span></div>
          <ul className="flex space-x-6 mt-3"><Link to ="/">
            <li>Home</li></Link>
            <li>About</li>
            <li>Contact</li>
          </ul>
        <div>
            <Link to="/addBook">
              <button
                type="button"
              >
                Add Book
              </button>
              </Link>
              </div>
      </nav>
    </>
  );
};

export default NavBar;
