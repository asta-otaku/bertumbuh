import React from "react";
import { ReactComponent as Gardeners } from "../../assets/gardeners.svg";
import { ReactComponent as Feature1 } from "../../assets/feature1.svg";
import { ReactComponent as Feature2 } from "../../assets/feature2.svg";
import { ReactComponent as Feature3 } from "../../assets/feature3.svg";
import { BsArrowRight } from "react-icons/bs";
import { Carousel } from "antd";

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
      <div className="mt-[150px]">
        <div className="flex flex-col items-center text-center pb-[60px]">
          <h4 className="text-green font-medium ">Menjadi Bagian Bertumbuh</h4>
          <h2 className="mt-[10px] font-medium text-[54px] w-[65%] text-[#4D4D4D]">
            Buat Hal Sederhana Jadi Lebih Bermakna
          </h2>
          <p className="mt-5 text-xl text-[#656565] w-[55%]">
            Ciptakan setiap kegiatan jadi lebih bermakna dan bermanfaat untuk
            kita, dia dan semua
          </p>
        </div>
        <Carousel autoplay className="bg-green rounded-lg pb-20">
          <div>
            <div className="mt-[44px] px-10 pt-10 pb-[35px] bg-[#FAFAFA] w-[395px] mx-auto rounded-xl shadow-xl">
              <Feature1 className="ml-[-22%]" />
              <p className="mt-5 text-justify text-[#828282] w-[300px]">
                Anda dapat membantu dengan berdonasi untuk biaya penanaman,
                perwatan, bibit dan biaya oprasional lainnya
              </p>
              <h3 className="mt-[25px] text-green flex items-center">
                Menjadi Donatur <BsArrowRight className="ml-2" />
              </h3>
            </div>
          </div>
          <div>
            <div className="mt-[44px] px-10 py-10 bg-[#FAFAFA] w-[425px] mx-auto rounded-xl shadow-xl">
              <Feature2 className="ml-[-22%]" />
              <p className="mt-5 text-justify text-[#828282] w-[330px]">
                Kamu dapat membantu bertumbuh dengan menjadi relawan kami. Kamu
                dapat langsung menanam pohon, membantu berkebun, melakukan
                sosialisasi dan program-program menarik lainnya
              </p>
              <h3 className="mt-[22px] text-green flex items-center">
                Menjadi Relawan <BsArrowRight className="ml-2" />
              </h3>
            </div>
          </div>
          <div>
            <div className="mt-[44px] px-10 pt-10 pb-[35px] bg-[#FAFAFA] w-[395px] mx-auto rounded-xl shadow-xl">
              <Feature3 className="ml-[-22%]" />
              <p className="mt-5 text-justify text-[#828282] w-[300px]">
                Kamu akan belajar tentang cara menanam pohon, merawat pohon
                serta hal lain dengan bergabung sebagai petani
              </p>
              <h3 className="mt-[25px] text-green flex items-center">
                Menjadi Petani <BsArrowRight className="ml-2" />
              </h3>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Features;
