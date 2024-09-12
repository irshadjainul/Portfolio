// import React from "react";

// const Navbar = () => {
//   return (
//     <nav className="bg-black text-white px-8 md:px-16 lg:px-24">
//       <div className="container py-2 flex justify-center md:justify-between items-center">
//         <div className="text-2xl font-bold hidden md:inline">Yousof</div>
//         <div className="space-x-6">
//           <a href="#home" className="hover:text-gray-400">
//             Home
//           </a>
//           <a href="#about" className="hover:text-gray-400">
//             About Me
//           </a>
//           <a href="#service" className="hover:text-gray-400">
//             Services
//           </a>
//           <a href="#project" className="hover:text-gray-400">
//             Projects
//           </a>
//           <a href="#contact" className="hover:text-gray-400">
//             Contact
//           </a>
//         </div>
//         <button
//           className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
//             transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
//         >
//           Connect Me
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  const handleSetActiveSection = (section) => {
    setActiveSection(section);
    handleCloseMenu(); // Close menu after selecting a section on mobile
  };

  return (
    <header className="bg-black text-white py-4 px-6 fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="/">Irshad Ansari</a>
        </div>

        {/* Desktop nav items */}
        <div className="hidden md:flex flex-grow items-center justify-center space-x-8">
          <nav>
            <ul className="flex space-x-8">
              {["home", "about", "service", "project", "contact"].map(
                (section) => (
                  <li key={section}>
                    <a
                      href={`#${section}`}
                      className={`${
                        activeSection === section
                          ? "text-green-400"
                          : "text-white"
                      } hover:text-gray-400`}
                      onClick={() => handleSetActiveSection(section)}
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </a>
                  </li>
                )
              )}
            </ul>
          </nav>
        </div>

        {/* Contact Us button (Desktop) */}
        <div className="hidden md:block">
          <a
            href="mailto:theirshadjainul@gmail.com"
            className="bg-gradient-to-r from-green-400 to-blue-500 text-gray-800 hover:text-black hidden md:inline
//             transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full font-bold hover:underline"
          >
            Hire Me
          </a>
        </div>

        {/* Menu button (Mobile) */}
        <div className="block md:hidden">
          <button
            onClick={handleToggle}
            className={`text-white focus:outline-none ${
              isOpen ? "border border-white" : ""
            }`}
          >
            <HiMenuAlt3 className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Mobile nav items */}
      {isOpen && (
        <nav className="absolute top-full left-0 w-full bg-gray-900 z-20 md:hidden">
          <ul className="flex flex-col space-y-4 p-4">
            {["home", "about", "service", "project", "contact"].map(
              (section) => (
                <li key={section}>
                  <a
                    href={`#${section}`}
                    className={`${
                      activeSection === section
                        ? "text-green-400"
                        : "text-white"
                    } hover:text-green-400`}
                    onClick={() => handleSetActiveSection(section)}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </a>
                </li>
              )
            )}
            <li>
              <a
                href="mailto:theirshadjainul@gmail.com"
                className="text-gray-800 bg-gradient-to-r from-green-400 to-blue-500 hover:scale-105 px-4 py-2 font-bold rounded"
                onClick={handleCloseMenu} // Close menu after clicking "Contact Us"
              >
                Hire Me
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
