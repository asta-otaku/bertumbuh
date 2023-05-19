import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { ReactComponent as Leaf } from "../../assets/leaf.svg";
import { ReactComponent as FlowerBed } from "../../assets/flowerBed.svg";
import { ReactComponent as Tree } from "../../assets/tree.svg";

function Hero() {
  return (
    <div className="lg:mx-[72px] md:mx-[50px] mx-[35px] lg:mt-[94px] md:mt-[45px] mt-10">
      <div className="lg:pt-[45px] pt-5 pl-[45px] pl-5 bg-[#2a9d8f1a] flex flex-col md:flex-row justify-even">
        <div>
          <h2 className="font-medium lg:text-6xl text-[30px] lg:leading-[90px] leading-[44px] lg:w-[82%] md:w-[450px] w-[300px] text-[#272727]">
            Bersama Lindungi Bumi Kita{" "}
            <span className="hidden md:inline">Untuk Masa Depan</span>
          </h2>
          <p className="lg:mt-[35px] md:mt-[15px] mt-[10px] lg:text-xl text-lg text-[#515151] text-justify w-[300px] md:w-[340px] lg:w-[520px] leading-[30px]">
            Kami bermimpi untuk menanam lebih dari 10 juta pohon dan menciptakan
            dunia yang lebih indah dan asri untuk kita, dia, dan semua.
          </p>
          <div className="flex flex-col md:flex-row lg:mt-[72px] md:mt-10 mb-16">
            <button className="px-[11px] mb-4 md:mb-0 py-2 text-white bg-green border border-green mr-6 w-[250px] font-medium text-xl text-white">
              Eksplorasi Bertumbuh
            </button>
            <button className="flex items-center py-[14px] px-5 border-2 border-green w-[190px] font-medium text-xl text-[#515151]">
              <BsFillPlayFill fill="#21A099" className="mr-[14px]" /> Lihat
              Video
            </button>
          </div>
        </div>
        <Tree className="self-start md:self-center ml-0 lg:ml-[-22%]" />
      </div>
      <ul className="flex mt-6 font-semibold text-[28px] text-[#A6A6A6]">
        <li className="mr-[45px]">DITLANCE</li>
        <li className="mr-[35px]">OWTHEST</li>
        <li className="mr-[35px]">NEOVASI</li>
        <li>ONAGO</li>
      </ul>
      <div className="mt-[150px] flex items-center justify-center">
        <Leaf />
        <div className="ml-[68px]">
          <h2 className="font-medium text-[54px] text-[#535353]">1.351.003</h2>
          <h4 className="text-green font-medium text-[26px]">
            Pohon yang Tertanam
          </h4>
        </div>
      </div>
      <div className="mt-[150px] flex items-center justify-center">
        <FlowerBed />
        <div className="ml-[104px]">
          <h3 className="text-green font-medium text-[26px]">Tentang Kami</h3>
          <h2 className="mt-[15px] font-medium text-[48px] text-[#535353] w-[85%]">
            BERTUMBUH - Save The World
          </h2>
          <p className="mt-10 text-xl text-justify w-[540px] text-[#656565]">
            BERTUMBUH - Adalah organisasi non-profit yang mempunyai tujuan untuk
            Melindungi, menjaga, merawat, dan melestarikan pohon-pohon yang ada
            di bumi yang kita pijak sekarang
          </p>
          <button className="mt-20 pl-[20px] pr-[23px] py-2 bg-green text-white">
            Lihat Selengkapnya
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
