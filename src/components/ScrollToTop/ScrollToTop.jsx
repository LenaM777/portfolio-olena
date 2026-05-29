import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "../../components/Icons/Icons";
import "./ScrollToTop.scss";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="scroll-to-top"
          aria-label="Scroll to top"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          whileHover={{ y: -6 }}
          whileTap={{ scale: 0.9, y: 0 }}
          whileFocus={{ y: -6 }}
          transition={{ duration: 0.2 }}
        >
          <Icon name="arrow-up" className="scroll-to-top__arrow" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
