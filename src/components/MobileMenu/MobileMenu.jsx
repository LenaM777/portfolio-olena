import { useEffect } from "react";
import NavLinks from "../NavLinks/NavLinks";
import ThemeToggler from "../ThemeToggler/ThemeToggler";
import Icon from "../Icons/Icons";
import "./MobileMenu.scss";

export default function MobileMenu({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);
  if (!isOpen) return null;

  return (
    <div
      className="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation menu"
    >
      <div
        className="mobile-menu__overlay"
        onClick={onClose}
        aria-hidden="true"
      ></div>
      <div className="mobile-menu__content">
        <ThemeToggler />
        <button
          type="button"
          className="mobile-menu__close"
          onClick={onClose}
          aria-label="Close menu"
        >
          <Icon name="close" />
        </button>
        <nav className="mobile-menu__nav" aria-label="Mobile navigation">
          <NavLinks className="nav-link" onClick={onClose} />
        </nav>
      </div>
    </div>
  );
}
