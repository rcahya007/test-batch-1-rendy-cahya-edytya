import React, { useState } from 'react';

import logo from '@/../../public/icons/logo.svg';
import menu_bar from '@/../../public/icons/menu_bar.svg';

const ProfileLayout = ({ children, head }) => {
  const [open, setOpen] = useState(false);
  return (
    <section className="w-full h-full">
      {head}
      <nav className="mx-4 my-10 flex justify-between border-2 rounded-lg bg-white border-grey-15 relative">
        <div
          className={`absolute bottom-0 left-0 w-full transition-all h-full bg-white ${
            open
              ? 'visible opacity-100 translate-y-full'
              : 'invisible opacity-0 translate-y-0'
          }`}
        >
          <a href="#home">
            <div className="w-full border-grey-15 p-5 bg-white border-2 border-b-0">
              <p className="font-raleway font-bold text-xl text-grey-10">
                Home
              </p>
            </div>
          </a>
          <a href="#about">
            <div className="w-full  border-grey-15 p-5 bg-white border-2 border-b-0">
              <p className="font-raleway font-bold text-xl text-grey-10">
                About
              </p>
            </div>
          </a>
          <a href="#skills">
            <div className="w-full  border-grey-15 p-5 bg-white border-2 border-b-0">
              <p className="font-raleway font-bold text-xl text-grey-10">
                Skills
              </p>
            </div>
          </a>
          <a href="#experience">
            <div className="w-full  border-grey-15 p-5 bg-white border-2 border-b-0">
              <p className="font-raleway font-bold text-xl text-grey-10">
                Experience
              </p>
            </div>
          </a>
          <a href="#projects">
            <div className="w-full  border-grey-15 p-5 bg-white border-2 border-b-0">
              <p className="font-raleway font-bold text-xl text-grey-10">
                Projects
              </p>
            </div>
          </a>
          <a href="#contact">
            <div className="w-full border-b-2 border-grey-15 p-5 bg-white border-2 rounded-bl-[6px] rounded-br-[6px]">
              <p className="font-raleway font-bold text-xl text-grey-10">
                Contact
              </p>
            </div>
          </a>
        </div>
        <a
          href="#"
          className="flex gap-x-1 items-center justify-center px-[20px] py-4 bg-orange-65 border-r-2 border-r-grey-15 rounded-s-[6px]"
        >
          <img
            src={logo}
            alt="logo"
            className="w-full h-full max-w-[40px] max-h-[40px] object-cover"
          />
          <p className="font-raleway font-bold text-lg text-grey-10">
            Rendy Cahya
          </p>
        </a>

        <div className="hidden xl:flex">
          <a
            href="#home"
            className="px-[30px] py-[21px] h-full bg-white border-l-2 border-x-grey-15"
          >
            <p className="font-outfit font-medium text-[16px] leading-[150%] text-grey-15">
              Home
            </p>
          </a>
          <a
            href="#about"
            className="px-[30px] py-[21px] h-full bg-white border-l-2 border-x-grey-15"
          >
            <p className="font-outfit font-medium text-[16px] leading-[150%] text-grey-15">
              About
            </p>
          </a>
          <a
            href="#skills"
            className="px-[30px] py-[21px] h-full bg-white border-l-2 border-x-grey-15"
          >
            <p className="font-outfit font-medium text-[16px] leading-[150%] text-grey-15">
              Skills
            </p>
          </a>
          <a
            href="#experience"
            className="px-[30px] py-[21px] h-full bg-white border-l-2 border-x-grey-15"
          >
            <p className="font-outfit font-medium text-[16px] leading-[150%] text-grey-15">
              Experience
            </p>
          </a>
          <a
            href="#projects"
            className="px-[30px] py-[21px] h-full bg-white border-l-2 border-x-grey-15"
          >
            <p className="font-outfit font-medium text-[16px] leading-[150%] text-grey-15">
              Projects
            </p>
          </a>
          <a
            href="#contact"
            className="px-[30px] py-[21px] h-full bg-orange-75 border-l-2 border-x-grey-15"
          >
            <p className="font-outfit font-medium text-[16px] leading-[150%] text-grey-15">
              Contact
            </p>
          </a>
        </div>

        <div
          className="px-[30px] py-[17px] bg-orange-95 flex justify-center items-center border-l-2 border-l-grey-15 cursor-pointer xl:hidden rounded-e-[6px]"
          onClick={() => setOpen(!open)}
        >
          <img
            src={menu_bar}
            alt="menu_bar"
            className="w-full h-full max-w-[28px] max-h-[28px] object-cover"
          />
        </div>
      </nav>
      {children}
    </section>
  );
};

export default ProfileLayout;
