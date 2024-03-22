import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <ul >

          <div className="container flex flex-row justify-between items-center  absolute mr-4 top-4 ">
          <li>
            <Link className="text-black text-center inline" to="/">
              
            </Link>
          </li>
          <li>
            <Link className="text-black text-center inline" to="/">
              خانه
            </Link>
          </li>
          <li>
            <Link className="text-black inline" to="/guide">
              راهنما
            </Link>
          </li>
          <li>
            <Link className="text-black inline " to="/about">
              درباره ما
            </Link>
          </li>
          </div>
          
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <li className="flex justify-center items-center h-full">
            <Link
              className="bg-myFavorite my_button md:mx-40 end-0 mx-28 items-center text-white top-490 absolute w-96 text-center xl:absolute xl:mx-96"
              to="/SignUp"
            >
              ثبت نام
            </Link>

          </li >
          <br />
          <br />
          <li className="flex justify-center items-center h-full ">
            <Link   className="bg-myFavorite md:mx-40 my_button end-0 mx-28 items-center text-white top-500 absolute w-96 text-center xl:absolute xl:mx-96" to="/Login">
              ورود
            </Link>
          </li>
          
        </ul>
      </nav>
    </header>
  );
}

export default Header;
