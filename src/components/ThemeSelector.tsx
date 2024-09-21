import { ChangeEventHandler, useEffect, useState } from "react";

const THEMES = ["colorful", "halloween", "coffee"];

export default function ThemeSelector() {
  const [theme, setTheme] = useState(THEMES[0]);

  const handleThemeUpdate = (theme: string) => {
    setTheme(theme);
  };

  useEffect(() => {
    for (let themes of THEMES) {
      document.body.classList.remove(themes);
    }
    document.body.classList.add(theme);
  }, [theme]);

  const renderOptions = () => {
    const options = [];
    for (let theme of THEMES) {
      options.push(
        <option value={theme}>
          {theme.charAt(0).toUpperCase() + theme.slice(1)}
        </option>
      );
    }
    return options;
  };

  return (
    <select
      name="themes"
      id="themes"
      onChange={(e) => handleThemeUpdate(e.target.value)}
      className="rounded bg-primary cursor-pointer"
    >
      {renderOptions()}
    </select>
  );
}
