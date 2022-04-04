import Header from "../organisms/main/Header";
import Content from "../organisms/main/Content";
import { ThemeProvider } from "styled-components";
import { themeLight, themeDark } from "../../theme.js";
import { useState } from "react";

const Main = () => {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <>
    <ThemeProvider theme={theme==="light"? themeLight: themeDark}>
      <Header themeToggler={themeToggler}/>
      <Content />
    </ThemeProvider>
    </>
  );
};
export default Main;
