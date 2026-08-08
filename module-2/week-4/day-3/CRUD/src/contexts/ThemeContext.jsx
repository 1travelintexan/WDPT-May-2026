import { createContext, useState } from "react";

//first is to create the context
const ThemeContext = createContext();

//second is to create the wrapper
const ThemeWrapper = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <ThemeContext.Provider
      value={{ petName: "Ragnar", darkTheme, setDarkTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

//third is to export both to use in other files
export { ThemeContext, ThemeWrapper };
