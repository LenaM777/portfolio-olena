import sprite from "../../assets/icons/sprite.svg";

const Icon = ({ name, color, size = 24, className = "" }) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || "currentColor"}
      className={`icon icon-${name} ${className}`}
      aria-hidden="true"
      focusable="false"
    >
      <use href={`${sprite}#icon-${name}`} />
    </svg>
  );
};

export default Icon;
