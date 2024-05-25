import React, { FC } from "react";
import { motion } from "framer-motion";

interface AnimatedPhotoProps {
  src: string;
  alt?: string;
}

const AnimatedPhoto: FC<AnimatedPhotoProps> = ({
  src,
  alt = "Animated Photo",
}) => {
  return (
    <div className="w-full h-[450px] mt-[5%]">
      <motion.img
        src={src}
        alt={alt}
        className="h-full w-full"
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
