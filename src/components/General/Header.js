import React from "react";

function Header() {
  return (
    <div className="bg-[#FFFFFF]">
      <div className="flex justify-around">
        <div></div>
        <div>
          <div className="flex px-4 bg-[#F6F8FD]">
            <input
              className="outline-none border-none fon"
              placeholder="Cari blog dan artikel disini ..."
            />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Header;
