export default function ThemeToggle({ darkMode, onToggle }) {
  return (
    <button
      type="button"
      className="btn"
      onClick={onToggle}
      aria-pressed={darkMode}
    >
      {darkMode ? "Light mode" : "Dark mode"}
    </button>
  );
}