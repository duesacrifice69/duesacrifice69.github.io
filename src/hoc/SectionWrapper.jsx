import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";
import { forwardRef } from "react";

const StarWrapper = (Component, idName) =>
  forwardRef(function HOC(props, ref) {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        id={idName}
        ref={ref}
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <Component />
      </motion.section>
    );
  });

export default StarWrapper;
