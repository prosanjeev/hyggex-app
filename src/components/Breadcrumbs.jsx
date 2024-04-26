import React from "react";
import { CiHome } from "react-icons/ci";

const Breadcrumbs = () => {
  return (
    <div className="flex mt-10">
      <div className="text-sm breadcrumbs ">
        <ul className="text-[18px]">
          <li>
            <a>
              <CiHome />
            </a>
          </li>
          <li>
            <a>Flashcard</a>
          </li>
          <li>
            <a>Mathematics</a>
          </li>
          <li className="font-bold">Relation and Function</li>
        </ul>
      </div>
    </div>
  );
};

export default Breadcrumbs;
