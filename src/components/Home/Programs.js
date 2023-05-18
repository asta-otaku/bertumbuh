import React from "react";
import { ReactComponent as Forest } from "../../assets/forest.svg";
import { ReactComponent as Program1 } from "../../assets/program1.svg";
import { ReactComponent as Program2 } from "../../assets/program2.svg";
import { ReactComponent as Program3 } from "../../assets/program3.svg";
import { ReactComponent as Program4 } from "../../assets/program4.svg";

function Programs() {
  return (
    <div className="my-[150px] px-[70px]">
      <h4 className="text-green font-medium text-[26px]">Baca Tulisan Kami</h4>
      <h2 className="mt-[15px] font-medium text-[48px] text-[#4D4D4D]">
        Berita, Artikel & Event Terbaru
      </h2>
      <p className="mt-5 text-xl text-[#656565] w-[50%]">
        Baca dan ikuti event serta program-program yang kami lakukan untuk bumi
        yang lebih baik
      </p>
      <div className="mt-10 flex flex-col items-center">
        <div className="flex justify-center">
          <div className="mr-[77px]">
            <Forest />
            <h4 className="mt-6 font-medium text-[26px] text-[4D4D4D] w-[95%]">
              Selamatkan Hutan Untuk Bumi yang Sehat dan Asri
            </h4>
            <p className="mt-[18px] text-xl text-justify text-[#656565] w-[600px]">
              Hutan telah banyak memberi manfaat bagi kita semua. Namun melihat
              data sekarang hutan di dunia terutama di Indonesia mulai terancam.
              Untuk tidak menimbulkan kerusakan yang lebih parah kita harus
              mencegahnya dengan cara. Seperti ....
            </p>
          </div>
          <div>
            <div className="flex">
              <div className="mr-6">
                <h2 className="font-medium text-2xl text-[#4D4D4D] w-[440px]">
                  Kenali Pengertian, Fungsi dan Jenis Hutan
                </h2>
                <p className="mt-[25px] text-xl text-[#656565]">
                  1 Januari 2022
                </p>
              </div>
              <Program1 />
            </div>
            <div className="flex mt-[53px]">
              <div className="mr-6">
                <h2 className="font-medium text-2xl text-[#4D4D4D] w-[440px]">
                  Kegiatan Naik Gunung Ciremai
                  <br />
                  bersama BERTUMBUH
                </h2>
                <p className="mt-[25px] text-xl text-[#656565]">
                  10 Desember 2021
                </p>
              </div>
              <Program2 />
            </div>
            <div className="flex mt-[53px]">
              <div className="mr-6">
                <h2 className="font-medium text-2xl text-[#4D4D4D] w-[440px]">
                  Program : Pelatihan Cara Menanam dan Merawat Pohon
                </h2>
                <p className="mt-[25px] text-xl text-[#656565]">
                  9 Desember 2021
                </p>
              </div>
              <Program3 />
            </div>
            <div className="flex mt-[53px]">
              <div className="mr-6">
                <h2 className="font-medium text-2xl text-[#4D4D4D] w-[440px]">
                  BERTUMBUH Menjadi Platform Peduli Bumi Terbaik Versi CCNN
                </h2>
                <p className="mt-[25px] text-xl text-[#656565]">
                  1 Desember 2022
                </p>
              </div>
              <Program4 />
            </div>
          </div>
        </div>
        <button className="mt-20 py-2 pl-5 pr-[23px] bg-green text-white">
          Lihat Selengkapnya
        </button>
      </div>
      <div className="mt-[150px] pb-4 flex flex-col items-center">
        <h2 className="mt-5 font-inter font-semibold text-[48px] text-[#313131]">
          Subscribe Newsletter Kami
        </h2>
        <p className="mt-6 text-lg text-[#828282] text-center w-[40%]">
          Jangan sampai terlewat informasi serta berita dari kami. Subscribe
          sekarang!
        </p>
        <div className="mt-[45px] py-[13px] pr-[14px] pl-[28px] w-[620px] flex items-center border border-green">
          <input
            type="email"
            placeholder="Masukkan email aktif anda..."
            className="font-inter font-medium outline-none border-none w-[75%]"
          />
          <button className="py-[14px] px-[36px] bg-green text-white font-inter font-medium">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Programs;
