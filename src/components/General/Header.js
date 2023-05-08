import React, { useState } from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { BiChevronDown, BiSearchAlt2 } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrFormClose } from "react-icons/gr";

function Header() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="bg-[#FFFFFF]">
      <div className="flex justify-between py-2 md:py-6 px-8 border-b border-[#6D6D6D]">
        <div className="flex items-center">
          <Logo className="w-8 h-8 md:w-full md:h-full" />
          <h3 className="mx-4 font-semibold text-lg md:text-xl lg:text-[26px] text-[#34364A]">
            BERTUMBUH
          </h3>
          <div className="hidden lg:flex">
            <h5 className="font-medium text-xl mr-2 text-[#6D6D6D]">
              Programs
            </h5>
            <BiChevronDown size={24} color="#6D6D6D" />
          </div>
        </div>
        <div className="flex">
          <div className="hidden lg:flex items-center px-4 bg-[#F6F8FD] w-[400px]">
            <input
              className="outline-none border- bg-[#F6F8FD] w-[95%]"
              placeholder="Cari blog dan artikel disini ..."
            />
            <BiSearchAlt2 />
          </div>
          <div className="text-white bg-green font-medium flex items-center justify-center px-4 text-sm md:text-lg lg:text-xl ml-[30px]">
            Bergabung
          </div>
        </div>
      </div>
      {toggle ? (
        <GrFormClose
          className="mt-4 ml-8 block lg:hidden"
          style={{ height: "24px", width: "24px" }}
          onClick={() => setToggle(!toggle)}
        />
      ) : (
        <RxHamburgerMenu
          className="mt-4 ml-8 block lg:hidden"
          style={{ height: "24px", width: "24px" }}
          onClick={() => setToggle(!toggle)}
        />
      )}
      {toggle && (
        <ul className="text-[#6D6D6D] block lg:hidden text-sm mt-2 ml-10">
          <li>Home</li>
          <li>Kemitraan</li>
          <li>Tentang</li>
          <li>Kami Butuh Kamu</li>
          <li>Post</li>
          <li>Newsletter</li>
        </ul>
      )}
      <ul className="hidden lg:flex pt-6 pl-8 font-medium text-xl text-[#6D6D6D]">
        <li className="mr-8">Home</li>
        <li className="mr-8">Kemitraan</li>
        <li className="mr-8">Tentang</li>
        <li className="mr-8">Kami Butuh Kamu</li>
        <li className="mr-8">Post</li>
        <li>Newsletter</li>
      </ul>
    </div>
  );
}

export default Header;
