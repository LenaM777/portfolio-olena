import React from "react";
import { HashLink } from "react-router-hash-link";
import Icon from "@/components/Icons/Icons";
import "./Logo.scss";

const Logo = ({ className = "" }) => {
  return (
    <div className={`logo ${className}`}>
      <HashLink smooth to="#top" aria-label="Logo - Home page">
        <Icon name="github" className="logo__icon" />
        <span>LENA</span>
      </HashLink>
    </div>
  );
};

export default Logo;
