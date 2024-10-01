import Logo from "@/assets/images/logo.jpg";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { buttonVariants } from "@/components/ui/button";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from 'prop-types'

const NavigationLinks = [
  {
    title: "Home",
    path: "/",
    isVisible: true,
  },
  {
    title: "About",
    path: "/about",
    isVisible: true,
  },
  {
    title: "Products",
    path: "/products",
    isVisible: true,
  },
  {
    title: "Contact Us",
    path: "/contact",
    isVisible: true,
  },
];



export const NavBar = ({setBackDrop}) => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    setBackDrop(isOpen);
  }, [isOpen, setBackDrop]);

  const { pathname } = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const OutSideClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", OutSideClick);
    return () => {
      document.removeEventListener("mousedown", OutSideClick);
    };
  }, [navRef]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    document.body.style.height = isOpen ? "100vh" : "auto";
    return () => {
      document.body.style.overflow = "auto";
      document.body.style.height = "auto";
    };
  }, [isOpen]);

  return (
    <motion.div
      className="sticky top-0 z-50 backdrop-blur-md  bg-black"
      initial={{ opacity: 0.9 }}
      animate={{ opacity: isOpen ? 1 : 0.9 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      ref={navRef}
    >
      <motion.div
        className="relative flex justify-between items-center p-4 pb-2 md:pb-4 pt-4 gap-4 md:gap-12 mx-0 sm:mx-0 md:mx-12"
        animate={{ opacity: [0, 1] }}
        transition={{ ease: "easeOut", duration: 1 , delay: 0.5}}
      >
        <Link to="/" className=" md:w-1/12">
          <img
            src={Logo}
            alt="logo"
            className="w-16 md:w-18 lg:w-24 aspect-square min-w-16"
          />
        </Link>
        <div className="hidden md:flex bg-gold text-black flex-1 justify-center items-center max-w-4xl px-4 py-2 sm:py-4 md:py-4 lg:py-4 rounded-full w-10/12 md:w-10/12">
          <div className="flex justify-between items-center uppercase font-sans font-bold gap-2 md:gap-4">
            {NavigationLinks.map((link) => {
              if (link.isVisible) {
                return (
                  <NavLink
                    key={link.title}
                    to={link.path}
                    className={({ isActive }) =>
                      cn(
                        "text-black",
                        "hover:text-white",
                        "px-4",
                        "py-1",
                        "sm:px-3",
                        "sm:py-2",
                        "md:px-4",
                        "md:py-3",
                        "lg:px-6",
                        "lg:py-4",
                        "text-xs",
                        "md:text-sm",
                        "lg:text-base",
                        "rounded-full",
                        "transition-all",
                        "duration-300",
                        "ease-in-out",
                        "hover:bg-gray-800",
                        "hover:bg-opacity-50",
                        "break-keep",
                        "whitespace-nowrap",
                        isActive && "bg-gray-800 bg-opacity-50"
                      )
                    }
                  >
                    {link.title}
                  </NavLink>
                );
              }
            })}
          </div>
        </div>
        <div className="text-center text-gold hidden md:flex flex-col text-sm sm:text-base md:text-xl lg:text-3xl font-serif w-2/12 md:w-1/12 justify-center items-center">
          <span className="">CRESCENT</span>
          <span className="">EXPORTS</span>
        </div>
        <div className="flex md:hidden justify-center items-center w-2/12 md:w-1/12">
          <Button
            onClick={() => setIsOpen((prev) => !prev)}
            className="bg-gold text-black hover:bg-gold/80"
          >
            <span className="sr-only">Open Menu</span>
            {isOpen ? <IoMdClose size={24} /> : <GiHamburgerMenu size={24} />}
          </Button>
        </div>
      </motion.div>
      <div className="md:hidden">
        <motion.nav
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.5 , ease: "easeInOut"}}
          className="absolute top-20 left-0 right-0 backdrop-blur-md bg-opacity-90 bg-black pb-2 text-white overflow-hidden z-50 rounded-b-lg"
        >
          <div className="flex flex-col gap-4 p-4 bg-black ">
            {NavigationLinks.map((link) => {
              if (link.isVisible) {
                return (
                  // <Button asChild key={link.title} className="bg-gold hover:bg-gold/80">
                  <NavLink
                    key={link.title}
                    to={link.path}
                    className={({ isActive }) =>
                      cn(
                        buttonVariants(),
                        "bg-gold hover:bg-gold/60",
                        "text-black",
                        isActive &&
                          "bg-gold/80 outline-gold ring-2 ring-gold ring-offset-2"
                      )
                    }
                  >
                    {link.title}
                  </NavLink>
                  // </Button>
                );
              }
            })}
          </div>
        </motion.nav>
      </div>
    </motion.div>
  );
};

NavBar.propTypes = {
  setBackDrop: PropTypes.func
}