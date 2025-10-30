import React from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import '../Styles/LeftViewCard.css'; 

const LeftViewCard = ({ title, img, description }) => {
  const controlsLeft = useAnimation();
  const controlsRight = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.3 });

  React.useEffect(() => {
    if (inView) {
      controlsLeft.start({
        x: 0,
        opacity: 1,
        transition: { duration: 1, ease: "easeOut" }
      });
      controlsRight.start({
        x: 0,
        opacity: 1,
        transition: { duration: 1, ease: "easeOut" }
      });
    } else {
      controlsLeft.start({ x: -150, opacity: 0, transition: { duration: 0.5 } });
      controlsRight.start({ x: 150, opacity: 0, transition: { duration: 0.5 } });
    }
  }, [inView, controlsLeft, controlsRight]);

  return (
    <div className="left-view-container" ref={ref}>
      <h2 className="center-title">{title}</h2>
      <div className="left-view-wrapper">
        <motion.div
          className="s-left-view-card"
          initial={{ x: -150, opacity: 0 }}
          animate={controlsLeft}
        >
          <img src={img} alt={title} className="left-img" />
        </motion.div>

        <motion.div
          className="right-view-card"
          initial={{ x: 150, opacity: 0 }}
          animate={controlsRight}
        >
          <p>{description}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default LeftViewCard;
