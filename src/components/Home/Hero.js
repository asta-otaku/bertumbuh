import React from "react";
import HeroBackground from "../../assets/hero-bg.png";
import { BsFillPlayFill } from "react-icons/bs";
import { ReactComponent as Leaf } from "../../assets/leaf.svg";
import { ReactComponent as FlowerBed } from "../../assets/flowerBed.svg";

function Hero() {
  return (
    <div className="px-[72px] mt-[94px]">
      <div
        style={{ backgroundImage: `url(${HeroBackground})` }}
        className="pt-[45px] pl-[45px]"
      >
        <h2 className="font-medium text-6xl leading-[90px] w-[850px] text-[#272727]">
          Bersama Lindungi Bumi Kita Untuk Masa Depan
        </h2>
        <p className="mt-[35px] text-xl text-[#515151] text-justify w-[520px] leading-[30px]">
          Kami bermimpi untuk menanam lebih dari 10 juta pohon dan menciptakan
          dunia yang lebih indah dan asri untuk kita, dia, dan semua.
        </p>
        <div className="flex mt-[72px] mb-[122px]">
          <button className="px-[11px] py-2 text-white bg-green border border-green mr-6 w-[250px] font-medium text-xl text-white">
            Eksplorasi Bertumbuh
          </button>
          <button className="flex items-center py-[14px] px-5 border-2 border-green w-[190px] font-medium text-xl text-[#515151]">
            <BsFillPlayFill fill="#21A099" className="mr-[14px]" /> Lihat Video
          </button>
        </div>
        <ul className="pb-4 flex ml-[-45px] font-semibold text-[28px] text-[#A6A6A6]">
          <li className="mr-[45px]">DITLANCE</li>
          <li className="mr-[35px]">OWTHEST</li>
          <li className="mr-[35px]">NEOVASI</li>
          <li>ONAGO</li>
        </ul>
      </div>
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
