import ListData from "./components/ListData";
import Header from "./layout/Header";
import { ToastContainer, toast } from "react-toastify";
import React from "react";
import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import { useState } from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Aboutus from "./components/About/Aboutus";
import Contactus from "./components/Contact/ContactUs";
import ProductDetails from "./components/product/ProductDetails";
import "react-toastify/dist/ReactToastify.css";
function App() {
  // App changes
  const [themeP, setTheme] = useState(true);
  const theme = createTheme({
    palette: { mode: themeP ? "light" : "dark" },
  });
  const updateTheme = () => setTheme((prev) => !prev);

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer position="bottom-right" hideProgressBar theme="colored" />
      <CssBaseline />
      <Header onChange={updateTheme} />
      <Container>
        <Routes>
          <Route path="/" element={<ListData />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/products" element={<ListData />} />
          <Route path="/About" element={<Aboutus />} />
          <Route path="/contact" element={<Contactus />} />\
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;
