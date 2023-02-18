import React from "react";
import location from '../../../Assests/location.png';
import email from '../../../Assests/mail.png';
import phone from '../../../Assests/phone-call.png';
import { FaGithub, FaLinkedin, FaSkype } from "react-icons/fa";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className="p-10 bg-slate-300">
      <div className="footer">
      <div>
        <span className="footer-title text-lg font-bold text-black">Job Portal</span>
        <p style={{fontSize:'16px'}}>We collect reviews from our users so you can <br /> get an honest opinion of what an experience <br /> with our website.</p>
        <div className="grid grid-cols-3  justify-center items-center mt-[24px] mb-[52px]">
      <a href="https://github.com/Tanushri-Das" target="_blank">
        <FaGithub className="text-3xl mr-4" style={{ color: "#0A66C2" }}></FaGithub>
      </a>
      <a href="https://www.linkedin.com/in/tanushri-das-06a520194/" target="_blank">
        <FaLinkedin
          className="text-3xl"
          style={{ color: "#0A66C2" }}
        ></FaLinkedin>
      </a>
      <a href="https://skype.com/id" target="_blank">
        <FaSkype className="text-3xl" style={{ color: "#0A66C2" }}></FaSkype>
      </a>
    </div>
      </div>
      <div>
        <span className="footer-title  text-lg bold text-black">Employers</span>
        <a href="/" className="link link-hover" style={{fontSize:'16px'}}>How it works</a>
        <a href="/" className="link link-hover" style={{fontSize:'16px'}}>Register</a>
        <a href="/" className="link link-hover" style={{fontSize:'16px'}}>Post a Job</a>
        <a href="/" className="link link-hover" style={{fontSize:'16px'}}>Recruiting Service</a>
      </div>
      <div>
        <span className="footer-title  text-lg bold text-black">Workers</span>
        <a href="/" className="link link-hover"  style={{fontSize:'16px'}}>How it works</a>
        <a href="/" className="link link-hover"  style={{fontSize:'16px'}}>Register</a>
        <a href="/" className="link link-hover"  style={{fontSize:'16px'}}>Job Search</a>
      </div>
      <div>
      <span className="footer-title  text-lg font-bold text-black">Have a Questions ?</span>
        <div className="flex justify-center items-center">
          <img src={location} className="w-10 mr-3" alt="" />
          <p style={{fontSize:'16px'}}>South Banasree, L block </p>
        </div>
        <div className="flex justify-center items-center">
          <img src={phone} className="w-10 mr-3" alt="" />
          <p style={{fontSize:'16px'}}>+8801646471948 </p>
        </div>
        <div className="flex justify-center items-center">
          <img src={email} className="w-10 mr-3" alt="" />
          <p style={{fontSize:'16px'}}>dastanushri402@gmail.com</p>
        </div>
      </div>
      </div>
      <div className="text-center mt-20 mb-12">
        <p className="text-lg">Copyright © {date} - All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
