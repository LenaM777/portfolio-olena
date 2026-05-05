import { useTheme } from "../../context/ThemeContext";

const ThemeToggler = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button type="button" onClick={toggleTheme}>
      {theme === "light" ? "Dark" : "Light"}
      Theme
    </button>
  );
};

export default ThemeToggler;
