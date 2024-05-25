import React, { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface AnimatedPhotoProps {
  alt?: string;
  MallPhoto: string;
  Vegetables: string;
}

const AnimatedPhoto: FC<AnimatedPhotoProps> = ({
  alt = "Animated Photo",
  MallPhoto,
  Vegetables,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  const checkScreenSize = () => {
    if (window.innerWidth <= 930) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <div className="w-full h-[450px] max-mdx:h-[200px]  mt-[5%] ml-[5%] bg-gradient-to-r from-primary to-secondary ">
      <motion.img
        src={isMobile ? Vegetables : MallPhoto}
        alt={alt}
        className="h-full w-full max-mdx:object-contain"
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: "0%", opacity: 1 }}
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default AnimatedPhoto;
