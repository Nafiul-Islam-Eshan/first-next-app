"use client";

import { Switch, SwitchGroup } from "@heroui/react";
import { useTheme } from "next-themes";

const ThemeToggleButton = () => {
  const { theme, setTheme } = useTheme();

  console.log(theme);

  return (
    // <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
    //    {theme === "dark" ? "Light" : "Dark"} Mode
    // </button>
    <SwitchGroup className="overflow-x-auto" orientation="horizontal">
      <Switch name="dark" onChange={() => setTheme( theme === 'light' ? 'light' : 'dark')}>
        <Switch.Content>
          <Switch.Control>
            <Switch.Thumb />
          </Switch.Control>
          Light
        </Switch.Content>
      </Switch>
    </SwitchGroup>
  );
};

export default ThemeToggleButton;
