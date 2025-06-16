import React from "react";
import { CiFacebook } from "react-icons/ci";
import {
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-blue-800">
      <footer className="footer sm:footer-horizontal  text-white py-20 w-11/12 mx-auto px-0">
        <aside>
          <h2 className="font-bold text-2xl">TalkTutor</h2>
          <p className="py-5">
            Subscribe to our newsletter for the latest updates on features and
            releases.
          </p>
          <div className="flex">
            <input
              type="text"
              placeholder="Your email here"
              className="border px-5 py-2"
            />
            <button className="px-5 py-2 bg-white text-black">Join</button>
          </div>
          <p className="text-[12px]">
            By subscribing, you consent to our Privacy Policy and agree to
            receive updates.
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Useful Links</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Contact Us</a>
          <a className="link link-hover">Blog Posts</a>
          <a className="link link-hover">Help Center</a>
        </nav>
        <nav>
          <h6 className="footer-title">Connect With Us</h6>
          <a className="link link-hover">Support</a>
          <a className="link link-hover">Community</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Partnerships</a>
        </nav>
        <nav>
          <h6 className="footer-title">Follow Us</h6>
          <a className="link link-hover flex gap-3">
            <FaFacebook size={20} />
            Facebook
          </a>
          <a className="link link-hover flex gap-3">
            <FaInstagramSquare size={20} />
            Instagram
          </a>
          <a className="link link-hover flex gap-3">
            <FaTwitter size={20} />X
          </a>
          <a className="link link-hover flex gap-3">
            <FaLinkedin size={20} />
            LinkedIn
          </a>
          <a className="link link-hover flex gap-3">
            <FaYoutube size={20} />
            YouTube
          </a>
        </nav>
      </footer>
      <div className="text-white flex w-11/12 mx-auto gap-10 flex-wrap justify-between pb-10">
        <p>© 2025 TalkTutor. All rights reserved.</p>
        <div className="flex gap-5">
          <a className="link link-hover underline">Privacy Policy</a>
          <a className="link link-hover underline">Terms of Service</a>
          <a className="link link-hover underline">Cookie Settings</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
