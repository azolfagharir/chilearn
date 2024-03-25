import React from "react";
import { Link } from "react-router-dom";
import PathConstants from "../routes/pathConstants";

export default function Header() {
  return (
    <>
      <header className="z-20">
        <nav>
          <ul className="flex justify-around mt-4 ml-12 md:ml-16 lg:ml-32 xl:ml-48">
            <li className=" mx-8">
              <Link className="text-black inline" to={PathConstants.Home}>
                <img className="w-12 h-12" src="/my_logo.png" alt="" />
              </Link>
            </li>
            <li className="mx-8">
              <Link className="text-black inline" to={PathConstants.Guide}>
                راهنما
              </Link>
            </li>
            <li className="mx-8">
              <Link className="text-black inline" to={PathConstants.About}>
                درباره ما
              </Link>
            </li>
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
          </ul>
        </nav>
      </header>
    </>
  );
}
