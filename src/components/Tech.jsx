import React from "react";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { textVariant, slideIn} from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I know 
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Technology
        </h2>
      </motion.div>
      <motion.p
        variants={slideIn("right", "", 0.3, 1)}
        className='flex flex-row flex-wrap justify-center mt-20 gap-10'
      >
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <img
              src={technology.icon}
              alt={technology.name}
              className="w-12 h-12 object-contain"
            />
          </div>
        ))}
        </motion.p>
    </>
  );
};

export default SectionWrapper(Tech, "");