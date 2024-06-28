import React, { useState, useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";

const FloatingNav = ({
  navItems,
  className,
}) => {
  const [visible, setVisible] = useState(true); // Initially visible
  const scrollYProgress = useMotionValue(0);

  useEffect(() => {
    const onScroll = () => {
      const current = scrollYProgress.get();

      if (current < 0.05) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    };

    

    return () => {
      
    };
  }, [scrollYProgress]);

  return (
    <motion.div
      initial={{
        opacity: 1,
        y: -100,
      }}
      animate={{
        y: visible ? 0 : -100,
        opacity: visible ? 1 : 0,
      }}
      transition={{
        duration: 0.2,
      }}
      className={`flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-8 pl-8 py-2 items-center justify-center space-x-4 ${className}`}
    >
      {navItems.map((navItem, idx) => (
        <a
          key={`link-${idx}`}
          href={navItem.link}
          className={`relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500`}
        >
          <span className="block hover:text-black sm:hidden">{navItem.icon}</span>
          <span className="hidden hover:font-semibold hover:text-black sm:block text-sm">{navItem.name}</span>
        </a>
      ))}
      
    </motion.div>
  );
};

export default FloatingNav;
