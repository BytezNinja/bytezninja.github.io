import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { textVariant, slideIn } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center">
        <p className={styles.sectionSubText}>
          What I know 
        </p>
        <h2 className={styles.sectionHeadText}>
          Technology
        </h2>
      </motion.div>
      <motion.div
        variants={slideIn("right", "", 0.3, 1)}
        className='flex flex-wrap items-center justify-center mt-20 gap-10'
      >
        {technologies.map((technology) => (
          <div className='w-28 h-28 flex items-center justify-center' key={technology.name}>
            <img
              src={technology.icon}
              alt={technology.name}
              className="w-12 h-12 object-contain"
            />
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(Tech, "");
