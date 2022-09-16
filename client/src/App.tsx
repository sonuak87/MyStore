import ListData from "./components/ListData";
import Header from "./layout/Header";
import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import { useState } from "react";
function App() {
  // App changes
  const [themeP, setTheme] = useState(true);
  const theme = createTheme({
    palette: { mode: themeP ? "dark" : "light" },
  });
  const updateTheme = () => setTheme((prev) => !prev);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header onChange={updateTheme} />
      <Container>
        <ListData />
      </Container>
    </ThemeProvider>
  );
}

export default App;
