import ProfileLayout from '@/Layouts/ProfileLayout';
import { Head } from '@inertiajs/react';
import React from 'react';
import avatar from '@/../../public/icons/avataaars.svg';
import abstract_box from '@/../../public/icons/abstract_box.svg';
import {
  BsBootstrap,
  BsFiletypeCss,
  BsFiletypeHtml,
  BsFiletypePhp,
} from 'react-icons/bs';
import { RiJavascriptFill } from 'react-icons/ri';
import {
  SiDart,
  SiExpress,
  SiFlutter,
  SiLaravel,
  SiMysql,
  SiReact,
  SiStrapi,
  SiTailwindcss,
} from 'react-icons/si';
import {
  FaGithub,
  FaInstagram,
  FaLocationDot,
  FaPhone,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa6';

import { MdOutlineEmail } from 'react-icons/md';

const Profile = () => {
  return (
    <>
      {/* Hero */}
      <section
        className="w-full h-full flex justify-center items-center py-10"
        id="home"
      >
        <div className="flex flex-col gap-y-6 justify-center items-center px-4">
          <img
            src={avatar}
            alt="avatar"
            className="object-cover w-80 hover:animate-pulse"
          />
          <div className="flex flex-col gap-y-4 justify-center items-center">
            <div className="flex flex-col gap-y-4 justify-center items-center hover:animate-bounce py-7">
              <p className="font-outfit font-medium text-[16px] leading-[150%] text-grey-15 underline underline-offset-8 ">
                Welcome to my profile
              </p>
              <h1 className="font-raleway font-extrabold text-[30px] text-grey-10 leading-[130%] text-center">
                Hi, I'm Rendy Cahya Edytya
              </h1>
            </div>
            <p className="font-outfit font-medium text-[16px] leading-[150%] text-grey-15 md:w-[700px]">
              I'm a Junior Web ~/ Mobile Developer..., and I think that's a
              fullstack developer. Okey next, I very love doing
              slicing-design-to-code, I can design but, just little bit :').
              <br />
              <br />
              <span className="font-bold">*Note: </span> Cat lover, Badminton
              lover, Movie Lover, & Anime Lover.
            </p>
            <p className="font-outfit font-medium text-[16px] leading-[150%] text-grey-15 md:pt-10 md:w-full">
              Just hover and click, you can see{' '}
              <span className="font-bold underline">
                <a href="#">my portfolio,</a>
              </span>{' '}
              and you can also see{' '}
              <span className="font-bold underline">
                <a
                  href="https://drive.google.com/file/d/1mDOkEgibbUvB3AeMZYu6qSKKDi22KLz_/view?usp=sharing"
                  target="_blank"
                >
                  My CV
                </a>
              </span>
              .
            </p>
          </div>
        </div>
      </section>
      {/* About */}
      <section
        className="w-full h-full flex justify-center items-center py-20 px-4 md:px-24"
        id="about"
      >
        <div className="px-[30px] py-[50px] relative border-2 border-grey-15 rounded-[10px] shadow-my-shadow w-full flex justify-center items-center flex-col hover:scale-105 transition-all">
          <img
            src={abstract_box}
            alt="abstract_box"
            className="absolute left-0 top-0 object-cover w-[100px] h-[100px]"
          />
          <div className="border-2 border-grey-15 rounded-[10px] w-fit h-fit px-4 py-2 mb-3 bg-white">
            <p className="font-outfit font-medium text-[14px] leading-[150%] text-grey-20">
              About me
            </p>
          </div>
          <div className="flex flex-col gap-y-[20px] text-center">
            <h1 className="font-raleway font-bold text-[28px] leading-[130%] text-grey-10">
              Let me introduce my self
            </h1>
            <div className="flex flex-col gap-y-2 font-outfit font-medium text-[16px] leading-[150%] text-grey-20">
              <p>
                My name is Rendy Cahya Edytya, you can call me Rendy or Cahya
                whatever you want. I'm from Sidoarjo, Indonesia. Graduated from
                17 August 1945 Surabaya University with a Bachelor degree in
                Informatics (Informatic of Technic).
              </p>
              <p>
                I love exploring and learning new things, for now i'm prefer
                learning more about mobile developers, especially mobile dev
                with flutter. Outside of developing, I have a routine of playing
                Badminton, and listening music. Now i'm ready for{' '}
                <span className="font-bold">#OpenToWork </span>
                and <span className="font-bold">Collaboration</span>.
              </p>
            </div>
          </div>
          <button className="mt-10 px-[34px] py-4 w-full bg-orange-75 border-2 border-grey-15 rounded-[8px] font-outfit font-medium text-[18px] leading-[150%] text-grey-15">
            Contact Me
          </button>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 md:px-24" id="skills">
        <div className="px-4 flex flex-col w-full justify-center items-center">
          <div className="border-2 border-grey-15 rounded-[10px] w-fit h-fit px-4 py-2 mb-3 bg-white">
            <p className="font-outfit font-medium text-[14px] leading-[150%] text-grey-20">
              Skills
            </p>
          </div>
          <h1 className="font-raleway font-bold text-[38px] leading-[130%] text-grey-10">
            Basic Skills
          </h1>
          <p className="font-outfit font-medium text-[16px] text-grey-20 leading-[150%] text-center">
            Below is a list of my skills in creating responsive and dynamic
            websites and applications. My experience with HTML, CSS, JavaScript,
            Laravel, Flutter, and other technologies has provided me with a
            strong foundation for developing adaptive and intuitive sites,
            delivering consistent design and smooth functionality across various
            devices.
          </p>
        </div>

        <div className="w-full h-full pt-16 pb-10 px-4">
          <div className="grid grid-cols-2 gap-x-8 gap-y-10">
            <div className="bg-white border-2 border-grey-15 rounded-[10px] w-fit h-fit shadow-my-shadow p-[24px] group hover:scale-105 transition-all relative cursor-pointer">
              <div className="absolute bg-orange-90 p-2 rounded-[8px] border-2 border-grey-15 top-1/4 group-hover:top-0 -translate-y-1/2 left-[10%] group-hover:opacity-100 opacity-0 transition-all">
                <BsFiletypeHtml size={24} />
              </div>
              <p className="font-raleway font-bold text-[22px] text-grey-10 leading-[130%] group-hover:animate-bounce">
                HTML
              </p>
            </div>
            <div className="bg-white border-2 border-grey-15 rounded-[10px] w-fit h-fit shadow-my-shadow p-[24px] group hover:scale-105 transition-all relative cursor-pointer">
              <div className="absolute bg-orange-90 p-2 rounded-[8px] border-2 border-grey-15 top-1/4 group-hover:top-0 -translate-y-1/2 left-[10%] group-hover:opacity-100 opacity-0 transition-all">
                <BsFiletypeCss size={24} />
              </div>
              <p className="font-raleway font-bold text-[22px] text-grey-10 leading-[130%] group-hover:animate-bounce">
                CSS
              </p>
            </div>
            <div className="bg-white border-2 border-grey-15 rounded-[10px] w-fit h-fit shadow-my-shadow p-[24px] group hover:scale-105 transition-all relative cursor-pointer">
              <div className="absolute bg-orange-90 p-2 rounded-[8px] border-2 border-grey-15 top-1/4 group-hover:top-0 -translate-y-1/2 left-[10%] group-hover:opacity-100 opacity-0 transition-all">
                <RiJavascriptFill size={24} />
              </div>
              <p className="font-raleway font-bold text-[22px] text-grey-10 leading-[130%] group-hover:animate-bounce">
                Javascript
              </p>
            </div>
            <div className="bg-white border-2 border-grey-15 rounded-[10px] w-fit h-fit shadow-my-shadow p-[24px] group hover:scale-105 transition-all relative cursor-pointer">
              <div className="absolute bg-orange-90 p-2 rounded-[8px] border-2 border-grey-15 top-1/4 group-hover:top-0 -translate-y-1/2 left-[10%] group-hover:opacity-100 opacity-0 transition-all">
                <BsFiletypePhp size={24} />
              </div>
              <p className="font-raleway font-bold text-[22px] text-grey-10 leading-[130%] group-hover:animate-bounce">
                PHP
              </p>
            </div>
            <div className="bg-white border-2 border-grey-15 rounded-[10px] w-fit h-fit shadow-my-shadow p-[24px] group hover:scale-105 transition-all relative cursor-pointer">
              <div className="absolute bg-orange-90 p-2 rounded-[8px] border-2 border-grey-15 top-1/4 group-hover:top-0 -translate-y-1/2 left-[10%] group-hover:opacity-100 opacity-0 transition-all">
                <SiLaravel size={24} />
              </div>
              <p className="font-raleway font-bold text-[22px] text-grey-10 leading-[130%] group-hover:animate-bounce">
                Laravel
              </p>
            </div>
            <div className="bg-white border-2 border-grey-15 rounded-[10px] w-fit h-fit shadow-my-shadow p-[24px] group hover:scale-105 transition-all relative cursor-pointer">
              <div className="absolute bg-orange-90 p-2 rounded-[8px] border-2 border-grey-15 top-1/4 group-hover:top-0 -translate-y-1/2 left-[10%] group-hover:opacity-100 opacity-0 transition-all">
                <BsBootstrap size={24} />
              </div>
              <p className="font-raleway font-bold text-[22px] text-grey-10 leading-[130%] group-hover:animate-bounce">
                Bootstrap
              </p>
            </div>
            <div className="bg-white border-2 border-grey-15 rounded-[10px] w-fit h-fit shadow-my-shadow p-[24px] group hover:scale-105 transition-all relative cursor-pointer">
              <div className="absolute bg-orange-90 p-2 rounded-[8px] border-2 border-grey-15 top-1/4 group-hover:top-0 -translate-y-1/2 left-[10%] group-hover:opacity-100 opacity-0 transition-all">
                <SiTailwindcss size={24} />
              </div>
              <p className="font-raleway font-bold text-[22px] text-grey-10 leading-[130%] group-hover:animate-bounce">
                TailwindCSS
              </p>
            </div>
            <div className="bg-white border-2 border-grey-15 rounded-[10px] w-fit h-fit shadow-my-shadow p-[24px] group hover:scale-105 transition-all relative cursor-pointer">
              <div className="absolute bg-orange-90 p-2 rounded-[8px] border-2 border-grey-15 top-1/4 group-hover:top-0 -translate-y-1/2 left-[10%] group-hover:opacity-100 opacity-0 transition-all">
                <SiMysql size={24} />
              </div>
              <p className="font-raleway font-bold text-[22px] text-grey-10 leading-[130%] group-hover:animate-bounce">
                MySQL
              </p>
            </div>
            <div className="bg-white border-2 border-grey-15 rounded-[10px] w-fit h-fit shadow-my-shadow p-[24px] group hover:scale-105 transition-all relative cursor-pointer">
              <div className="absolute bg-orange-90 p-2 rounded-[8px] border-2 border-grey-15 top-1/4 group-hover:top-0 -translate-y-1/2 left-[10%] group-hover:opacity-100 opacity-0 transition-all">
                <SiReact size={24} />
              </div>
              <p className="font-raleway font-bold text-[22px] text-grey-10 leading-[130%] group-hover:animate-bounce">
                React
              </p>
            </div>
            <div className="bg-white border-2 border-grey-15 rounded-[10px] w-fit h-fit shadow-my-shadow p-[24px] group hover:scale-105 transition-all relative cursor-pointer">
              <div className="absolute bg-orange-90 p-2 rounded-[8px] border-2 border-grey-15 top-1/4 group-hover:top-0 -translate-y-1/2 left-[10%] group-hover:opacity-100 opacity-0 transition-all">
                <SiDart size={24} />
              </div>
              <p className="font-raleway font-bold text-[22px] text-grey-10 leading-[130%] group-hover:animate-bounce">
                Dart
              </p>
            </div>
            <div className="bg-white border-2 border-grey-15 rounded-[10px] w-fit h-fit shadow-my-shadow p-[24px] group hover:scale-105 transition-all relative cursor-pointer">
              <div className="absolute bg-orange-90 p-2 rounded-[8px] border-2 border-grey-15 top-1/4 group-hover:top-0 -translate-y-1/2 left-[10%] group-hover:opacity-100 opacity-0 transition-all">
                <SiFlutter size={24} />
              </div>
              <p className="font-raleway font-bold text-[22px] text-grey-10 leading-[130%] group-hover:animate-bounce">
                Flutter
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-20 md:px-24" id="experience">
        <div className="px-4 flex flex-col w-full justify-center items-center">
          <div className="border-2 border-grey-15 rounded-[10px] w-fit h-fit px-4 py-2 mb-3 bg-white">
            <p className="font-outfit font-medium text-[14px] leading-[150%] text-grey-20">
              Experience
            </p>
          </div>
          <h1 className="font-raleway font-bold text-[22px] leading-[130%] text-grey-10 text-center">
            Here are some of my work experiences
          </h1>
          <div className="py-20 flex flex-col items-center justify-center">
            <div className="px-[24px] py-[10px] border-2 border-grey-15 rounded-[10px] bg-white shadow-my-shadow relative mb-8 w-fit flex justify-center items-center">
              <div className="bg-black w-[2px] h-1/2 rounded-full absolute -bottom-1/2 right-1/2 translate-x-1/2 ring-[4px] ring-orange-80"></div>
              <div className="bg-white w-[20px] h-[20px] rounded-full border-2 border-grey-15 absolute bottom-0 right-1/2 translate-x-1/2 translate-y-1/2"></div>
              <p className="font-raleway font-extrabold text-[40px] text-grey-10 leading-[130%]">
                01
              </p>
            </div>
            <div className="p-[30px] border-2 borderhrey-15 rounded-[10px] bg-white shadow-my-shadow relative w-full">
              <div className="flex flex-col gap-y-[14px]">
                <div className="flex flex-col">
                  <p className="font-raleway font-normal text-[26px] text-grey-10 leading-[130%]">
                    <span className="font-bold">IT Support</span> - PT. Kode
                    Kreatif Digital
                  </p>
                  <p className="font-outfit font-medium text-[16px] leading-[150%] text-grey-20">
                    November 2021 - December 2022
                  </p>
                </div>
                <div className="w-full px-4 py-4">
                  <ul className="list-disc font-raleway font-normal text-[16px] text-grey-10 leading-[130%] flex gap-y-2 flex-col">
                    <li>Handle customers and repair computers and laptops.</li>
                    <li>
                      Carry out inventory data or stock product in online stores
                      (Online Market place: Shopee, Tokopedia, Olx, Facebook
                      Marketplace) and offline store.
                    </li>
                    <li>
                      Appointed as one of the online and offline Microsoft
                      Office training teachers.
                    </li>
                    <li>Installed CCTV at several partners.</li>
                    <li>
                      Create a website for recording shop stock, shop expenses,
                      and incoming or outgoing goods receipts which can be
                      viewed and printed via thermal print.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-black w-[2px] h-1/6 rounded-full absolute bottom-0 translate-y-full -z-10 right-1/2 translate-x-1/2 ring-[4px] ring-orange-80 md:h-1/2"></div>
            </div>
          </div>
          <div className="pb-20 flex flex-col items-center justify-center">
            <div className="px-[24px] py-[10px] border-2 border-grey-15 rounded-[10px] bg-white shadow-my-shadow relative mb-8 w-fit flex justify-center items-center">
              <div className="bg-black w-[2px] h-1/2 rounded-full absolute -bottom-1/2 right-1/2 translate-x-1/2 ring-[4px] ring-orange-80"></div>
              <div className="bg-white w-[20px] h-[20px] rounded-full border-2 border-grey-15 absolute bottom-0 right-1/2 translate-x-1/2 translate-y-1/2"></div>
              <p className="font-raleway font-extrabold text-[40px] text-grey-10 leading-[130%]">
                02
              </p>
            </div>
            <div className="p-[30px] border-2 borderhrey-15 rounded-[10px] bg-white shadow-my-shadow relative w-full">
              <div className="flex flex-col gap-y-[14px]">
                <div className="flex flex-col">
                  <p className="font-raleway font-normal text-[26px] text-grey-10 leading-[130%]">
                    <span className="font-bold">Internship Web Developer</span>{' '}
                    - CV. Mitra Informatika
                  </p>
                  <p className="font-outfit font-medium text-[16px] leading-[150%] text-grey-20">
                    Januari 2021 - Maret 2021
                  </p>
                </div>
                <div className="w-full px-4 py-4">
                  <ul className="list-disc font-raleway font-normal text-[16px] text-grey-10 leading-[130%] flex gap-y-2 flex-col">
                    <li>
                      Create a credit sales website using an integrated laravel
                      framework, using a floppy pay for payment gateway and
                      connecting Mobile Pulsa as a credit provider.
                    </li>
                  </ul>
                </div>
              </div>
              {/* <div className="bg-black w-[2px] h-1/6 rounded-full absolute bottom-0 translate-y-full -z-10 right-1/2 translate-x-1/2 ring-[4px] ring-orange-80"></div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20" id="projects">
        <div className="px-4 flex flex-col w-full justify-center items-center">
          <div className="border-2 border-grey-15 rounded-[10px] w-fit h-fit px-4 py-2 mb-3 bg-white">
            <p className="font-outfit font-medium text-[14px] leading-[150%] text-grey-20">
              Projects
            </p>
          </div>
          <div className="flex flex-col pb-10">
            <h1 className="font-raleway font-bold text-[22px] leading-[130%] text-grey-10 text-center">
              Coming Soon & Finished.
            </h1>
            <p className="font-outfit font-medium text-[16px] text-grey-20 leading-[150%] text-center">
              Below are some of my projects, some of which are still in the
              development stage:
            </p>
          </div>

          <div className="flex flex-col gap-y-10 md:grid md:grid-cols-2 md:gap-20 md:px-10">
            <div className="h-fit bg-white relative p-[30px] border-2 border-grey-15 shadow-my-shadow rounded-[12px] flex flex-col justify-center items-center gap-y-[30px]">
              <img
                src="https://opwarnet.my.id/assets/shopco-47135c21.png"
                alt="project"
                className="w-[298px] h-[227px] rounded-[10px] object-cover border-2 border-grey-10 xl:w-full xl:h-[380px]"
              />
              <div className="flex-col gap-y-3 w-full flex">
                <div className="flex flex-col">
                  <p className="font-raleway font-bold text-[22px] leading-[130%] text-grey-10">
                    Shop.co
                  </p>
                  <p className="font-outfit font-medium text-[16px] text-grey-30 leading-[150%]">
                    Multi-Platform Application
                  </p>
                </div>
                <div className="flex flex-col font-raleway font-normal text-[14px] text-grey-10 leading-[130%] ">
                  <p>
                    Final project for ID Camp 2023 Multi-Platform Application
                    Dicoding.
                  </p>
                </div>
                <div className="flex gap-x-2">
                  <div className="cursor-pointer bg-orange-90 p-2 rounded-[8px] border-2 border-grey-15 top-1/4 relative group ">
                    <p className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-raleway font-normal text-[12px] text-grey-10 leading-[130%] transition-all group-hover:visible group-hover:-top-1/3 bg-white py-1 px-2 rounded-[8px] border-2 border-grey-15 invisible opacity-0 group-hover:opacity-100">
                      Dart
                    </p>
                    <SiDart size={24} />
                  </div>
                  <div className="cursor-pointer bg-orange-90 p-2 rounded-[8px] border-2 border-grey-15 top-1/4 relative group ">
                    <p className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-raleway font-normal text-[12px] text-grey-10 leading-[130%] transition-all group-hover:visible group-hover:-top-1/3 bg-white py-1 px-2 rounded-[8px] border-2 border-grey-15 invisible opacity-0 group-hover:opacity-100">
                      Flutter
                    </p>
                    <SiFlutter size={24} />
                  </div>
                </div>
                <div className="flex gap-x-2 pt-6">
                  <a
                    href="https://shopco.opwarnet.my.id/"
                    target="_blank"
                    className="px-5 py-1 w-full bg-orange-75 border-2 border-grey-15 rounded-[8px] font-outfit font-medium text-[18px] leading-[150%] text-grey-15 hover:scale-105 transition-all text-center"
                  >
                    View Demo
                  </a>
                  <a
                    href="https://github.com/rcahya007/shop.co"
                    target="_blank"
                    className="px-5 py-1 w-full bg-orange-75 border-2 border-grey-15 rounded-[8px] font-outfit font-medium text-[18px] leading-[150%] text-grey-15 hover:scale-105 transition-all text-center"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>

            {/*FIC Siakad  */}
            <div className="h-fit bg-white relative p-[30px] border-2 border-grey-15 shadow-my-shadow rounded-[12px] flex flex-col justify-center items-center gap-y-[30px]">
              <img
                src="https://opwarnet.my.id/assets/Khs-5127cbc2.png"
                alt="project"
                className="w-[298px] h-[227px] rounded-[10px] object-cover border-2 border-grey-10 xl:w-full xl:h-[380px]"
              />
              <div className="flex-col gap-y-3 w-full flex">
                <div className="flex flex-col">
                  <p className="font-raleway font-bold text-[22px] leading-[130%] text-grey-10">
                    FIC 8 - Siakad
                  </p>
                  <p className="font-outfit font-medium text-[16px] text-grey-30 leading-[150%]">
                    Mobile Application
                  </p>
                </div>
                <div className="flex flex-col font-raleway font-normal text-[14px] text-grey-10 leading-[130%] ">
                  <p>
                    Final project from Fluter Intensive Club batch 8 Fullstack.
                    <br />
                    <br />
                    Mobile: Flutter <br />
                    Backend: Laravel.
                  </p>
                </div>
                <div className="flex gap-x-2">
                  <div className="cursor-pointer bg-orange-90 p-2 rounded-[8px] border-2 border-grey-15 top-1/4 relative group ">
                    <p className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-raleway font-normal text-[12px] text-grey-10 leading-[130%] transition-all group-hover:visible group-hover:-top-1/3 bg-white py-1 px-2 rounded-[8px] border-2 border-grey-15 invisible opacity-0 group-hover:opacity-100">
                      Dart
                    </p>
                    <SiDart size={24} />
                  </div>
                  <div className="cursor-pointer bg-orange-90 p-2 rounded-[8px] border-2 border-grey-15 top-1/4 relative group ">
                    <p className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-raleway font-normal text-[12px] text-grey-10 leading-[130%] transition-all group-hover:visible group-hover:-top-1/3 bg-white py-1 px-2 rounded-[8px] border-2 border-grey-15 invisible opacity-0 group-hover:opacity-100">
                      Flutter
                    </p>
                    <SiFlutter size={24} />
                  </div>
                  <div className="cursor-pointer bg-orange-90 p-2 rounded-[8px] border-2 border-grey-15 top-1/4 relative group ">
                    <p className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-raleway font-normal text-[12px] text-grey-10 leading-[130%] transition-all group-hover:visible group-hover:-top-1/3 bg-white py-1 px-2 rounded-[8px] border-2 border-grey-15 invisible opacity-0 group-hover:opacity-100">
                      Laravel
                    </p>
                    <SiLaravel size={24} />
                  </div>
                </div>
                <div className="flex gap-x-2 pt-6 justify-center items-center">
                  <a
                    href="https://github.com/rcahya007/flutter-siakad-app/tree/meet11-student-scedule"
                    target="_blank"
                    className="px-5 py-1 w-fit bg-orange-75 border-2 border-grey-15 rounded-[8px] font-outfit font-medium text-[18px] leading-[150%] text-grey-15 hover:scale-105 transition-all"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>

            {/* VapeStore */}
            <div className="h-fit bg-white relative p-[30px] border-2 border-grey-15 shadow-my-shadow rounded-[12px] flex flex-col justify-center items-center gap-y-[30px]">
              <img
                src="https://opwarnet.my.id/assets/vape-store-abc33f17.png"
                alt="vapeStore"
                className="w-[298px] h-[227px] rounded-[10px] object-cover border-2 border-grey-10 xl:w-full xl:h-[380px]"
              />
              <div className="flex-col gap-y-3 w-full flex">
                <div className="flex flex-col">
                  <p className="font-raleway font-bold text-[22px] leading-[130%] text-grey-10">
                    Vape Store
                  </p>
                  <p className="font-outfit font-medium text-[16px] text-grey-30 leading-[150%]">
                    Mobile Application
                  </p>
                </div>
                <div className="flex flex-col font-raleway font-normal text-[14px] text-grey-10 leading-[130%] ">
                  <p>
                    Final project from Fluter Intensive Club batch 6 Fullstack.{' '}
                    <br />
                    <br />
                    Mobile: Flutter <br />
                    Backend: Strapi. <br />
                    Payment Gateway: Midtrans Sandbox
                    <br />
                    <br />
                    This is my first e-commerce application.
                  </p>
                </div>
                <div className="flex gap-x-2">
                  <div className="cursor-pointer bg-orange-90 p-2 rounded-[8px] border-2 border-grey-15 top-1/4 relative group ">
                    <p className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-raleway font-normal text-[12px] text-grey-10 leading-[130%] transition-all group-hover:visible group-hover:-top-1/3 bg-white py-1 px-2 rounded-[8px] border-2 border-grey-15 invisible opacity-0 group-hover:opacity-100">
                      Dart
                    </p>
                    <SiDart size={24} />
                  </div>
                  <div className="cursor-pointer bg-orange-90 p-2 rounded-[8px] border-2 border-grey-15 top-1/4 relative group ">
                    <p className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-raleway font-normal text-[12px] text-grey-10 leading-[130%] transition-all group-hover:visible group-hover:-top-1/3 bg-white py-1 px-2 rounded-[8px] border-2 border-grey-15 invisible opacity-0 group-hover:opacity-100">
                      Flutter
                    </p>
                    <SiFlutter size={24} />
                  </div>
                  <div className="cursor-pointer bg-orange-90 p-2 rounded-[8px] border-2 border-grey-15 top-1/4 relative group ">
                    <p className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-raleway font-normal text-[12px] text-grey-10 leading-[130%] transition-all group-hover:visible group-hover:-top-1/3 bg-white py-1 px-2 rounded-[8px] border-2 border-grey-15 invisible opacity-0 group-hover:opacity-100">
                      Strapi
                    </p>
                    <SiStrapi size={24} />
                  </div>
                </div>
                <div className="flex gap-x-2 pt-6">
                  <a
                    href="https://youtu.be/Yzu0g2sVozk?si=Qw1lFuyU6HmFf9pm"
                    target="_blank"
                    className="px-5 py-1 w-full bg-orange-75 border-2 border-grey-15 rounded-[8px] font-outfit font-medium text-[18px] leading-[150%] text-grey-15 hover:scale-105 transition-all text-center"
                  >
                    View Demo
                  </a>
                  <a
                    href="https://github.com/rcahya007/fic-vape-store"
                    target="_blank"
                    className="px-5 py-1 w-full bg-orange-75 border-2 border-grey-15 rounded-[8px] font-outfit font-medium text-[18px] leading-[150%] text-grey-15 hover:scale-105 transition-all text-center"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>

            {/* Nowdots */}
            <div className="h-fit bg-white relative p-[30px] border-2 border-grey-15 shadow-my-shadow rounded-[12px] flex flex-col justify-center items-center gap-y-[30px]">
              <img
                src="https://opwarnet.my.id/assets/nowdots-4b4dcc58.png"
                alt="nowdots"
                className="w-[298px] h-[227px] rounded-[10px] object-cover border-2 border-grey-10 xl:w-full xl:h-[380px]"
              />
              <div className="flex-col gap-y-3 w-full flex">
                <div className="flex flex-col">
                  <p className="font-raleway font-bold text-[22px] leading-[130%] text-grey-10">
                    Nowdots
                  </p>
                  <p className="font-outfit font-medium text-[16px] text-grey-30 leading-[150%]">
                    Web Application
                  </p>
                </div>
                <div className="flex flex-col font-raleway font-normal text-[14px] text-grey-10 leading-[130%] ">
                  <p>Company Profile - Nowdots</p>
                </div>
                <div className="flex gap-x-2">
                  <div className="cursor-pointer bg-orange-90 p-2 rounded-[8px] border-2 border-grey-15 top-1/4 relative group ">
                    <p className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-raleway font-normal text-[12px] text-grey-10 leading-[130%] transition-all group-hover:visible group-hover:-top-1/3 bg-white py-1 px-2 rounded-[8px] border-2 border-grey-15 invisible opacity-0 group-hover:opacity-100">
                      React
                    </p>
                    <SiReact size={24} />
                  </div>
                  <div className="cursor-pointer bg-orange-90 p-2 rounded-[8px] border-2 border-grey-15 top-1/4 relative group ">
                    <p className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-raleway font-normal text-[12px] text-grey-10 leading-[130%] transition-all group-hover:visible group-hover:-top-1/3 bg-white py-1 px-2 rounded-[8px] border-2 border-grey-15 invisible opacity-0 group-hover:opacity-100">
                      TailwindCSS
                    </p>
                    <SiTailwindcss size={24} />
                  </div>
                </div>
                <div className="flex gap-x-2 pt-6 justify-center items-center">
                  <a
                    href="https://nowdots.com/"
                    target="_blank"
                    className="px-5 py-1 w-fit bg-orange-75 border-2 border-grey-15 rounded-[8px] font-outfit font-medium text-[18px] leading-[150%] text-grey-15 hover:scale-105 transition-all"
                  >
                    View Demo
                  </a>
                </div>
              </div>
            </div>

            {/* Joblist */}
            <div className="h-fit bg-white relative p-[30px] border-2 border-grey-15 shadow-my-shadow rounded-[12px] flex flex-col justify-center items-center gap-y-[30px]">
              <img
                src="https://opwarnet.my.id/assets/Job%20List-acb925b2.png"
                alt="joblist"
                className="w-[298px] h-[227px] rounded-[10px] object-cover border-2 border-grey-10 xl:w-full xl:h-[380px]"
              />
              <div className="flex-col gap-y-3 w-full flex">
                <div className="flex flex-col">
                  <p className="font-raleway font-bold text-[22px] leading-[130%] text-grey-10">
                    Job List
                  </p>
                  <p className="font-outfit font-medium text-[16px] text-grey-30 leading-[150%]">
                    Mobile Application
                  </p>
                </div>
                <div className="flex flex-col font-raleway font-normal text-[14px] text-grey-10 leading-[130%] ">
                  <p>
                    Mobile application used to search for job vacancies. Using
                    Flutter-Laravel
                  </p>
                </div>
                <div className="flex gap-x-2">
                  <div className="cursor-pointer bg-orange-90 p-2 rounded-[8px] border-2 border-grey-15 top-1/4 relative group ">
                    <p className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-raleway font-normal text-[12px] text-grey-10 leading-[130%] transition-all group-hover:visible group-hover:-top-1/3 bg-white py-1 px-2 rounded-[8px] border-2 border-grey-15 invisible opacity-0 group-hover:opacity-100">
                      Laravel
                    </p>
                    <SiLaravel size={24} />
                  </div>
                  <div className="cursor-pointer bg-orange-90 p-2 rounded-[8px] border-2 border-grey-15 top-1/4 relative group ">
                    <p className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-raleway font-normal text-[12px] text-grey-10 leading-[130%] transition-all group-hover:visible group-hover:-top-1/3 bg-white py-1 px-2 rounded-[8px] border-2 border-grey-15 invisible opacity-0 group-hover:opacity-100">
                      Dart
                    </p>
                    <SiDart size={24} />
                  </div>
                  <div className="cursor-pointer bg-orange-90 p-2 rounded-[8px] border-2 border-grey-15 top-1/4 relative group ">
                    <p className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-raleway font-normal text-[12px] text-grey-10 leading-[130%] transition-all group-hover:visible group-hover:-top-1/3 bg-white py-1 px-2 rounded-[8px] border-2 border-grey-15 invisible opacity-0 group-hover:opacity-100">
                      Flutter
                    </p>
                    <SiFlutter size={24} />
                  </div>
                </div>
                <div className="flex gap-x-2 pt-6">
                  <a
                    href="https://youtu.be/T7C1J6vqDig?si=7UafbQSXNXAm1-9E"
                    target="_blank"
                    className="px-5 py-1 w-full bg-orange-75 border-2 border-grey-15 rounded-[8px] font-outfit font-medium text-[18px] leading-[150%] text-grey-15 hover:scale-105 transition-all text-center"
                  >
                    View Demo
                  </a>
                  <a
                    href="https://github.com/rcahya007/job-list"
                    target="_blank"
                    className="px-5 py-1 w-full bg-orange-75 border-2 border-grey-15 rounded-[8px] font-outfit font-medium text-[18px] leading-[150%] text-grey-15 hover:scale-105 transition-all text-center"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>

            {/* Aldi */}
            <div className="h-fit bg-white relative p-[30px] border-2 border-grey-15 shadow-my-shadow rounded-[12px] flex flex-col justify-center items-center gap-y-[30px]">
              <img
                src="https://opwarnet.my.id/assets/aldi-0a6e42a6.png"
                alt="aldi"
                className="w-[298px] h-[227px] rounded-[10px] object-cover border-2 border-grey-10 xl:w-full xl:h-[380px]"
              />
              <div className="flex-col gap-y-3 w-full flex">
                <div className="flex flex-col">
                  <p className="font-raleway font-bold text-[22px] leading-[130%] text-grey-10">
                    Aldi Priyanto Portofolio
                  </p>
                  <p className="font-outfit font-medium text-[16px] text-grey-30 leading-[150%]">
                    Web Application
                  </p>
                </div>
                <div className="flex flex-col font-raleway font-normal text-[14px] text-grey-10 leading-[130%] ">
                  <p>
                    Convert landing page from Aldi Priyanto design to Website.
                  </p>
                </div>
                <div className="flex gap-x-2">
                  <div className="cursor-pointer bg-orange-90 p-2 rounded-[8px] border-2 border-grey-15 top-1/4 relative group ">
                    <p className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-raleway font-normal text-[12px] text-grey-10 leading-[130%] transition-all group-hover:visible group-hover:-top-1/3 bg-white py-1 px-2 rounded-[8px] border-2 border-grey-15 invisible opacity-0 group-hover:opacity-100">
                      React
                    </p>
                    <SiReact size={24} />
                  </div>
                  <div className="cursor-pointer bg-orange-90 p-2 rounded-[8px] border-2 border-grey-15 top-1/4 relative group ">
                    <p className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-raleway font-normal text-[12px] text-grey-10 leading-[130%] transition-all group-hover:visible group-hover:-top-1/3 bg-white py-1 px-2 rounded-[8px] border-2 border-grey-15 invisible opacity-0 group-hover:opacity-100">
                      Tailwind
                    </p>
                    <SiTailwindcss size={24} />
                  </div>
                </div>
                <div className="flex gap-x-2 pt-6">
                  <a
                    href="https://aldi-priyanto.opwarnet.my.id/ "
                    target="_blank"
                    className="px-5 py-1 w-full bg-orange-75 border-2 border-grey-15 rounded-[8px] font-outfit font-medium text-[18px] leading-[150%] text-grey-15 hover:scale-105 transition-all text-center"
                  >
                    View Demo
                  </a>
                  <a
                    href="https://aldi-priyanto.opwarnet.my.id/"
                    target="_blank"
                    className="px-5 py-1 w-full bg-orange-75 border-2 border-grey-15 rounded-[8px] font-outfit font-medium text-[18px] leading-[150%] text-grey-15 hover:scale-105 transition-all text-center"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>

            {/* Pokedex */}
            <div className="h-fit bg-white relative p-[30px] border-2 border-grey-15 shadow-my-shadow rounded-[12px] flex flex-col justify-center items-center gap-y-[30px]">
              <img
                src="https://opwarnet.my.id/assets/pokedex-daad51ac.png"
                alt="pokedex"
                className="w-[298px] h-[227px] rounded-[10px] object-cover border-2 border-grey-10 xl:w-full xl:h-[380px]"
              />
              <div className="flex-col gap-y-3 w-full flex">
                <div className="flex flex-col">
                  <p className="font-raleway font-bold text-[22px] leading-[130%] text-grey-10">
                    Pokedex
                  </p>
                  <p className="font-outfit font-medium text-[16px] text-grey-30 leading-[150%]">
                    Website Application
                  </p>
                </div>
                <div className="flex flex-col font-raleway font-normal text-[14px] text-grey-10 leading-[130%] ">
                  <p>
                    Get and display data of all pokemon from data API "PokeAPI"
                  </p>
                </div>
                <div className="flex gap-x-2">
                  <div className="cursor-pointer bg-orange-90 p-2 rounded-[8px] border-2 border-grey-15 top-1/4 relative group ">
                    <p className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-raleway font-normal text-[12px] text-grey-10 leading-[130%] transition-all group-hover:visible group-hover:-top-1/3 bg-white py-1 px-2 rounded-[8px] border-2 border-grey-15 invisible opacity-0 group-hover:opacity-100">
                      HTML
                    </p>
                    <BsFiletypeHtml size={24} />
                  </div>
                  <div className="cursor-pointer bg-orange-90 p-2 rounded-[8px] border-2 border-grey-15 top-1/4 relative group ">
                    <p className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-raleway font-normal text-[12px] text-grey-10 leading-[130%] transition-all group-hover:visible group-hover:-top-1/3 bg-white py-1 px-2 rounded-[8px] border-2 border-grey-15 invisible opacity-0 group-hover:opacity-100">
                      CSS
                    </p>
                    <BsFiletypeCss size={24} />
                  </div>
                  <div className="cursor-pointer bg-orange-90 p-2 rounded-[8px] border-2 border-grey-15 top-1/4 relative group ">
                    <p className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-raleway font-normal text-[12px] text-grey-10 leading-[130%] transition-all group-hover:visible group-hover:-top-1/3 bg-white py-1 px-2 rounded-[8px] border-2 border-grey-15 invisible opacity-0 group-hover:opacity-100">
                      Javascript
                    </p>
                    <RiJavascriptFill size={24} />
                  </div>
                </div>
                <div className="flex gap-x-2 pt-6">
                  <a
                    href="https://pokedex.opwarnet.my.id/"
                    target="_blank"
                    className="px-5 py-1 w-full bg-orange-75 border-2 border-grey-15 rounded-[8px] font-outfit font-medium text-[18px] leading-[150%] text-grey-15 hover:scale-105 transition-all text-center"
                  >
                    View Demo
                  </a>
                  <a
                    href="https://github.com/rcahya007/Pokedex-Javascript-Native"
                    target="_blank"
                    className="px-5 py-1 w-full bg-orange-75 border-2 border-grey-15 rounded-[8px] font-outfit font-medium text-[18px] leading-[150%] text-grey-15 hover:scale-105 transition-all text-center"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>

            {/* Nota Kodehack */}
            <div className="h-fit bg-white relative p-[30px] border-2 border-grey-15 shadow-my-shadow rounded-[12px] flex flex-col justify-center items-center gap-y-[30px]">
              <img
                src="https://opwarnet.my.id/assets/Nota%20Kodehack-b771ce0c.png"
                alt="notakodehack"
                className="w-[298px] h-[227px] rounded-[10px] object-cover border-2 border-grey-10 xl:w-full xl:h-[380px]"
              />
              <div className="flex-col gap-y-3 w-full flex">
                <div className="flex flex-col">
                  <p className="font-raleway font-bold text-[22px] leading-[130%] text-grey-10">
                    Nota Kodehack
                  </p>
                  <p className="font-outfit font-medium text-[16px] text-grey-30 leading-[150%]">
                    Website Application
                  </p>
                </div>
                <div className="flex flex-col font-raleway font-normal text-[14px] text-grey-10 leading-[130%] ">
                  <p>
                    Website for recording data, sales, goods receipts. Convert
                    Project Nota Native Javascript to React. <br />
                    <br />
                    Username: coba <br />
                    Password: coba
                  </p>
                </div>
                <div className="flex gap-x-2">
                  <div className="cursor-pointer bg-orange-90 p-2 rounded-[8px] border-2 border-grey-15 top-1/4 relative group ">
                    <p className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-raleway font-normal text-[12px] text-grey-10 leading-[130%] transition-all group-hover:visible group-hover:-top-1/3 bg-white py-1 px-2 rounded-[8px] border-2 border-grey-15 invisible opacity-0 group-hover:opacity-100">
                      React
                    </p>
                    <SiReact size={24} />
                  </div>
                  <div className="cursor-pointer bg-orange-90 p-2 rounded-[8px] border-2 border-grey-15 top-1/4 relative group ">
                    <p className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-raleway font-normal text-[12px] text-grey-10 leading-[130%] transition-all group-hover:visible group-hover:-top-1/3 bg-white py-1 px-2 rounded-[8px] border-2 border-grey-15 invisible opacity-0 group-hover:opacity-100">
                      TailwindCSS
                    </p>
                    <SiTailwindcss size={24} />
                  </div>
                  <div className="cursor-pointer bg-orange-90 p-2 rounded-[8px] border-2 border-grey-15 top-1/4 relative group ">
                    <p className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-raleway font-normal text-[12px] text-grey-10 leading-[130%] transition-all group-hover:visible group-hover:-top-1/3 bg-white py-1 px-2 rounded-[8px] border-2 border-grey-15 invisible opacity-0 group-hover:opacity-100">
                      ExpressJS
                    </p>
                    <SiExpress size={24} />
                  </div>
                </div>
                <div className="flex gap-x-2 pt-6">
                  <a
                    href="https://notareact.opwarnet.my.id/"
                    target="_blank"
                    className="px-5 py-1 w-full bg-orange-75 border-2 border-grey-15 rounded-[8px] font-outfit font-medium text-[18px] leading-[150%] text-grey-15 hover:scale-105 transition-all text-center"
                  >
                    View Demo
                  </a>
                  <a
                    href="https://github.com/rcahya007/nota-react"
                    target="_blank"
                    className="px-5 py-1 w-full bg-orange-75 border-2 border-grey-15 rounded-[8px] font-outfit font-medium text-[18px] leading-[150%] text-grey-15 hover:scale-105 transition-all text-center"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>

            {/* Nota Thermal */}
            <div className="h-fit bg-white relative p-[30px] border-2 border-grey-15 shadow-my-shadow rounded-[12px] flex flex-col justify-center items-center gap-y-[30px]">
              <img
                src="https://opwarnet.my.id/assets/Nota%20Kodehack%202-04c6ddd5.png"
                alt="notakodehack"
                className="w-[298px] h-[227px] rounded-[10px] object-cover border-2 border-grey-10 xl:w-full xl:h-[380px]"
              />
              <div className="flex-col gap-y-3 w-full flex">
                <div className="flex flex-col">
                  <p className="font-raleway font-bold text-[22px] leading-[130%] text-grey-10">
                    Nota Kodehack
                  </p>
                  <p className="font-outfit font-medium text-[16px] text-grey-30 leading-[150%]">
                    Website Application
                  </p>
                </div>
                <div className="flex flex-col font-raleway font-normal text-[14px] text-grey-10 leading-[130%] ">
                  <p>
                    The website records data, sales, goods notes using
                    Laravel-Javascript and can be printed via thermal print.{' '}
                    <br />
                    <br />
                    Username: coba <br />
                    Password: coba
                  </p>
                </div>
                <div className="flex gap-x-2">
                  <div className="cursor-pointer bg-orange-90 p-2 rounded-[8px] border-2 border-grey-15 top-1/4 relative group ">
                    <p className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-raleway font-normal text-[12px] text-grey-10 leading-[130%] transition-all group-hover:visible group-hover:-top-1/3 bg-white py-1 px-2 rounded-[8px] border-2 border-grey-15 invisible opacity-0 group-hover:opacity-100">
                      Laravel
                    </p>
                    <SiLaravel size={24} />
                  </div>
                  <div className="cursor-pointer bg-orange-90 p-2 rounded-[8px] border-2 border-grey-15 top-1/4 relative group ">
                    <p className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-raleway font-normal text-[12px] text-grey-10 leading-[130%] transition-all group-hover:visible group-hover:-top-1/3 bg-white py-1 px-2 rounded-[8px] border-2 border-grey-15 invisible opacity-0 group-hover:opacity-100">
                      Bootstrap
                    </p>
                    <BsBootstrap size={24} />
                  </div>
                  <div className="cursor-pointer bg-orange-90 p-2 rounded-[8px] border-2 border-grey-15 top-1/4 relative group ">
                    <p className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-raleway font-normal text-[12px] text-grey-10 leading-[130%] transition-all group-hover:visible group-hover:-top-1/3 bg-white py-1 px-2 rounded-[8px] border-2 border-grey-15 invisible opacity-0 group-hover:opacity-100">
                      Javascript
                    </p>
                    <RiJavascriptFill size={24} />
                  </div>
                </div>
                <div className="flex gap-x-2 pt-6">
                  <a
                    href="https://nota.opwarnet.my.id/"
                    target="_blank"
                    className="px-5 py-1 w-full bg-orange-75 border-2 border-grey-15 rounded-[8px] font-outfit font-medium text-[18px] leading-[150%] text-grey-15 hover:scale-105 transition-all text-center"
                  >
                    View Demo
                  </a>
                  <a
                    href="https://github.com/rcahya007/nota_thermal_laravel"
                    target="_blank"
                    className="px-5 py-1 w-full bg-orange-75 border-2 border-grey-15 rounded-[8px] font-outfit font-medium text-[18px] leading-[150%] text-grey-15 hover:scale-105 transition-all text-center"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Me */}
      <section className="py-20 md:px-24" id="contact">
        <div className="px-4">
          <div className="px-[30px] py-[60px] bg-white border-2 border-grey-15 shadow-my-shadow rounded-[12px] flex items-center justify-center flex-col md:grid md:grid-cols-2 md:items-start ">
            <div className="flex flex-col gap-y-[20px] mt-10 w-full">
              <p className="font-raleway font-bold text-[38px] leading-[130%] text-grey-10 text-center md:text-start">
                Contact me
              </p>
              <a
                href="mailto:rendycahya777@gmail.com"
                className="flex gap-x-2 w-full items-center"
              >
                <div className="p-[6px] bg-orange-97 border-2 border-grey-15 rounded-[4px]">
                  <MdOutlineEmail size={20} />
                </div>
                <p className="font-outfit font-medium text-[16px] leading-[150%] text-grey-15">
                  rendycahya777@gmail.com
                </p>
              </a>
              <a
                href="https://twitter.com/RendyCahyaE"
                target="_blank"
                className="flex gap-x-2 w-full items-center"
              >
                <div className="p-[6px] bg-orange-97 border-2 border-grey-15 rounded-[4px]">
                  <FaTwitter size={20} />
                </div>
                <p className="font-outfit font-medium text-[16px] leading-[150%] text-grey-15">
                  @rendycahyae
                </p>
              </a>
              <a
                href="hhttps://www.youtube.com/@codingwithopwarnet"
                target="_blank"
                className="flex gap-x-2 w-full items-center"
              >
                <div className="p-[6px] bg-orange-97 border-2 border-grey-15 rounded-[4px]">
                  <FaYoutube size={20} />
                </div>
                <p className="font-outfit font-medium text-[16px] leading-[150%] text-grey-15">
                  @codingwithopwarnet
                </p>
              </a>
            </div>
            <div className="flex flex-col gap-y-[20px] mt-10 w-full">
              <p className="font-raleway font-bold text-[38px] leading-[130%] text-grey-10 text-center md:text-start">
                Follow me
              </p>
              <a
                href="https://www.instagram.com/rendycahya_/"
                target="_blank"
                className="flex gap-x-2 w-full items-center"
              >
                <div className="p-[6px] bg-orange-97 border-2 border-grey-15 rounded-[4px]">
                  <FaInstagram size={20} />
                </div>
                <p className="font-outfit font-medium text-[16px] leading-[150%] text-grey-15">
                  @rendycahya_
                </p>
              </a>
              <a
                href="https://twitter.com/RendyCahyaE"
                target="_blank"
                className="flex gap-x-2 w-full items-center"
              >
                <div className="p-[6px] bg-orange-97 border-2 border-grey-15 rounded-[4px]">
                  <FaTwitter size={20} />
                </div>
                <p className="font-outfit font-medium text-[16px] leading-[150%] text-grey-15">
                  @rendycahyae
                </p>
              </a>
              <a
                href="https://www.youtube.com/@codingwithopwarnet"
                target="_blank"
                className="flex gap-x-2 w-full items-center"
              >
                <div className="p-[6px] bg-orange-97 border-2 border-grey-15 rounded-[4px]">
                  <FaYoutube size={20} />
                </div>
                <p className="font-outfit font-medium text-[16px] leading-[150%] text-grey-15">
                  @codingwithopwarnet
                </p>
              </a>
              <a
                href="https://github.com/rcahya007"
                target="_blank"
                className="flex gap-x-2 w-full items-center"
              >
                <div className="p-[6px] bg-orange-97 border-2 border-grey-15 rounded-[4px]">
                  <FaGithub size={20} />
                </div>
                <p className="font-outfit font-medium text-[16px] leading-[150%] text-grey-15">
                  @rcahya007
                </p>
              </a>
            </div>
          </div>
          <div className="mt-10 w-full h-[2px] bg-grey-15"></div>
          <p className=" pt-2 font-outfit font-medium text-[14px] text-grey-40 text-center">
            Copyright © [2024], All rights reserved.
          </p>
        </div>
      </section>
    </>
  );
};

Profile.layout = (page) => {
  return (
    <ProfileLayout head={<Head title="Rendy Cahya Edytya - Profile" />}>
      {page}
    </ProfileLayout>
  );
};

export default Profile;
