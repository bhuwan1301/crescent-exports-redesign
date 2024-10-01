import { Outlet } from "react-router-dom";
import { NavBar, Footer } from "@/components";
import background from "@/assets/images/background.jpg";
import { useState } from "react";
import { motion } from "framer-motion";


export const Layout = () => {
  const [backDrop, setBackDrop] = useState(false);
  return (
    <div
      className="w-full h-full bg-cover bg-center min-h-screen repeat-infinte flex flex-col"   
      style={{ backgroundImage: `url(${background})` }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: backDrop ? 1 : 0 }}
        transition={{ duration: 0.2 , ease: "easeInOut"}} 
        className="fixed inset-0 bg-black/80 z-40"
      ></motion.div>
      <NavBar setBackDrop={setBackDrop} />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
