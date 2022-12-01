import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";

const Footer = () => {
  return (
    <section className="py-14">
      <footer className="footer container p-10 text-base-content">
        <div className="">
          <img className="w-16 h-16" src={logo} alt="" />
          <p>
            <span className="text-primary text-3xl font-medium">Dream</span>
            <span className="text-3xl font-medium">Watch</span>
            <br />
            Resaler Market Place
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <Link className="link link-hover">Branding</Link>
          <Link className="link link-hover">Design</Link>
          <Link className="link link-hover">Marketing</Link>
          <Link className="link link-hover">Advertisement</Link>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <Link className="link link-hover">About us</Link>
          <Link className="link link-hover">Contact</Link>
          <Link className="link link-hover">Jobs</Link>
          <Link className="link link-hover">Press kit</Link>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <Link className="link link-hover">Terms of use</Link>
          <Link className="link link-hover">Privacy policy</Link>
          <Link className="link link-hover">Cookie policy</Link>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
