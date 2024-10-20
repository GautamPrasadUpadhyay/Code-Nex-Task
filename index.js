import React from 'react';
import { Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

const CodeNexClub = () => {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Header */}
      <header className="flex justify-between items-center p-4">
        <div className="text-[#00CCFF] text-2xl font-bold">C</div>
        <nav>
          <ul className="flex space-x-4">
            <li>HOME</li>
            <li>TEAM</li>
            <li>COURSE</li>
            <li>NEWSLETTER</li>
            <li>CONTACT</li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="px-4 py-16">
        <h1 className="text-6xl font-extrabold mb-4">
          Welcome to
          <br />
          <span className="text-[#00CCFF]">CodeNex</span> Club
        </h1>
        <p className="text-xl mb-4">We're the tech club of srm</p>
        <div className="flex space-x-4 mb-8">
          <Twitter size={24} />
          <Linkedin size={24} />
          <Instagram size={24} />
          <Youtube size={24} />
        </div>
      </section>

      {/* About Section */}
      <section className="px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">ABOUT US</h2>
        <p className="mb-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <p className="mb-4">
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
        <button className="bg-[#9747FF] text-white px-4 py-2 rounded">
          MEET THE TEAM
        </button>
      </section>

      {/* Events Section */}
      <section className="px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">EVENTS WE HELD</h2>
        <div className="flex space-x-4 overflow-x-auto py-4">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="w-64 h-40 bg-gray-700 flex-shrink-0"></div>
          ))}
        </div>
      </section>

      {/* Socials Section */}
      <section className="px-4 py-8 bg-[#00CCFF] text-black">
        <h2 className="text-2xl font-bold mb-4">Let's check out our socials</h2>
        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
            <div key={item} className="w-full h-24 bg-white"></div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 py-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Let's Talk</h2>
        <p className="mb-4">Want to Collaborate?</p>
        <button className="bg-[#9747FF] text-white px-4 py-2 rounded">
          Contact Us
        </button>
      </section>

      {/* Footer */}
      <footer className="px-4 py-8 border-t border-gray-800">
        <p className="mb-4">Codenex Club is one of the most active clubs in whole SRM</p>
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <Twitter size={20} />
            <Linkedin size={20} />
            <Instagram size={20} />
            <Youtube size={20} />
          </div>
          <div>
            <p>SRM/G17 KTR</p>
            <p>codenex.club@srmail.com</p>
            <p>+91 0000000000</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CodeNexClub;