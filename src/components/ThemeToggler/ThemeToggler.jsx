import { useTheme } from "@/context/ThemeContext";
import Icon from "@/components/Icons/Icons";

const ThemeToggler = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="btn-touch-target"
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
    >
      <Icon name={theme === "light" ? "moon-o" : "sun"} />
    </button>
  );
};

export default ThemeToggler;
