import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import img1 from "../../assets/icon-1.svg";
import img2 from "../../assets/icon-2.svg";
import img3 from "../../assets/icon-3.svg";

function Figma() {
  return (
    <div className="man mx-0">
      <div className="container max-w-screen-2xl space-x-0 space-y-0 ml-auto mr-auto p-44 pt-5   bg-gray-950  text-slate-50 font-serif ... items-center">
        <div className="nav flex justify-between mb-32 ">
          <div className="logo">
            <a href="#" className="text-2xl font-bold">
              Alifreza.
            </a>
          </div>
          <div className="navigate flex  ">
            <ul className="flex gap-10 text-sm pt-1 font-bold">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Services</a>
              </li>
              <li>
                <a href="">Work</a>
              </li>
              <li>
                <a href="">About us</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
            </ul>
            <div className="py-0 mt-0">
              {" "}
              <button className="ml-20 text-sm border font-bold border-lime-800 ... p-1.5  ">
                Contact
              </button>
            </div>
          </div>
        </div>
        <div className="title ">
          <h2 className="text-green-500 text-4xl font-Inter ... font-bold">
            Hello, I’m Alif Reza
          </h2>
          <h1 className="text-7xl font-sans ... font-bold">Product Designer</h1>
          <p className="text-base font-normal text-gray-500 my-10 leading-relaxed ...">
            I’m from Singapore and I have been working as a Product Designer for{" "}
            <br />
            more than 7 years. I’ve worked for a Hanziree company Pabloo as a{" "}
            <br />
            Product Designer and Front-end Developer for 3 years.
          </p>
          <div className="flex gap-10">
            <button className="p-3  bg-green-600 rounded-sm text-lg font-bold">
              Email me
            </button>
            <button className="flex align items-center text-lg font-bold text-gray-500">
              <MdOutlineFileDownload className="text-xl" /> Download CV
            </button>
          </div>
        </div>
        <div className="product mt-24">
          <div className="product-title flex justify-between my-28">
            <h2 className="text-5xl font-bold font-mono ... ">
              7+ years experience <br /> working
            </h2>
            <p className="flex font-normal text-base text-gray-500">
              <span className="flex ml-16 absolute  text-xl font-mono ... font-bold text-green-600 mb-5">
                Services
              </span>
              <br />
              Discover the best services I offer, designed to <br /> ensure the
              success of your project.
            </p>
          </div>
          <div className="product-cards flex gap-24 pl-5">
            <div className="product-card w-80 h-80 bg-zinc-800">
              <img src={img1} className="pt-20 pl-8" alt="" />
              <h3 className="text-2xl font-mono ... font-bold pt-4 pl-7">
                Product design
              </h3>
              <p className="font-normal text-base text-zinc-500 mt-2 ml-7">
                I offer innovative and attention-grabbing <br /> product design
                services. From initial <br /> ideation to implementation.
              </p>
              <div className="w-80 h-1.5  bg-green-600 mt-16"></div>
            </div>
            <div className="product-card w-80 h-80 bg-zinc-800">
              <img src={img2} className="pt-20 pl-8" alt="" />
              <h3 className="text-2xl font-mono ... font-bold pt-4 pl-7">
                Frontend develop
              </h3>
              <p className="font-normal text-base text-zinc-500 mt-2 ml-7">
                Specialize in responsive and interactive <br /> front-end
                development. With a deep <br />
                understanding of HTML, CSS, and JS.
              </p>
              <div className="w-80 h-1.5  bg-green-600 mt-16"></div>
            </div>
            <div className="product-card w-80 h-80 bg-zinc-800">
              <img src={img3} className="pt-20 pl-8" alt="" />
              <h3 className="text-2xl font-mono ... font-bold pt-4 pl-7">
                Brand strategy
              </h3>
              <p className="font-normal text-base text-zinc-500 mt-2 ml-7">
                I help design strong and captivating <br /> brand strategies.
                Through thorough <br /> research and market analysis.
              </p>
              <div className="w-80 h-1.5  bg-green-600 mt-16"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Figma;
