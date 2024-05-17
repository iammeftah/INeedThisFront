import React from "react";
import logo from "../../recources/valorant.svg";
import { navigationMenu } from "./NavigationMenu";
import { useNavigate } from "react-router-dom";

import Profil from "./Profil";
// :::::::::::::::::::::::::::::::::::::::::::::::::::
const Navigation = () => {




  const navigate = useNavigate();
  return (
    <div className="max-h-screen sticky top-0 ">
      <div className="py-5">
        <img src={logo} alt="image1" height="60px" width="60px" />
      </div>
      <div className="space-y-3 mx-4 sm:my-0">
        {navigationMenu.map((item) => (
          <div
            className="cursor-pointer flex space-x-3 items-center"
            onClick={() =>
              item.title === "Profile"
                ? navigate(`/profile/${5}`)
                : navigate(item.path)
            }
          >
            {item.icon}
            <p className="text-xl">{item.title}</p>
          </div>
        ))}
      </div>
      <div className="my-6">
        <Profil/>
      </div>

    </div>
  );
};
export default Navigation;
