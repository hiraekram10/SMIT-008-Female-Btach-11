import React from "react";
import Logo from "../assets/Logo.png"

const Navbar = () => {
  return (
    <div className="w-full py-3.5 px-3.5 items-center flex justify-between bg-[#FFFFFF]">
      <div>
        <img  src={Logo} alt="" />
      </div>
      <div>
        <ul className="flex gap-3">
          <li>
            <a href="" className="text-lg text-[#5E3BEE]">Home</a>
          </li>
          <li>
            <a href="" className="text-lg">About</a>
          </li>
          <li>
            <a href="" className="text-lg">Projects</a>
          </li>
          <li>
            <a href="" className="text-lg">Testimonials</a>
          </li>
        </ul>
      </div>
      <div>
        <button className="border-2 text-[#5E3BEE] border-[#5E3BEE] px-4 px-3"> Contact Me</button>
      </div>
    </div>
  );
};

export default Navbar;
