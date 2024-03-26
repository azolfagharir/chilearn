import React from "react";
import { Link } from "react-router-dom";
import PathConstants from "../routes/pathConstants";

export default function Header() {
  return (
    <>
      <header className="z-20 bg-white p-4 fixed top-0 left-0 w-full">
        <nav className="container mx-auto">
          <ul className="flex items-center justify-between">
            <li className="mr-4">
              <Link
                className="text-black inline-flex items-center"
                to={PathConstants.Home}
              >
                <img className="w-12 h-12" src="/my_logo.png" alt="Logo" />
              </Link>
            </li>
            <li className="mx-auto">
              <Link
                className="text-black inline-flex items-center"
                to={PathConstants.Guide}
              >
                راهنما
              </Link>
            </li>
            <li className="ml-4">
              <Link
                className="text-black inline-flex items-center"
                to={PathConstants.About}
              >
                درباره ما
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
