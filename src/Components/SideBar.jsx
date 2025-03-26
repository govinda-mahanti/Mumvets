import React, { useState } from "react";
import { motion } from "framer-motion";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CallIcon from "@mui/icons-material/Call";
import MessageIcon from "@mui/icons-material/Message";
import CloseIcon from "@mui/icons-material/Close";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed right-5 top-[90%] flex flex-col items-center z-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 50 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col gap-2 items-center absolute bottom-12"
      >
        {isOpen && (
          <>
            <a
              href="https://wa.me/+919326471539"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-[#60D669] rounded-full h-10 w-10 text-white shadow-lg"
            >
              <WhatsAppIcon />
            </a>
            <a
              href="tel:+919326471539"
              className="flex items-center justify-center bg-[#1FAF38] rounded-full h-10 w-10 text-white shadow-lg"
            >
              <CallIcon />
            </a>
          </>
        )}
      </motion.div>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center bg-purple-500 rounded-full h-10 w-10 text-white shadow-lg"
        initial={{ rotate: 0 }}
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {isOpen ? <CloseIcon /> : <MessageIcon />}
      </motion.button>
    </div>
  );
};

export default SideBar;
