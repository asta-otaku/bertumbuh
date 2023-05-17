import React from "react";
import { ReactComponent as Gardeners } from "../../assets/gardeners.svg";

function Features() {
  return (
    <div className="mt-[150px] px-[70px]">
      <div className="flex items-center justify-center">
        <div className="mr-[90px] pr-">
          <h4 className="font-medium text-green text-[26px]">
            Kami Butuh Kamu
          </h4>
          <h2 className="mt-[15px] font-medium text-[48px] text-[#535353] w-[80%]">
            Kenapa BERTUMBUH Butuh Kamu ?
          </h2>
          <div className="mt-[30px] flex">
            <div className="mr-[87px]">
              <h2 className="font-medium text-[32px] text-[#4A4A4A]">15,3 M</h2>
              <h4 className="text-xl text-[#656565]">Pohon ditebang</h4>
            </div>
            <div>
              <h2 className="font-medium text-[32px] text-[#4A4A4A]">
                14,7 ha
              </h2>
              <h4 className="text-xl text-[#656565]">Hutan ditebang</h4>
            </div>
          </div>
          <p className="mt-10 text-xl leading-[30px] text-justify w-[540px] text-[#656565]">
            15,3 Milyar pohon setiap tahun ditebang di dunia serta hilangnya
            14,7 hektare lahan hutan hilang di indonesia. Hali ini menyebabkan
            bumi tidak stabil dan kami mengajak kamu untuk bergabung dan meraih
            tujuan bersama
          </p>
        </div>
        <Gardeners />
      </div>
    </div>
  );
}

export default Features;
