/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import {
    FiChevronDown,
  } from "react-icons/fi";
  import { motion } from "framer-motion";
  import { useState } from "react";

const categories = [
    "Home",
    "Nasional",
    "Internasional",
    "Ekonomi",
    "Olahraga",
    "Teknologi",
    "Hiburan",
    "Gaya-hidup"
]

const Header = () => {
    return (
        <header className="w-full sticky top-0 bg-slate-500 text-white z-50">
            <div className="flex justify-between items-center p-4">
                <div>
                    <h1>Berita</h1>
                </div>
                <nav>
                    <ul className="hidden gap-4 md:flex">
                        {categories.map((category, i) => (
                            <li key={i} >
                                <Link to={'/berita/' + category.toLowerCase()}>{category}</Link>
                            </li>
                        ))}
                    </ul>
                    <StaggeredDropDown />
                </nav>
            </div>
        </header>
    );
}
  
  const StaggeredDropDown = () => {
    const [open, setOpen] = useState(false);
  
    return (
      <div className="flex items-center justify-center md:hidden">
        <motion.div animate={open ? "open" : "closed"} className="relative">
          <button
            onClick={() => setOpen((pv) => !pv)}
            className="flex items-center gap-2 px-3 py-2 rounded-md text-indigo-50 bg-indigo-500 hover:bg-indigo-500 transition-colors"
          >
            <span className="font-medium text-sm">More News</span>
            <motion.span variants={iconVariants}>
              <FiChevronDown />
            </motion.span>
          </button>
  
          <motion.ul
            initial={wrapperVariants.closed}
            variants={wrapperVariants}
            style={{ originY: "top", translateX: "-50%" }}
            className="flex flex-col gap-2 p-2 rounded-lg bg-white shadow-xl absolute top-[120%] left-[40%] w-36 overflow-hidden"
          >
            { categories.map((category, i) => (
                <Option key={i} setOpen={setOpen} text={category} />
            ))}
          </motion.ul>
        </motion.div>
      </div>
    );
  };
  
  const Option = ({ text, setOpen }) => {
    return (
      <motion.li
        variants={itemVariants}
        onClick={() => setOpen(false)}
        className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-slate-700 hover:text-indigo-500 transition-colors cursor-pointer"
      >
        <span>
            <Link to={'/berita/' + text.toLowerCase()}>{text}</Link>
        </span>
      </motion.li>
    );
  };
  
  const wrapperVariants = {
    open: {
      scaleY: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    closed: {
      scaleY: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.1,
      },
    },
  };
  
  const iconVariants = {
    open: { rotate: 180 },
    closed: { rotate: 0 },
  };
  
  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
      },
    },
    closed: {
      opacity: 0,
      y: -15,
      transition: {
        when: "afterChildren",
      },
    },
  };

export default Header;