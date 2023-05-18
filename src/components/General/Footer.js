import React from "react";
import { ReactComponent as FooterLogo } from "../../assets/footerLogo.svg";
import { ReactComponent as Facebook } from "../../assets/fbIcon.svg";
import { ReactComponent as Twitter } from "../../assets/twIcon.svg";
import { ReactComponent as Instagram } from "../../assets/igIcon.svg";
import { ReactComponent as Mail } from "../../assets/mailIcon.svg";

function Footer() {
  return (
    <div className="bg-green text-white pl-[69px]">
      <div className="flex justify-between pt-[56px]">
        <FooterLogo />
        <div className="flex">
          <div className="mr-[70px]">
            <h4 className="font-medium text-xl">POSTS</h4>
            <ul className="mt-[21px] text-lg">
              <li className="mb-[4px]">Berita</li>
              <li className="mb-[4px]">Event</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="mr-[70px]">
            <h4 className="font-medium text-xl">Programs</h4>
            <ul className="mt-[21px] text-lg">
              <li className="mb-[4px]">Jelaja Bersama</li>
              <li className="mb-[4px]">Tanam Pohon</li>
              <li>Sosialisi Hutan</li>
            </ul>
          </div>
          <div className="w-[300px]">
            <h4 className="font-medium text-xl">Alamat</h4>
            <ul className="mt-[21px] text-lg">
              <li className="mb-[4px]">
                Jl. Kh. Wahid Hasyim No.76, Cipeujeuh Wetan, Kec. Lemahabang,
                Kabupaten Cirebon, Jawa Barat, 45183
              </li>
              <li className="mb-[4px]">(0231) 635308</li>
              <li>surat@smkn1emahabang.sch.id</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-between pt-10 pb-8">
        <div className="flex">
          <Instagram className="mr-[18px]" />
          <Facebook className="mr-[18px]" />
          <Twitter className="mr-[18px]" />
          <Mail />
        </div>
        <p className="mr-[72px]">
          © 2022 BERTUMBUH | SKENSALA - SMKN 1 LEMAHABANG
        </p>
      </div>
    </div>
  );
}

export default Footer;
